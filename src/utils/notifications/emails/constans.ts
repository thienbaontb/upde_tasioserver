export class EConstans {
    static EMAIL = "no-reply@upit.asia";
    static PASSWORD = "abc13579";

    static SENDER_NAME = '"Whalelo" ' + EConstans.EMAIL;

    static TITLE_EMAIL = {
        APPOINTMENT: "Appointment",
        DROP_OFF_LUGGAGE: "Drop-off luggage",
        COMPLETE_BOOKING: "Complete booking"
    }
    static EMAIL_NAME = {
        NEW_APPOINTMENT_ENDUSER: `[Appointment] New appointment at %s #%s`,
        DROP_OFF_ENDUSER: `[Drop off] Droped off at %s #%s`,
        COMPLETE_ENDUSER: `[Complete] Completed at %s #%s`,
        HAVE_NEW_APPOINTMENT_STATION: `[Appointment] New appointment request with %s #%s`,
        DROP_OFF_STATION: `[Drop off] Received items of %s #%s`,
        COMPLETE_STATION: `[Complete] Returned items to %s #%s`,
    }
}