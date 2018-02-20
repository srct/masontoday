import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens/index';

export function start() {
    registerScreens();
    Navigation.events().onAppLaunched(() => {
        Navigation.setRoot({
            stack: {
                options: {
                    topBar: {
                        hidden: true,
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
