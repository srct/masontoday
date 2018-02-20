import { Navigation } from 'react-native-navigation';
import { App } from './App';
import { Details } from './Details';

export function registerScreens() {
    Navigation.registerComponent('navigation.masontoday.homescreen', () => App);
    Navigation.registerComponent('navigation.masontoday.details', () => Details);
}
