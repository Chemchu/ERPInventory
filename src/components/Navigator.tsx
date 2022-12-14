import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./HomeScreen";
import { SecondaryScreen } from "./SecondaryScreen";

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#39C498",
                    color: "white"
                },
                headerShown: false,
            }}
        >
            <StackNavigator.Screen
                name="ERPInventory"
                component={HomeScreen}
            />
            <StackNavigator.Screen
                name="Secondary"
                component={SecondaryScreen}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
