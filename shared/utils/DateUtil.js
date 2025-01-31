export default class DateUtil {
    constructor() {

    }

    getTodayDate() {
        return new Date()
    }

    /*
        Has to be a Date() class that is passed in
    */
   // FIXME: Eventually this has to account for user time zone
    getDateString(date) {
        return date.toLocaleDateString("en-CA"); 
    }

    convertStringToDateObject(dateString) {
        return new Date(dateString + 'T00:00:00');
    }
}