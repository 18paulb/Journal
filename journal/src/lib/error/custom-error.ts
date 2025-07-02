import { StatusCode } from "../enums/status-code";

export default class CustomError extends Error {

  protected additionalInfo;
  protected statusCode: StatusCode

  constructor(message: string, statusCode: StatusCode, additionalInfo = {}) {
    // Call parent constructor with message
    super(message);

    // Set the name property to the class name
    this.name = this.constructor.name;
    this.statusCode = statusCode

    // Add any custom properties
    this.additionalInfo = additionalInfo;

    // Capture stack trace (keeps proper line numbers in stack trace)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
