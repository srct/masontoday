import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens/index';

export function start() {
    registerScreens();
    Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
            stack: {
                options: {
                    topBar: {
                        visible: false,
                    },
                },
                children: [
                    {
                        component: {
                            name: 'navigation.masontoday.homescreen',
                        },
                    },
                ],
            },
        });
    });
}
