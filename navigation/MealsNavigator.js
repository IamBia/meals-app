import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native'

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors"




const MealsNavigator= createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMeals,
  },
  MealDetail: MealDetailsScreen,
}, {
  defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

export default createAppContainer(MealsNavigator);
