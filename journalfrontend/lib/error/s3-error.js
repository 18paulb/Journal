import CustomError from '@/lib/error/custom-error';

export default class S3Error extends CustomError {
  constructor(message, statusCode, additionalInfo = {}) {
    super(message, additionalInfo);
    this.statusCode = statusCode;
  }
}
