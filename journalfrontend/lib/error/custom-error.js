export default class CustomError extends Error {
  constructor(message, additionalInfo = {}) {
    // Call parent constructor with message
    super(message);

    // Set the name property to the class name
    this.name = this.constructor.name;

    // Add any custom properties
    this.additionalInfo = additionalInfo;

    // Capture stack trace (keeps proper line numbers in stack trace)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
