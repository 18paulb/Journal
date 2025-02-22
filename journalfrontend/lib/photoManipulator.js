export function toBase64(buffer) {
  return buffer.toString('base64');
}

export function getMimeTypePrefix(base64String, fileExtension) {
  let contentType;
  switch (fileExtension) {
    case 'png':
      contentType = 'image/png';
      break;
    case 'jpg':
    case 'jpeg':
      contentType = 'image/jpeg';
      break;
    case 'gif':
      contentType = 'image/gif';
      break;
    case 'webp':
      contentType = 'image/webp';
      break;
    case 'webm':
      contentType = 'audio/webm';
      break;
    default:
      contentType = 'image/jpeg'; // Default to JPEG if unknown
  }

  return `data:${contentType};base64,${base64String}`;
}
