import CustomError from '@/lib/error/custom-error';
import { StatusCode } from '../enums/status-code';

export default class MediaUploadError extends CustomError {
  constructor(message: string, statusCode: StatusCode, additionalInfo = {}) {
    super(message, statusCode, additionalInfo);
  }
}
