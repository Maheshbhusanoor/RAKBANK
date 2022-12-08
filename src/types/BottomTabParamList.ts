import {NavigatorScreenParams} from '@react-navigation/native';

export type BottomTabParamList = {
  homePage: NavigatorScreenParams<HomePageNavigatorParamsList>;
  loginPage: NavigatorScreenParams<LoginPageNavigatorParamsList>;
};

export type HomePageNavigatorParamsList = {
  mainHome: undefined;
  magazineDetails: {url: string; page: string};
  magazineList: {page: string};
  productSearch: {
    clearInput: boolean;
    promotionId?: string;
  };
};

export type LoginPageNavigatorParamsList = {
  mainHome: undefined;
  magazineDetails: {url: string; page: string};
  magazineList: {page: string};
  productSearch: {
    clearInput: boolean;
    promotionId?: string;
  };
};
