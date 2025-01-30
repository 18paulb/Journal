export default class DateUtil {
    constructor() {

    }

    getTodayDate() {
        return new Date()
    }

    /*
        Has to be a Date() class that is passed in
    */
    getDateString(date) {
        return date.toISOString().split('T')[0]
    }

    convertStringToDateObject(dateString) {
        return new Date(dateString);
    }
}