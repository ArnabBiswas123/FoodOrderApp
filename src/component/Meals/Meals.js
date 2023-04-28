import { Fragment } from "react";
import MealsSummary from './MealsSummery'
import AvailableMeals from "./AvailableMeals";
const Meals=()=>{
    return(
        <Fragment>
    <MealsSummary></MealsSummary>
    <AvailableMeals></AvailableMeals>
    </Fragment>
    )
}
export default Meals;