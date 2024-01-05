import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home/Home';
import Message from '../message/Message';
import Community from '../community/Community';

import {COLOR, ICON} from '../../constants/constant';

import TabIcon from '../../component/TabIcon';
import Review from '../review/review';

const Tab = createBottomTabNavigator();

export function Mytabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLOR.primary,
        tabBarStyle: {height: 60},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focus={focused} url={ICON.HOME} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focus={focused} url={ICON.COMMUNITY} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focus={focused} url={ICON.MESSAGE} />
          ),
        }}
      />
      <Tab.Screen
        name="Review"
        component={Review}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focus={focused} url={ICON.SCHEDULE} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
