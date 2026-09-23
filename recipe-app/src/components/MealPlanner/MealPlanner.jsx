/**
 * MealPlanner.jsx
 * 7-Day calendar component organizing meals across breakfast, lunch, and dinner.
 */

import PropTypes from "prop-types";
import DayCard from "./DayCard";
import styles from "./MealPlanner.module.css";

export default function MealPlanner({
  plan = [],
  getRecipeById,
  onAddMeal,
  onRemoveMeal,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.weekGrid}>
        {plan.map((day, idx) => (
          <DayCard
            key={day.name}
            day={day}
            dayIndex={idx}
            getRecipeById={getRecipeById}
            onAddMeal={onAddMeal}
            onRemoveMeal={onRemoveMeal}
          />
        ))}
      </div>
    </div>
  );
}

MealPlanner.propTypes = {
  /** Array of 7 day schedule objects */
  plan: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      num: PropTypes.number.isRequired,
      meals: PropTypes.object,
    })
  ).isRequired,
  /** Recipe lookup helper function */
  getRecipeById: PropTypes.func.isRequired,
  /** Callback to add meal to day and slot */
  onAddMeal: PropTypes.func.isRequired,
  /** Callback to remove meal from day and slot */
  onRemoveMeal: PropTypes.func.isRequired,
};
