export default class DateFactory {
  static convertStringToDateObject(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day); // Correct local date
    return date;
  }

  /**
   * Returns the current date in the user's local timezone.
   * Format: YYYY-MM-DD (ISO-like format)
   */
  static getLocalDateString() {
    const date = new Date();
    return date.toLocaleDateString("en-CA", {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
  }

  /**
   * Returns the current Date object in the user's local timezone.
   */
  static getTodayDate() {
    return new Date();
  }

  static createDateFromNumbers(year, month, day) {
    return new Date(year, month, day);
  }
}
