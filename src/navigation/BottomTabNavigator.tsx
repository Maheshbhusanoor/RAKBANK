import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabParamList} from '../types';
import {bottomTabs} from '../services/constants';

import colors from '../themes/colors';
import {TabIcon} from '../components';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          style: {
            height: 80,
            borderTopColor: 'rgba(255,255,255,0.1)',
          },
        })}>
        <Tab.Screen
          name={bottomTabs.productsTab}
          component={HomeStackNavigator}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: props => {
              return (
                <TabIcon
                  source={'google-wallet'}
                  name={'Products'}
                  {...props}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={bottomTabs.liveChatTab}
          component={HomeStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: props => {
              return <TabIcon source={'wechat'} name={'Livechat'} {...props} />;
            },
          }}
        />
        <Tab.Screen
          name={bottomTabs.rakToken}
          component={HomeStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: props => {
              return <TabIcon source={'key'} name={'RAK Token'} {...props} />;
            },
          }}
        />
        <Tab.Screen
          name={bottomTabs.locateUs}
          component={HomeStackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: props => {
              return (
                <TabIcon
                  source={'location-arrow'}
                  name={'Locate us'}
                  {...props}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
