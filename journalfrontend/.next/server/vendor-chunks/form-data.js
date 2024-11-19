/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/form-data";
exports.ids = ["vendor-chunks/form-data"];
exports.modules = {

/***/ "(ssr)/./node_modules/form-data/lib/form_data.js":
/*!*************************************************!*\
  !*** ./node_modules/form-data/lib/form_data.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var CombinedStream = __webpack_require__(/*! combined-stream */ \"(ssr)/./node_modules/combined-stream/lib/combined_stream.js\");\nvar util = __webpack_require__(/*! util */ \"util\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar http = __webpack_require__(/*! http */ \"http\");\nvar https = __webpack_require__(/*! https */ \"https\");\nvar parseUrl = (__webpack_require__(/*! url */ \"url\").parse);\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar Stream = (__webpack_require__(/*! stream */ \"stream\").Stream);\nvar mime = __webpack_require__(/*! mime-types */ \"(ssr)/./node_modules/mime-types/index.js\");\nvar asynckit = __webpack_require__(/*! asynckit */ \"(ssr)/./node_modules/asynckit/index.js\");\nvar populate = __webpack_require__(/*! ./populate.js */ \"(ssr)/./node_modules/form-data/lib/populate.js\");\n\n// Public API\nmodule.exports = FormData;\n\n// make it a Stream\nutil.inherits(FormData, CombinedStream);\n\n/**\n * Create readable \"multipart/form-data\" streams.\n * Can be used to submit forms\n * and file uploads to other web applications.\n *\n * @constructor\n * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream\n */\nfunction FormData(options) {\n  if (!(this instanceof FormData)) {\n    return new FormData(options);\n  }\n\n  this._overheadLength = 0;\n  this._valueLength = 0;\n  this._valuesToMeasure = [];\n\n  CombinedStream.call(this);\n\n  options = options || {};\n  for (var option in options) {\n    this[option] = options[option];\n  }\n}\n\nFormData.LINE_BREAK = '\\r\\n';\nFormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';\n\nFormData.prototype.append = function(field, value, options) {\n\n  options = options || {};\n\n  // allow filename as single option\n  if (typeof options == 'string') {\n    options = {filename: options};\n  }\n\n  var append = CombinedStream.prototype.append.bind(this);\n\n  // all that streamy business can't handle numbers\n  if (typeof value == 'number') {\n    value = '' + value;\n  }\n\n  // https://github.com/felixge/node-form-data/issues/38\n  if (Array.isArray(value)) {\n    // Please convert your array into string\n    // the way web server expects it\n    this._error(new Error('Arrays are not supported.'));\n    return;\n  }\n\n  var header = this._multiPartHeader(field, value, options);\n  var footer = this._multiPartFooter();\n\n  append(header);\n  append(value);\n  append(footer);\n\n  // pass along options.knownLength\n  this._trackLength(header, value, options);\n};\n\nFormData.prototype._trackLength = function(header, value, options) {\n  var valueLength = 0;\n\n  // used w/ getLengthSync(), when length is known.\n  // e.g. for streaming directly from a remote server,\n  // w/ a known file a size, and not wanting to wait for\n  // incoming file to finish to get its size.\n  if (options.knownLength != null) {\n    valueLength += +options.knownLength;\n  } else if (Buffer.isBuffer(value)) {\n    valueLength = value.length;\n  } else if (typeof value === 'string') {\n    valueLength = Buffer.byteLength(value);\n  }\n\n  this._valueLength += valueLength;\n\n  // @check why add CRLF? does this account for custom/multiple CRLFs?\n  this._overheadLength +=\n    Buffer.byteLength(header) +\n    FormData.LINE_BREAK.length;\n\n  // empty or either doesn't have path or not an http response or not a stream\n  if (!value || ( !value.path && !(value.readable && value.hasOwnProperty('httpVersion')) && !(value instanceof Stream))) {\n    return;\n  }\n\n  // no need to bother with the length\n  if (!options.knownLength) {\n    this._valuesToMeasure.push(value);\n  }\n};\n\nFormData.prototype._lengthRetriever = function(value, callback) {\n\n  if (value.hasOwnProperty('fd')) {\n\n    // take read range into a account\n    // `end` = Infinity –> read file till the end\n    //\n    // TODO: Looks like there is bug in Node fs.createReadStream\n    // it doesn't respect `end` options without `start` options\n    // Fix it when node fixes it.\n    // https://github.com/joyent/node/issues/7819\n    if (value.end != undefined && value.end != Infinity && value.start != undefined) {\n\n      // when end specified\n      // no need to calculate range\n      // inclusive, starts with 0\n      callback(null, value.end + 1 - (value.start ? value.start : 0));\n\n    // not that fast snoopy\n    } else {\n      // still need to fetch file size from fs\n      fs.stat(value.path, function(err, stat) {\n\n        var fileSize;\n\n        if (err) {\n          callback(err);\n          return;\n        }\n\n        // update final size based on the range options\n        fileSize = stat.size - (value.start ? value.start : 0);\n        callback(null, fileSize);\n      });\n    }\n\n  // or http response\n  } else if (value.hasOwnProperty('httpVersion')) {\n    callback(null, +value.headers['content-length']);\n\n  // or request stream http://github.com/mikeal/request\n  } else if (value.hasOwnProperty('httpModule')) {\n    // wait till response come back\n    value.on('response', function(response) {\n      value.pause();\n      callback(null, +response.headers['content-length']);\n    });\n    value.resume();\n\n  // something else\n  } else {\n    callback('Unknown stream');\n  }\n};\n\nFormData.prototype._multiPartHeader = function(field, value, options) {\n  // custom header specified (as string)?\n  // it becomes responsible for boundary\n  // (e.g. to handle extra CRLFs on .NET servers)\n  if (typeof options.header == 'string') {\n    return options.header;\n  }\n\n  var contentDisposition = this._getContentDisposition(value, options);\n  var contentType = this._getContentType(value, options);\n\n  var contents = '';\n  var headers  = {\n    // add custom disposition as third element or keep it two elements if not\n    'Content-Disposition': ['form-data', 'name=\"' + field + '\"'].concat(contentDisposition || []),\n    // if no content type. allow it to be empty array\n    'Content-Type': [].concat(contentType || [])\n  };\n\n  // allow custom headers.\n  if (typeof options.header == 'object') {\n    populate(headers, options.header);\n  }\n\n  var header;\n  for (var prop in headers) {\n    if (!headers.hasOwnProperty(prop)) continue;\n    header = headers[prop];\n\n    // skip nullish headers.\n    if (header == null) {\n      continue;\n    }\n\n    // convert all headers to arrays.\n    if (!Array.isArray(header)) {\n      header = [header];\n    }\n\n    // add non-empty headers.\n    if (header.length) {\n      contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;\n    }\n  }\n\n  return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;\n};\n\nFormData.prototype._getContentDisposition = function(value, options) {\n\n  var filename\n    , contentDisposition\n    ;\n\n  if (typeof options.filepath === 'string') {\n    // custom filepath for relative paths\n    filename = path.normalize(options.filepath).replace(/\\\\/g, '/');\n  } else if (options.filename || value.name || value.path) {\n    // custom filename take precedence\n    // formidable and the browser add a name property\n    // fs- and request- streams have path property\n    filename = path.basename(options.filename || value.name || value.path);\n  } else if (value.readable && value.hasOwnProperty('httpVersion')) {\n    // or try http response\n    filename = path.basename(value.client._httpMessage.path || '');\n  }\n\n  if (filename) {\n    contentDisposition = 'filename=\"' + filename + '\"';\n  }\n\n  return contentDisposition;\n};\n\nFormData.prototype._getContentType = function(value, options) {\n\n  // use custom content-type above all\n  var contentType = options.contentType;\n\n  // or try `name` from formidable, browser\n  if (!contentType && value.name) {\n    contentType = mime.lookup(value.name);\n  }\n\n  // or try `path` from fs-, request- streams\n  if (!contentType && value.path) {\n    contentType = mime.lookup(value.path);\n  }\n\n  // or if it's http-reponse\n  if (!contentType && value.readable && value.hasOwnProperty('httpVersion')) {\n    contentType = value.headers['content-type'];\n  }\n\n  // or guess it from the filepath or filename\n  if (!contentType && (options.filepath || options.filename)) {\n    contentType = mime.lookup(options.filepath || options.filename);\n  }\n\n  // fallback to the default content type if `value` is not simple value\n  if (!contentType && typeof value == 'object') {\n    contentType = FormData.DEFAULT_CONTENT_TYPE;\n  }\n\n  return contentType;\n};\n\nFormData.prototype._multiPartFooter = function() {\n  return function(next) {\n    var footer = FormData.LINE_BREAK;\n\n    var lastPart = (this._streams.length === 0);\n    if (lastPart) {\n      footer += this._lastBoundary();\n    }\n\n    next(footer);\n  }.bind(this);\n};\n\nFormData.prototype._lastBoundary = function() {\n  return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;\n};\n\nFormData.prototype.getHeaders = function(userHeaders) {\n  var header;\n  var formHeaders = {\n    'content-type': 'multipart/form-data; boundary=' + this.getBoundary()\n  };\n\n  for (header in userHeaders) {\n    if (userHeaders.hasOwnProperty(header)) {\n      formHeaders[header.toLowerCase()] = userHeaders[header];\n    }\n  }\n\n  return formHeaders;\n};\n\nFormData.prototype.setBoundary = function(boundary) {\n  this._boundary = boundary;\n};\n\nFormData.prototype.getBoundary = function() {\n  if (!this._boundary) {\n    this._generateBoundary();\n  }\n\n  return this._boundary;\n};\n\nFormData.prototype.getBuffer = function() {\n  var dataBuffer = new Buffer.alloc( 0 );\n  var boundary = this.getBoundary();\n\n  // Create the form content. Add Line breaks to the end of data.\n  for (var i = 0, len = this._streams.length; i < len; i++) {\n    if (typeof this._streams[i] !== 'function') {\n\n      // Add content to the buffer.\n      if(Buffer.isBuffer(this._streams[i])) {\n        dataBuffer = Buffer.concat( [dataBuffer, this._streams[i]]);\n      }else {\n        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(this._streams[i])]);\n      }\n\n      // Add break after content.\n      if (typeof this._streams[i] !== 'string' || this._streams[i].substring( 2, boundary.length + 2 ) !== boundary) {\n        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(FormData.LINE_BREAK)] );\n      }\n    }\n  }\n\n  // Add the footer and return the Buffer object.\n  return Buffer.concat( [dataBuffer, Buffer.from(this._lastBoundary())] );\n};\n\nFormData.prototype._generateBoundary = function() {\n  // This generates a 50 character boundary similar to those used by Firefox.\n  // They are optimized for boyer-moore parsing.\n  var boundary = '--------------------------';\n  for (var i = 0; i < 24; i++) {\n    boundary += Math.floor(Math.random() * 10).toString(16);\n  }\n\n  this._boundary = boundary;\n};\n\n// Note: getLengthSync DOESN'T calculate streams length\n// As workaround one can calculate file size manually\n// and add it as knownLength option\nFormData.prototype.getLengthSync = function() {\n  var knownLength = this._overheadLength + this._valueLength;\n\n  // Don't get confused, there are 3 \"internal\" streams for each keyval pair\n  // so it basically checks if there is any value added to the form\n  if (this._streams.length) {\n    knownLength += this._lastBoundary().length;\n  }\n\n  // https://github.com/form-data/form-data/issues/40\n  if (!this.hasKnownLength()) {\n    // Some async length retrievers are present\n    // therefore synchronous length calculation is false.\n    // Please use getLength(callback) to get proper length\n    this._error(new Error('Cannot calculate proper length in synchronous way.'));\n  }\n\n  return knownLength;\n};\n\n// Public API to check if length of added values is known\n// https://github.com/form-data/form-data/issues/196\n// https://github.com/form-data/form-data/issues/262\nFormData.prototype.hasKnownLength = function() {\n  var hasKnownLength = true;\n\n  if (this._valuesToMeasure.length) {\n    hasKnownLength = false;\n  }\n\n  return hasKnownLength;\n};\n\nFormData.prototype.getLength = function(cb) {\n  var knownLength = this._overheadLength + this._valueLength;\n\n  if (this._streams.length) {\n    knownLength += this._lastBoundary().length;\n  }\n\n  if (!this._valuesToMeasure.length) {\n    process.nextTick(cb.bind(this, null, knownLength));\n    return;\n  }\n\n  asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {\n    if (err) {\n      cb(err);\n      return;\n    }\n\n    values.forEach(function(length) {\n      knownLength += length;\n    });\n\n    cb(null, knownLength);\n  });\n};\n\nFormData.prototype.submit = function(params, cb) {\n  var request\n    , options\n    , defaults = {method: 'post'}\n    ;\n\n  // parse provided url if it's string\n  // or treat it as options object\n  if (typeof params == 'string') {\n\n    params = parseUrl(params);\n    options = populate({\n      port: params.port,\n      path: params.pathname,\n      host: params.hostname,\n      protocol: params.protocol\n    }, defaults);\n\n  // use custom params\n  } else {\n\n    options = populate(params, defaults);\n    // if no port provided use default one\n    if (!options.port) {\n      options.port = options.protocol == 'https:' ? 443 : 80;\n    }\n  }\n\n  // put that good code in getHeaders to some use\n  options.headers = this.getHeaders(params.headers);\n\n  // https if specified, fallback to http in any other case\n  if (options.protocol == 'https:') {\n    request = https.request(options);\n  } else {\n    request = http.request(options);\n  }\n\n  // get content length and fire away\n  this.getLength(function(err, length) {\n    if (err && err !== 'Unknown stream') {\n      this._error(err);\n      return;\n    }\n\n    // add content length\n    if (length) {\n      request.setHeader('Content-Length', length);\n    }\n\n    this.pipe(request);\n    if (cb) {\n      var onResponse;\n\n      var callback = function (error, responce) {\n        request.removeListener('error', callback);\n        request.removeListener('response', onResponse);\n\n        return cb.call(this, error, responce);\n      };\n\n      onResponse = callback.bind(this, null);\n\n      request.on('error', callback);\n      request.on('response', onResponse);\n    }\n  }.bind(this));\n\n  return request;\n};\n\nFormData.prototype._error = function(err) {\n  if (!this.error) {\n    this.error = err;\n    this.pause();\n    this.emit('error', err);\n  }\n};\n\nFormData.prototype.toString = function () {\n  return '[object FormData]';\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZm9ybS1kYXRhL2xpYi9mb3JtX2RhdGEuanMiLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCLG1CQUFPLENBQUMsb0ZBQWlCO0FBQzlDLFdBQVcsbUJBQU8sQ0FBQyxrQkFBTTtBQUN6QixXQUFXLG1CQUFPLENBQUMsa0JBQU07QUFDekIsV0FBVyxtQkFBTyxDQUFDLGtCQUFNO0FBQ3pCLFlBQVksbUJBQU8sQ0FBQyxvQkFBTztBQUMzQixlQUFlLDZDQUFvQjtBQUNuQyxTQUFTLG1CQUFPLENBQUMsY0FBSTtBQUNyQixhQUFhLG9EQUF3QjtBQUNyQyxXQUFXLG1CQUFPLENBQUMsNERBQVk7QUFDL0IsZUFBZSxtQkFBTyxDQUFDLHdEQUFVO0FBQ2pDLGVBQWUsbUJBQU8sQ0FBQyxxRUFBZTs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsU0FBUztBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2JyYW5kb25wYXVsL0NTL1BlcnNvbmFsUHJvamVjdHMvV2ViSm91cm5hbC9qb3VybmFsZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2Zvcm0tZGF0YS9saWIvZm9ybV9kYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBDb21iaW5lZFN0cmVhbSA9IHJlcXVpcmUoJ2NvbWJpbmVkLXN0cmVhbScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbnZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xudmFyIGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcbnZhciBwYXJzZVVybCA9IHJlcXVpcmUoJ3VybCcpLnBhcnNlO1xudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcbnZhciBTdHJlYW0gPSByZXF1aXJlKCdzdHJlYW0nKS5TdHJlYW07XG52YXIgbWltZSA9IHJlcXVpcmUoJ21pbWUtdHlwZXMnKTtcbnZhciBhc3luY2tpdCA9IHJlcXVpcmUoJ2FzeW5ja2l0Jyk7XG52YXIgcG9wdWxhdGUgPSByZXF1aXJlKCcuL3BvcHVsYXRlLmpzJyk7XG5cbi8vIFB1YmxpYyBBUElcbm1vZHVsZS5leHBvcnRzID0gRm9ybURhdGE7XG5cbi8vIG1ha2UgaXQgYSBTdHJlYW1cbnV0aWwuaW5oZXJpdHMoRm9ybURhdGEsIENvbWJpbmVkU3RyZWFtKTtcblxuLyoqXG4gKiBDcmVhdGUgcmVhZGFibGUgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgc3RyZWFtcy5cbiAqIENhbiBiZSB1c2VkIHRvIHN1Ym1pdCBmb3Jtc1xuICogYW5kIGZpbGUgdXBsb2FkcyB0byBvdGhlciB3ZWIgYXBwbGljYXRpb25zLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBQcm9wZXJ0aWVzIHRvIGJlIGFkZGVkL292ZXJyaWRlbiBmb3IgRm9ybURhdGEgYW5kIENvbWJpbmVkU3RyZWFtXG4gKi9cbmZ1bmN0aW9uIEZvcm1EYXRhKG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEZvcm1EYXRhKSkge1xuICAgIHJldHVybiBuZXcgRm9ybURhdGEob3B0aW9ucyk7XG4gIH1cblxuICB0aGlzLl9vdmVyaGVhZExlbmd0aCA9IDA7XG4gIHRoaXMuX3ZhbHVlTGVuZ3RoID0gMDtcbiAgdGhpcy5fdmFsdWVzVG9NZWFzdXJlID0gW107XG5cbiAgQ29tYmluZWRTdHJlYW0uY2FsbCh0aGlzKTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgZm9yICh2YXIgb3B0aW9uIGluIG9wdGlvbnMpIHtcbiAgICB0aGlzW29wdGlvbl0gPSBvcHRpb25zW29wdGlvbl07XG4gIH1cbn1cblxuRm9ybURhdGEuTElORV9CUkVBSyA9ICdcXHJcXG4nO1xuRm9ybURhdGEuREVGQVVMVF9DT05URU5UX1RZUEUgPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcblxuRm9ybURhdGEucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKGZpZWxkLCB2YWx1ZSwgb3B0aW9ucykge1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIGFsbG93IGZpbGVuYW1lIGFzIHNpbmdsZSBvcHRpb25cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09ICdzdHJpbmcnKSB7XG4gICAgb3B0aW9ucyA9IHtmaWxlbmFtZTogb3B0aW9uc307XG4gIH1cblxuICB2YXIgYXBwZW5kID0gQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLmFwcGVuZC5iaW5kKHRoaXMpO1xuXG4gIC8vIGFsbCB0aGF0IHN0cmVhbXkgYnVzaW5lc3MgY2FuJ3QgaGFuZGxlIG51bWJlcnNcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZWxpeGdlL25vZGUtZm9ybS1kYXRhL2lzc3Vlcy8zOFxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBQbGVhc2UgY29udmVydCB5b3VyIGFycmF5IGludG8gc3RyaW5nXG4gICAgLy8gdGhlIHdheSB3ZWIgc2VydmVyIGV4cGVjdHMgaXRcbiAgICB0aGlzLl9lcnJvcihuZXcgRXJyb3IoJ0FycmF5cyBhcmUgbm90IHN1cHBvcnRlZC4nKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGhlYWRlciA9IHRoaXMuX211bHRpUGFydEhlYWRlcihmaWVsZCwgdmFsdWUsIG9wdGlvbnMpO1xuICB2YXIgZm9vdGVyID0gdGhpcy5fbXVsdGlQYXJ0Rm9vdGVyKCk7XG5cbiAgYXBwZW5kKGhlYWRlcik7XG4gIGFwcGVuZCh2YWx1ZSk7XG4gIGFwcGVuZChmb290ZXIpO1xuXG4gIC8vIHBhc3MgYWxvbmcgb3B0aW9ucy5rbm93bkxlbmd0aFxuICB0aGlzLl90cmFja0xlbmd0aChoZWFkZXIsIHZhbHVlLCBvcHRpb25zKTtcbn07XG5cbkZvcm1EYXRhLnByb3RvdHlwZS5fdHJhY2tMZW5ndGggPSBmdW5jdGlvbihoZWFkZXIsIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB2YWx1ZUxlbmd0aCA9IDA7XG5cbiAgLy8gdXNlZCB3LyBnZXRMZW5ndGhTeW5jKCksIHdoZW4gbGVuZ3RoIGlzIGtub3duLlxuICAvLyBlLmcuIGZvciBzdHJlYW1pbmcgZGlyZWN0bHkgZnJvbSBhIHJlbW90ZSBzZXJ2ZXIsXG4gIC8vIHcvIGEga25vd24gZmlsZSBhIHNpemUsIGFuZCBub3Qgd2FudGluZyB0byB3YWl0IGZvclxuICAvLyBpbmNvbWluZyBmaWxlIHRvIGZpbmlzaCB0byBnZXQgaXRzIHNpemUuXG4gIGlmIChvcHRpb25zLmtub3duTGVuZ3RoICE9IG51bGwpIHtcbiAgICB2YWx1ZUxlbmd0aCArPSArb3B0aW9ucy5rbm93bkxlbmd0aDtcbiAgfSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHZhbHVlTGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgodmFsdWUpO1xuICB9XG5cbiAgdGhpcy5fdmFsdWVMZW5ndGggKz0gdmFsdWVMZW5ndGg7XG5cbiAgLy8gQGNoZWNrIHdoeSBhZGQgQ1JMRj8gZG9lcyB0aGlzIGFjY291bnQgZm9yIGN1c3RvbS9tdWx0aXBsZSBDUkxGcz9cbiAgdGhpcy5fb3ZlcmhlYWRMZW5ndGggKz1cbiAgICBCdWZmZXIuYnl0ZUxlbmd0aChoZWFkZXIpICtcbiAgICBGb3JtRGF0YS5MSU5FX0JSRUFLLmxlbmd0aDtcblxuICAvLyBlbXB0eSBvciBlaXRoZXIgZG9lc24ndCBoYXZlIHBhdGggb3Igbm90IGFuIGh0dHAgcmVzcG9uc2Ugb3Igbm90IGEgc3RyZWFtXG4gIGlmICghdmFsdWUgfHwgKCAhdmFsdWUucGF0aCAmJiAhKHZhbHVlLnJlYWRhYmxlICYmIHZhbHVlLmhhc093blByb3BlcnR5KCdodHRwVmVyc2lvbicpKSAmJiAhKHZhbHVlIGluc3RhbmNlb2YgU3RyZWFtKSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBubyBuZWVkIHRvIGJvdGhlciB3aXRoIHRoZSBsZW5ndGhcbiAgaWYgKCFvcHRpb25zLmtub3duTGVuZ3RoKSB7XG4gICAgdGhpcy5fdmFsdWVzVG9NZWFzdXJlLnB1c2godmFsdWUpO1xuICB9XG59O1xuXG5Gb3JtRGF0YS5wcm90b3R5cGUuX2xlbmd0aFJldHJpZXZlciA9IGZ1bmN0aW9uKHZhbHVlLCBjYWxsYmFjaykge1xuXG4gIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnZmQnKSkge1xuXG4gICAgLy8gdGFrZSByZWFkIHJhbmdlIGludG8gYSBhY2NvdW50XG4gICAgLy8gYGVuZGAgPSBJbmZpbml0eSDigJM+IHJlYWQgZmlsZSB0aWxsIHRoZSBlbmRcbiAgICAvL1xuICAgIC8vIFRPRE86IExvb2tzIGxpa2UgdGhlcmUgaXMgYnVnIGluIE5vZGUgZnMuY3JlYXRlUmVhZFN0cmVhbVxuICAgIC8vIGl0IGRvZXNuJ3QgcmVzcGVjdCBgZW5kYCBvcHRpb25zIHdpdGhvdXQgYHN0YXJ0YCBvcHRpb25zXG4gICAgLy8gRml4IGl0IHdoZW4gbm9kZSBmaXhlcyBpdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzc4MTlcbiAgICBpZiAodmFsdWUuZW5kICE9IHVuZGVmaW5lZCAmJiB2YWx1ZS5lbmQgIT0gSW5maW5pdHkgJiYgdmFsdWUuc3RhcnQgIT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgIC8vIHdoZW4gZW5kIHNwZWNpZmllZFxuICAgICAgLy8gbm8gbmVlZCB0byBjYWxjdWxhdGUgcmFuZ2VcbiAgICAgIC8vIGluY2x1c2l2ZSwgc3RhcnRzIHdpdGggMFxuICAgICAgY2FsbGJhY2sobnVsbCwgdmFsdWUuZW5kICsgMSAtICh2YWx1ZS5zdGFydCA/IHZhbHVlLnN0YXJ0IDogMCkpO1xuXG4gICAgLy8gbm90IHRoYXQgZmFzdCBzbm9vcHlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc3RpbGwgbmVlZCB0byBmZXRjaCBmaWxlIHNpemUgZnJvbSBmc1xuICAgICAgZnMuc3RhdCh2YWx1ZS5wYXRoLCBmdW5jdGlvbihlcnIsIHN0YXQpIHtcblxuICAgICAgICB2YXIgZmlsZVNpemU7XG5cbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIGZpbmFsIHNpemUgYmFzZWQgb24gdGhlIHJhbmdlIG9wdGlvbnNcbiAgICAgICAgZmlsZVNpemUgPSBzdGF0LnNpemUgLSAodmFsdWUuc3RhcnQgPyB2YWx1ZS5zdGFydCA6IDApO1xuICAgICAgICBjYWxsYmFjayhudWxsLCBmaWxlU2l6ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgLy8gb3IgaHR0cCByZXNwb25zZVxuICB9IGVsc2UgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KCdodHRwVmVyc2lvbicpKSB7XG4gICAgY2FsbGJhY2sobnVsbCwgK3ZhbHVlLmhlYWRlcnNbJ2NvbnRlbnQtbGVuZ3RoJ10pO1xuXG4gIC8vIG9yIHJlcXVlc3Qgc3RyZWFtIGh0dHA6Ly9naXRodWIuY29tL21pa2VhbC9yZXF1ZXN0XG4gIH0gZWxzZSBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoJ2h0dHBNb2R1bGUnKSkge1xuICAgIC8vIHdhaXQgdGlsbCByZXNwb25zZSBjb21lIGJhY2tcbiAgICB2YWx1ZS5vbigncmVzcG9uc2UnLCBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgdmFsdWUucGF1c2UoKTtcbiAgICAgIGNhbGxiYWNrKG51bGwsICtyZXNwb25zZS5oZWFkZXJzWydjb250ZW50LWxlbmd0aCddKTtcbiAgICB9KTtcbiAgICB2YWx1ZS5yZXN1bWUoKTtcblxuICAvLyBzb21ldGhpbmcgZWxzZVxuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrKCdVbmtub3duIHN0cmVhbScpO1xuICB9XG59O1xuXG5Gb3JtRGF0YS5wcm90b3R5cGUuX211bHRpUGFydEhlYWRlciA9IGZ1bmN0aW9uKGZpZWxkLCB2YWx1ZSwgb3B0aW9ucykge1xuICAvLyBjdXN0b20gaGVhZGVyIHNwZWNpZmllZCAoYXMgc3RyaW5nKT9cbiAgLy8gaXQgYmVjb21lcyByZXNwb25zaWJsZSBmb3IgYm91bmRhcnlcbiAgLy8gKGUuZy4gdG8gaGFuZGxlIGV4dHJhIENSTEZzIG9uIC5ORVQgc2VydmVycylcbiAgaWYgKHR5cGVvZiBvcHRpb25zLmhlYWRlciA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBvcHRpb25zLmhlYWRlcjtcbiAgfVxuXG4gIHZhciBjb250ZW50RGlzcG9zaXRpb24gPSB0aGlzLl9nZXRDb250ZW50RGlzcG9zaXRpb24odmFsdWUsIG9wdGlvbnMpO1xuICB2YXIgY29udGVudFR5cGUgPSB0aGlzLl9nZXRDb250ZW50VHlwZSh2YWx1ZSwgb3B0aW9ucyk7XG5cbiAgdmFyIGNvbnRlbnRzID0gJyc7XG4gIHZhciBoZWFkZXJzICA9IHtcbiAgICAvLyBhZGQgY3VzdG9tIGRpc3Bvc2l0aW9uIGFzIHRoaXJkIGVsZW1lbnQgb3Iga2VlcCBpdCB0d28gZWxlbWVudHMgaWYgbm90XG4gICAgJ0NvbnRlbnQtRGlzcG9zaXRpb24nOiBbJ2Zvcm0tZGF0YScsICduYW1lPVwiJyArIGZpZWxkICsgJ1wiJ10uY29uY2F0KGNvbnRlbnREaXNwb3NpdGlvbiB8fCBbXSksXG4gICAgLy8gaWYgbm8gY29udGVudCB0eXBlLiBhbGxvdyBpdCB0byBiZSBlbXB0eSBhcnJheVxuICAgICdDb250ZW50LVR5cGUnOiBbXS5jb25jYXQoY29udGVudFR5cGUgfHwgW10pXG4gIH07XG5cbiAgLy8gYWxsb3cgY3VzdG9tIGhlYWRlcnMuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5oZWFkZXIgPT0gJ29iamVjdCcpIHtcbiAgICBwb3B1bGF0ZShoZWFkZXJzLCBvcHRpb25zLmhlYWRlcik7XG4gIH1cblxuICB2YXIgaGVhZGVyO1xuICBmb3IgKHZhciBwcm9wIGluIGhlYWRlcnMpIHtcbiAgICBpZiAoIWhlYWRlcnMuaGFzT3duUHJvcGVydHkocHJvcCkpIGNvbnRpbnVlO1xuICAgIGhlYWRlciA9IGhlYWRlcnNbcHJvcF07XG5cbiAgICAvLyBza2lwIG51bGxpc2ggaGVhZGVycy5cbiAgICBpZiAoaGVhZGVyID09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGNvbnZlcnQgYWxsIGhlYWRlcnMgdG8gYXJyYXlzLlxuICAgIGlmICghQXJyYXkuaXNBcnJheShoZWFkZXIpKSB7XG4gICAgICBoZWFkZXIgPSBbaGVhZGVyXTtcbiAgICB9XG5cbiAgICAvLyBhZGQgbm9uLWVtcHR5IGhlYWRlcnMuXG4gICAgaWYgKGhlYWRlci5sZW5ndGgpIHtcbiAgICAgIGNvbnRlbnRzICs9IHByb3AgKyAnOiAnICsgaGVhZGVyLmpvaW4oJzsgJykgKyBGb3JtRGF0YS5MSU5FX0JSRUFLO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnLS0nICsgdGhpcy5nZXRCb3VuZGFyeSgpICsgRm9ybURhdGEuTElORV9CUkVBSyArIGNvbnRlbnRzICsgRm9ybURhdGEuTElORV9CUkVBSztcbn07XG5cbkZvcm1EYXRhLnByb3RvdHlwZS5fZ2V0Q29udGVudERpc3Bvc2l0aW9uID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMpIHtcblxuICB2YXIgZmlsZW5hbWVcbiAgICAsIGNvbnRlbnREaXNwb3NpdGlvblxuICAgIDtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsZXBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gY3VzdG9tIGZpbGVwYXRoIGZvciByZWxhdGl2ZSBwYXRoc1xuICAgIGZpbGVuYW1lID0gcGF0aC5ub3JtYWxpemUob3B0aW9ucy5maWxlcGF0aCkucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMuZmlsZW5hbWUgfHwgdmFsdWUubmFtZSB8fCB2YWx1ZS5wYXRoKSB7XG4gICAgLy8gY3VzdG9tIGZpbGVuYW1lIHRha2UgcHJlY2VkZW5jZVxuICAgIC8vIGZvcm1pZGFibGUgYW5kIHRoZSBicm93c2VyIGFkZCBhIG5hbWUgcHJvcGVydHlcbiAgICAvLyBmcy0gYW5kIHJlcXVlc3QtIHN0cmVhbXMgaGF2ZSBwYXRoIHByb3BlcnR5XG4gICAgZmlsZW5hbWUgPSBwYXRoLmJhc2VuYW1lKG9wdGlvbnMuZmlsZW5hbWUgfHwgdmFsdWUubmFtZSB8fCB2YWx1ZS5wYXRoKTtcbiAgfSBlbHNlIGlmICh2YWx1ZS5yZWFkYWJsZSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnaHR0cFZlcnNpb24nKSkge1xuICAgIC8vIG9yIHRyeSBodHRwIHJlc3BvbnNlXG4gICAgZmlsZW5hbWUgPSBwYXRoLmJhc2VuYW1lKHZhbHVlLmNsaWVudC5faHR0cE1lc3NhZ2UucGF0aCB8fCAnJyk7XG4gIH1cblxuICBpZiAoZmlsZW5hbWUpIHtcbiAgICBjb250ZW50RGlzcG9zaXRpb24gPSAnZmlsZW5hbWU9XCInICsgZmlsZW5hbWUgKyAnXCInO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnREaXNwb3NpdGlvbjtcbn07XG5cbkZvcm1EYXRhLnByb3RvdHlwZS5fZ2V0Q29udGVudFR5cGUgPSBmdW5jdGlvbih2YWx1ZSwgb3B0aW9ucykge1xuXG4gIC8vIHVzZSBjdXN0b20gY29udGVudC10eXBlIGFib3ZlIGFsbFxuICB2YXIgY29udGVudFR5cGUgPSBvcHRpb25zLmNvbnRlbnRUeXBlO1xuXG4gIC8vIG9yIHRyeSBgbmFtZWAgZnJvbSBmb3JtaWRhYmxlLCBicm93c2VyXG4gIGlmICghY29udGVudFR5cGUgJiYgdmFsdWUubmFtZSkge1xuICAgIGNvbnRlbnRUeXBlID0gbWltZS5sb29rdXAodmFsdWUubmFtZSk7XG4gIH1cblxuICAvLyBvciB0cnkgYHBhdGhgIGZyb20gZnMtLCByZXF1ZXN0LSBzdHJlYW1zXG4gIGlmICghY29udGVudFR5cGUgJiYgdmFsdWUucGF0aCkge1xuICAgIGNvbnRlbnRUeXBlID0gbWltZS5sb29rdXAodmFsdWUucGF0aCk7XG4gIH1cblxuICAvLyBvciBpZiBpdCdzIGh0dHAtcmVwb25zZVxuICBpZiAoIWNvbnRlbnRUeXBlICYmIHZhbHVlLnJlYWRhYmxlICYmIHZhbHVlLmhhc093blByb3BlcnR5KCdodHRwVmVyc2lvbicpKSB7XG4gICAgY29udGVudFR5cGUgPSB2YWx1ZS5oZWFkZXJzWydjb250ZW50LXR5cGUnXTtcbiAgfVxuXG4gIC8vIG9yIGd1ZXNzIGl0IGZyb20gdGhlIGZpbGVwYXRoIG9yIGZpbGVuYW1lXG4gIGlmICghY29udGVudFR5cGUgJiYgKG9wdGlvbnMuZmlsZXBhdGggfHwgb3B0aW9ucy5maWxlbmFtZSkpIHtcbiAgICBjb250ZW50VHlwZSA9IG1pbWUubG9va3VwKG9wdGlvbnMuZmlsZXBhdGggfHwgb3B0aW9ucy5maWxlbmFtZSk7XG4gIH1cblxuICAvLyBmYWxsYmFjayB0byB0aGUgZGVmYXVsdCBjb250ZW50IHR5cGUgaWYgYHZhbHVlYCBpcyBub3Qgc2ltcGxlIHZhbHVlXG4gIGlmICghY29udGVudFR5cGUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgY29udGVudFR5cGUgPSBGb3JtRGF0YS5ERUZBVUxUX0NPTlRFTlRfVFlQRTtcbiAgfVxuXG4gIHJldHVybiBjb250ZW50VHlwZTtcbn07XG5cbkZvcm1EYXRhLnByb3RvdHlwZS5fbXVsdGlQYXJ0Rm9vdGVyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmdW5jdGlvbihuZXh0KSB7XG4gICAgdmFyIGZvb3RlciA9IEZvcm1EYXRhLkxJTkVfQlJFQUs7XG5cbiAgICB2YXIgbGFzdFBhcnQgPSAodGhpcy5fc3RyZWFtcy5sZW5ndGggPT09IDApO1xuICAgIGlmIChsYXN0UGFydCkge1xuICAgICAgZm9vdGVyICs9IHRoaXMuX2xhc3RCb3VuZGFyeSgpO1xuICAgIH1cblxuICAgIG5leHQoZm9vdGVyKTtcbiAgfS5iaW5kKHRoaXMpO1xufTtcblxuRm9ybURhdGEucHJvdG90eXBlLl9sYXN0Qm91bmRhcnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICctLScgKyB0aGlzLmdldEJvdW5kYXJ5KCkgKyAnLS0nICsgRm9ybURhdGEuTElORV9CUkVBSztcbn07XG5cbkZvcm1EYXRhLnByb3RvdHlwZS5nZXRIZWFkZXJzID0gZnVuY3Rpb24odXNlckhlYWRlcnMpIHtcbiAgdmFyIGhlYWRlcjtcbiAgdmFyIGZvcm1IZWFkZXJzID0ge1xuICAgICdjb250ZW50LXR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9JyArIHRoaXMuZ2V0Qm91bmRhcnkoKVxuICB9O1xuXG4gIGZvciAoaGVhZGVyIGluIHVzZXJIZWFkZXJzKSB7XG4gICAgaWYgKHVzZXJIZWFkZXJzLmhhc093blByb3BlcnR5KGhlYWRlcikpIHtcbiAgICAgIGZvcm1IZWFkZXJzW2hlYWRlci50b0xvd2VyQ2FzZSgpXSA9IHVzZXJIZWFkZXJzW2hlYWRlcl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1IZWFkZXJzO1xufTtcblxuRm9ybURhdGEucHJvdG90eXBlLnNldEJvdW5kYXJ5ID0gZnVuY3Rpb24oYm91bmRhcnkpIHtcbiAgdGhpcy5fYm91bmRhcnkgPSBib3VuZGFyeTtcbn07XG5cbkZvcm1EYXRhLnByb3RvdHlwZS5nZXRCb3VuZGFyeSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuX2JvdW5kYXJ5KSB7XG4gICAgdGhpcy5fZ2VuZXJhdGVCb3VuZGFyeSgpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuX2JvdW5kYXJ5O1xufTtcblxuRm9ybURhdGEucHJvdG90eXBlLmdldEJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZGF0YUJ1ZmZlciA9IG5ldyBCdWZmZXIuYWxsb2MoIDAgKTtcbiAgdmFyIGJvdW5kYXJ5ID0gdGhpcy5nZXRCb3VuZGFyeSgpO1xuXG4gIC8vIENyZWF0ZSB0aGUgZm9ybSBjb250ZW50LiBBZGQgTGluZSBicmVha3MgdG8gdGhlIGVuZCBvZiBkYXRhLlxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5fc3RyZWFtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fc3RyZWFtc1tpXSAhPT0gJ2Z1bmN0aW9uJykge1xuXG4gICAgICAvLyBBZGQgY29udGVudCB0byB0aGUgYnVmZmVyLlxuICAgICAgaWYoQnVmZmVyLmlzQnVmZmVyKHRoaXMuX3N0cmVhbXNbaV0pKSB7XG4gICAgICAgIGRhdGFCdWZmZXIgPSBCdWZmZXIuY29uY2F0KCBbZGF0YUJ1ZmZlciwgdGhpcy5fc3RyZWFtc1tpXV0pO1xuICAgICAgfWVsc2Uge1xuICAgICAgICBkYXRhQnVmZmVyID0gQnVmZmVyLmNvbmNhdCggW2RhdGFCdWZmZXIsIEJ1ZmZlci5mcm9tKHRoaXMuX3N0cmVhbXNbaV0pXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBicmVhayBhZnRlciBjb250ZW50LlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdHJlYW1zW2ldICE9PSAnc3RyaW5nJyB8fCB0aGlzLl9zdHJlYW1zW2ldLnN1YnN0cmluZyggMiwgYm91bmRhcnkubGVuZ3RoICsgMiApICE9PSBib3VuZGFyeSkge1xuICAgICAgICBkYXRhQnVmZmVyID0gQnVmZmVyLmNvbmNhdCggW2RhdGFCdWZmZXIsIEJ1ZmZlci5mcm9tKEZvcm1EYXRhLkxJTkVfQlJFQUspXSApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0aGUgZm9vdGVyIGFuZCByZXR1cm4gdGhlIEJ1ZmZlciBvYmplY3QuXG4gIHJldHVybiBCdWZmZXIuY29uY2F0KCBbZGF0YUJ1ZmZlciwgQnVmZmVyLmZyb20odGhpcy5fbGFzdEJvdW5kYXJ5KCkpXSApO1xufTtcblxuRm9ybURhdGEucHJvdG90eXBlLl9nZW5lcmF0ZUJvdW5kYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIC8vIFRoaXMgZ2VuZXJhdGVzIGEgNTAgY2hhcmFjdGVyIGJvdW5kYXJ5IHNpbWlsYXIgdG8gdGhvc2UgdXNlZCBieSBGaXJlZm94LlxuICAvLyBUaGV5IGFyZSBvcHRpbWl6ZWQgZm9yIGJveWVyLW1vb3JlIHBhcnNpbmcuXG4gIHZhciBib3VuZGFyeSA9ICctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgIGJvdW5kYXJ5ICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKS50b1N0cmluZygxNik7XG4gIH1cblxuICB0aGlzLl9ib3VuZGFyeSA9IGJvdW5kYXJ5O1xufTtcblxuLy8gTm90ZTogZ2V0TGVuZ3RoU3luYyBET0VTTidUIGNhbGN1bGF0ZSBzdHJlYW1zIGxlbmd0aFxuLy8gQXMgd29ya2Fyb3VuZCBvbmUgY2FuIGNhbGN1bGF0ZSBmaWxlIHNpemUgbWFudWFsbHlcbi8vIGFuZCBhZGQgaXQgYXMga25vd25MZW5ndGggb3B0aW9uXG5Gb3JtRGF0YS5wcm90b3R5cGUuZ2V0TGVuZ3RoU3luYyA9IGZ1bmN0aW9uKCkge1xuICB2YXIga25vd25MZW5ndGggPSB0aGlzLl9vdmVyaGVhZExlbmd0aCArIHRoaXMuX3ZhbHVlTGVuZ3RoO1xuXG4gIC8vIERvbid0IGdldCBjb25mdXNlZCwgdGhlcmUgYXJlIDMgXCJpbnRlcm5hbFwiIHN0cmVhbXMgZm9yIGVhY2gga2V5dmFsIHBhaXJcbiAgLy8gc28gaXQgYmFzaWNhbGx5IGNoZWNrcyBpZiB0aGVyZSBpcyBhbnkgdmFsdWUgYWRkZWQgdG8gdGhlIGZvcm1cbiAgaWYgKHRoaXMuX3N0cmVhbXMubGVuZ3RoKSB7XG4gICAga25vd25MZW5ndGggKz0gdGhpcy5fbGFzdEJvdW5kYXJ5KCkubGVuZ3RoO1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zvcm0tZGF0YS9mb3JtLWRhdGEvaXNzdWVzLzQwXG4gIGlmICghdGhpcy5oYXNLbm93bkxlbmd0aCgpKSB7XG4gICAgLy8gU29tZSBhc3luYyBsZW5ndGggcmV0cmlldmVycyBhcmUgcHJlc2VudFxuICAgIC8vIHRoZXJlZm9yZSBzeW5jaHJvbm91cyBsZW5ndGggY2FsY3VsYXRpb24gaXMgZmFsc2UuXG4gICAgLy8gUGxlYXNlIHVzZSBnZXRMZW5ndGgoY2FsbGJhY2spIHRvIGdldCBwcm9wZXIgbGVuZ3RoXG4gICAgdGhpcy5fZXJyb3IobmV3IEVycm9yKCdDYW5ub3QgY2FsY3VsYXRlIHByb3BlciBsZW5ndGggaW4gc3luY2hyb25vdXMgd2F5LicpKTtcbiAgfVxuXG4gIHJldHVybiBrbm93bkxlbmd0aDtcbn07XG5cbi8vIFB1YmxpYyBBUEkgdG8gY2hlY2sgaWYgbGVuZ3RoIG9mIGFkZGVkIHZhbHVlcyBpcyBrbm93blxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zvcm0tZGF0YS9mb3JtLWRhdGEvaXNzdWVzLzE5NlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zvcm0tZGF0YS9mb3JtLWRhdGEvaXNzdWVzLzI2MlxuRm9ybURhdGEucHJvdG90eXBlLmhhc0tub3duTGVuZ3RoID0gZnVuY3Rpb24oKSB7XG4gIHZhciBoYXNLbm93bkxlbmd0aCA9IHRydWU7XG5cbiAgaWYgKHRoaXMuX3ZhbHVlc1RvTWVhc3VyZS5sZW5ndGgpIHtcbiAgICBoYXNLbm93bkxlbmd0aCA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGhhc0tub3duTGVuZ3RoO1xufTtcblxuRm9ybURhdGEucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uKGNiKSB7XG4gIHZhciBrbm93bkxlbmd0aCA9IHRoaXMuX292ZXJoZWFkTGVuZ3RoICsgdGhpcy5fdmFsdWVMZW5ndGg7XG5cbiAgaWYgKHRoaXMuX3N0cmVhbXMubGVuZ3RoKSB7XG4gICAga25vd25MZW5ndGggKz0gdGhpcy5fbGFzdEJvdW5kYXJ5KCkubGVuZ3RoO1xuICB9XG5cbiAgaWYgKCF0aGlzLl92YWx1ZXNUb01lYXN1cmUubGVuZ3RoKSB7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhjYi5iaW5kKHRoaXMsIG51bGwsIGtub3duTGVuZ3RoKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYXN5bmNraXQucGFyYWxsZWwodGhpcy5fdmFsdWVzVG9NZWFzdXJlLCB0aGlzLl9sZW5ndGhSZXRyaWV2ZXIsIGZ1bmN0aW9uKGVyciwgdmFsdWVzKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgY2IoZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YWx1ZXMuZm9yRWFjaChmdW5jdGlvbihsZW5ndGgpIHtcbiAgICAgIGtub3duTGVuZ3RoICs9IGxlbmd0aDtcbiAgICB9KTtcblxuICAgIGNiKG51bGwsIGtub3duTGVuZ3RoKTtcbiAgfSk7XG59O1xuXG5Gb3JtRGF0YS5wcm90b3R5cGUuc3VibWl0ID0gZnVuY3Rpb24ocGFyYW1zLCBjYikge1xuICB2YXIgcmVxdWVzdFxuICAgICwgb3B0aW9uc1xuICAgICwgZGVmYXVsdHMgPSB7bWV0aG9kOiAncG9zdCd9XG4gICAgO1xuXG4gIC8vIHBhcnNlIHByb3ZpZGVkIHVybCBpZiBpdCdzIHN0cmluZ1xuICAvLyBvciB0cmVhdCBpdCBhcyBvcHRpb25zIG9iamVjdFxuICBpZiAodHlwZW9mIHBhcmFtcyA9PSAnc3RyaW5nJykge1xuXG4gICAgcGFyYW1zID0gcGFyc2VVcmwocGFyYW1zKTtcbiAgICBvcHRpb25zID0gcG9wdWxhdGUoe1xuICAgICAgcG9ydDogcGFyYW1zLnBvcnQsXG4gICAgICBwYXRoOiBwYXJhbXMucGF0aG5hbWUsXG4gICAgICBob3N0OiBwYXJhbXMuaG9zdG5hbWUsXG4gICAgICBwcm90b2NvbDogcGFyYW1zLnByb3RvY29sXG4gICAgfSwgZGVmYXVsdHMpO1xuXG4gIC8vIHVzZSBjdXN0b20gcGFyYW1zXG4gIH0gZWxzZSB7XG5cbiAgICBvcHRpb25zID0gcG9wdWxhdGUocGFyYW1zLCBkZWZhdWx0cyk7XG4gICAgLy8gaWYgbm8gcG9ydCBwcm92aWRlZCB1c2UgZGVmYXVsdCBvbmVcbiAgICBpZiAoIW9wdGlvbnMucG9ydCkge1xuICAgICAgb3B0aW9ucy5wb3J0ID0gb3B0aW9ucy5wcm90b2NvbCA9PSAnaHR0cHM6JyA/IDQ0MyA6IDgwO1xuICAgIH1cbiAgfVxuXG4gIC8vIHB1dCB0aGF0IGdvb2QgY29kZSBpbiBnZXRIZWFkZXJzIHRvIHNvbWUgdXNlXG4gIG9wdGlvbnMuaGVhZGVycyA9IHRoaXMuZ2V0SGVhZGVycyhwYXJhbXMuaGVhZGVycyk7XG5cbiAgLy8gaHR0cHMgaWYgc3BlY2lmaWVkLCBmYWxsYmFjayB0byBodHRwIGluIGFueSBvdGhlciBjYXNlXG4gIGlmIChvcHRpb25zLnByb3RvY29sID09ICdodHRwczonKSB7XG4gICAgcmVxdWVzdCA9IGh0dHBzLnJlcXVlc3Qob3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgcmVxdWVzdCA9IGh0dHAucmVxdWVzdChvcHRpb25zKTtcbiAgfVxuXG4gIC8vIGdldCBjb250ZW50IGxlbmd0aCBhbmQgZmlyZSBhd2F5XG4gIHRoaXMuZ2V0TGVuZ3RoKGZ1bmN0aW9uKGVyciwgbGVuZ3RoKSB7XG4gICAgaWYgKGVyciAmJiBlcnIgIT09ICdVbmtub3duIHN0cmVhbScpIHtcbiAgICAgIHRoaXMuX2Vycm9yKGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYWRkIGNvbnRlbnQgbGVuZ3RoXG4gICAgaWYgKGxlbmd0aCkge1xuICAgICAgcmVxdWVzdC5zZXRIZWFkZXIoJ0NvbnRlbnQtTGVuZ3RoJywgbGVuZ3RoKTtcbiAgICB9XG5cbiAgICB0aGlzLnBpcGUocmVxdWVzdCk7XG4gICAgaWYgKGNiKSB7XG4gICAgICB2YXIgb25SZXNwb25zZTtcblxuICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKGVycm9yLCByZXNwb25jZSkge1xuICAgICAgICByZXF1ZXN0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGNhbGxiYWNrKTtcbiAgICAgICAgcmVxdWVzdC5yZW1vdmVMaXN0ZW5lcigncmVzcG9uc2UnLCBvblJlc3BvbnNlKTtcblxuICAgICAgICByZXR1cm4gY2IuY2FsbCh0aGlzLCBlcnJvciwgcmVzcG9uY2UpO1xuICAgICAgfTtcblxuICAgICAgb25SZXNwb25zZSA9IGNhbGxiYWNrLmJpbmQodGhpcywgbnVsbCk7XG5cbiAgICAgIHJlcXVlc3Qub24oJ2Vycm9yJywgY2FsbGJhY2spO1xuICAgICAgcmVxdWVzdC5vbigncmVzcG9uc2UnLCBvblJlc3BvbnNlKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgcmV0dXJuIHJlcXVlc3Q7XG59O1xuXG5Gb3JtRGF0YS5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24oZXJyKSB7XG4gIGlmICghdGhpcy5lcnJvcikge1xuICAgIHRoaXMuZXJyb3IgPSBlcnI7XG4gICAgdGhpcy5wYXVzZSgpO1xuICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB9XG59O1xuXG5Gb3JtRGF0YS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnW29iamVjdCBGb3JtRGF0YV0nO1xufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/form-data/lib/form_data.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/form-data/lib/populate.js":
/*!************************************************!*\
  !*** ./node_modules/form-data/lib/populate.js ***!
  \************************************************/
/***/ ((module) => {

eval("// populates missing values\nmodule.exports = function(dst, src) {\n\n  Object.keys(src).forEach(function(prop)\n  {\n    dst[prop] = dst[prop] || src[prop];\n  });\n\n  return dst;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZm9ybS1kYXRhL2xpYi9wb3B1bGF0ZS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2JyYW5kb25wYXVsL0NTL1BlcnNvbmFsUHJvamVjdHMvV2ViSm91cm5hbC9qb3VybmFsZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2Zvcm0tZGF0YS9saWIvcG9wdWxhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcG9wdWxhdGVzIG1pc3NpbmcgdmFsdWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRzdCwgc3JjKSB7XG5cbiAgT2JqZWN0LmtleXMoc3JjKS5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApXG4gIHtcbiAgICBkc3RbcHJvcF0gPSBkc3RbcHJvcF0gfHwgc3JjW3Byb3BdO1xuICB9KTtcblxuICByZXR1cm4gZHN0O1xufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/form-data/lib/populate.js\n");

/***/ })

};
;