/**
 * Fetches data from API
 */
export async function fetchData() {
    try {
        let response = await fetch('http://34.234.214.232');
        //console.warn(response);
        let responseJson = response.json();
        return responseJson;
    } catch (error) {
        return;
    }
}

/**
 * Filters the raw event list received from the API into a list of unique days
 * @param {*} data
 */
export function filterDataIntoDays(data) {
    // the data we receive from the API are split up into events.
    // we want to split the data into days, so we need to search
    // through all the events to find each unique day.

    let days = []; // the list of unique days

    // loop through each event
    data.forEach(event => {
        // check to see if we already added a day with the date of this event
        const daysAlreadyWithDate = days.filter(day => {
            const dayOfWeeksAreSame = event.dayofweek == day.dayofweek;
            const dayOfMonthsAreSame = event.dayofmonth == day.dayofmonth;
            // a date is the same if its day of the week and day of the month are the same
            return daysOfWeeksAreSame && daysOfMonthsAreSame;
        });
        // if a date equal to this event's date has not already been added,
        // add this event's day
        if (daysAlreadyWithDate.length === 0) {
            days.push({ dayofweek: event.dayofweek, dayofmonth: event.dayofmonth });
        }
    });

    // now that we have a list of unique days, we want to add
    // all the events that occur on each day to their respective day.
    // so, loop through each day
    days.forEach(day => {
        // add all the events that occur on this day to this day object
        day.events = data.filter(event => {
            const dayOfWeeksAreSame = event.dayofweek == day.dayofweek;
            const dayOfMonthsAreSame = event.dayofmonth == day.dayofmonth;
            // a date is the same if its day of the week and day of the month are the same
            return daysOfWeeksAreSame && daysOfMonthsAreSame;
        });
    });
    // return the unique list of days
    return days;
}

/**
 * Formats a time given in minutes from midnight to a
 * human readable AP/PM time.
 * @param {number} minutesFromMidnight
 */
export function formatTime(minutesFromMidnight) {
    let hours = Math.floor(minutesFromMidnight / 60);
    let post = '';
    if (hours < 12) {
        post = 'AM';
    } else {
        post = 'PM';
        if (hours > 12) hours = hours % 12;
    }
    const minutes = minutesFromMidnight % 60;
    return `${hours}:${minutes == 0 ? '00' : minutes} ${post}`;
}

/**
 * Shortens a description
 * @param {string} desc
 */
export function formatDescription(desc) {
    const maxLength = 120;
    let shortened = desc.substring(0, maxLength);
    if (desc.length >= maxLength) shortened += '...';
    return shortened;
}
