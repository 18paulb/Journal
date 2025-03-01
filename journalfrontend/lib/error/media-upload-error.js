import CustomError from '@/lib/error/custom-error';

export default class MediaUploadError extends CustomError {
  constructor(message, statusCode, additionalInfo = {}) {
    super(message, additionalInfo);
    this.statusCode = statusCode;
  }
}
