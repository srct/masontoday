import { Alert } from 'react-native';
import { Sentry } from 'react-native-sentry';

class ErrorHandling {
    genericError(error) {
        Sentry.captureException(error);
        Alert.alert(
            'Looks like we ran into a problem!',
            "Don't worry! We've alerted our devs and they'll fix it ASAP!"
        );
        return;
    }
    networkError() {
        Alert.alert(
            "Looks like you're not connected to internet!",
            "Don't worry, we've saved data for the next few days so you won't have a problem"
        );
        return;
    }
}

export default new ErrorHandling();
