import { createStackNavigator } from 'react-navigation';
import { Sentry } from 'react-native-sentry';

import { EventListPage, EventDetailsPage } from 'masontoday/src/components';

if (!__DEV__) {
    Sentry.config('https://4f6e0cb23ab04d5a89c5d6b99b2cb6f2@sentry.io/1279094').install();
}

const App = createStackNavigator(
    {
        EventList: {
            screen: EventListPage,
        },
        EventDetails: {
            screen: EventDetailsPage,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

export default App;
