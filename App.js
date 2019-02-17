import { AsyncStorage } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Sentry } from 'react-native-sentry';

import { EventListPage, EventDetailsPage, SettingsPage } from 'masontoday/src/components';
import { Colors } from 'masontoday/src/utils';

if (!__DEV__) {
    Sentry.config('https://4f6e0cb23ab04d5a89c5d6b99b2cb6f2@sentry.io/1279094').install();
}

async function init() {
    let value = await AsyncStorage.getItem('filter');
    if (!value) {
        await AsyncStorage.setItem('filter', '2');
    }
}
init();

const MainNavigator = createStackNavigator(
    {
        EventList: {
            screen: EventListPage,
        },
        EventDetails: {
            screen: EventDetailsPage,
        },
        Settings: {
            screen: SettingsPage,
        },
    },
    {
        // mode: 'modal',
        defaultNavigationOptions: {
            headerTintColor: Colors.green1,
            headerStyle: {
                backgroundColor: Colors.gray1,
            },
        },
    }
);
const App = createAppContainer(MainNavigator);

export default App;
