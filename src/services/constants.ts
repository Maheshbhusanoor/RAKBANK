import {Platform} from 'react-native';

export const stackScreens = {
  homePage: 'homePage',
  loginPage: 'loginPage',
};
export enum bottomTabs {
  productsTab = 'productsTab',
  liveChatTab = 'liveChatTab',
  rakToken = 'rakToken',
  locateUs = 'locateUs',
}
export interface RouteData {
  params: {[key: string]: any} | undefined;
  navigatorKey: string | undefined;
  routeHistory: string[];
  currentRouteKey: string | undefined;
}
export const baseURL = {
  URL: 'http://localhost:8084/api/v1',
};
export const apiEndpoints = {
  login: 'login',
};
export const isIOS = Platform.OS === 'ios';
export const DEFAULT_LOCALE = 'en';
