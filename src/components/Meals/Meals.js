import React, { Fragment } from "react";

import MealsSummary from "./Meals.Summary";
import AvailabelMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailabelMeals />
    </Fragment>
  );
};

export default Meals;