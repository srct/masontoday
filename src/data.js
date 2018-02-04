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
    let days = [];
    data.forEach(event => {
        const daysAlreadyWithDate = days.filter(day => {
            return event.dayofweek == day.dayofweek && event.dayofmonth == day.dayofmonth;
        });
        // add the day to the days if it's not already there
        if (daysAlreadyWithDate.length === 0) {
            days.push({ dayofweek: event.dayofweek, dayofmonth: event.dayofmonth });
        }
    });
    days.forEach(day => {
        day.events = data.filter(event => {
            return event.dayofweek == day.dayofweek && event.dayofmonth == day.dayofmonth;
        });
    });
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
