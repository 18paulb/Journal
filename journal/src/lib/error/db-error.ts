import CustomError from '@/lib/error/custom-error';

export default class DatabaseError extends CustomError {
  constructor(message: string, statusCode: number, additionalInfo = {}) {
    super(message, statusCode, additionalInfo);
    this.statusCode = statusCode;
  }
}
