import { AsyncStorage } from 'react-native';
import { filter } from 'lodash';
import moment from 'moment';

const QUALITIES = ['excellent', 'verygood', 'good', 'okay'];

class DataManipulation {
    formatData(data, qualities = QUALITIES) {
        // removing events that are of the incorrect quality
        for (let date of data) {
            date.data = filter(date.data, event => qualities.includes(event.quality));
        }

        // removing days before current days
        let formattedData = data;
        if (moment(data[0].datetime).isBefore(moment(), 'day')) {
            formattedData = [];

            for (let date of data) {
                if (moment(date.datetime).isSameOrAfter(moment(), 'day')) {
                    formattedData.push(date);
                }
            }
        }
        return formattedData;
    }

    async getStored25Live() {
        try {
            const data = JSON.parse(await AsyncStorage.getItem('masontoday:25live'));
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    async setStored25Live(data) {
        try {
            await AsyncStorage.setItem('masontoday:25live', JSON.stringify(data));
        } catch (error) {
            console.error(error);
        }
    }
}

export default new DataManipulation();
