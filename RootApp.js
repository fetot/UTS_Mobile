import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import NewsComponent from './screens/News'
import MasukComponent from './screens/Masuk'
import DaftarComponent from './screens/Daftar'

const AppNavigator = createStackNavigator({
    News: {
        screen: NewsComponent
    },
    Masuk : {
        screen : MasukComponent
    },
    Daftar : {
        screen : DaftarComponent
    }
});

export default createAppContainer(AppNavigator);        