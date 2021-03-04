import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailScreen";




const MealsNavigator= createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMeals,
  },
  MealDetail: MealDetailsScreen,
});

export default createAppContainer(MealsNavigator);
