import masontodayAPI from './masontodayAPI';
import { ErrorHandling } from 'masontoday/src/utils';

class Live25API {
    constructor() {
        this.urlprefix = 'api/25live';
    }

    async getEvents() {
        try {
            const response = await fetch(`${masontodayAPI.URL}${this.urlprefix}`);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            ErrorHandling.networkError();
        }
    }
}

export default new Live25API();
