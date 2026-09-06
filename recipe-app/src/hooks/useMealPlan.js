/**
 * useMealPlan.js
 * Custom hook managing the 7-day meal planner schedule.
 * Persists plan data and week offset to localStorage with useEffect sync.
 */

import { useState, useEffect, useCallback, useMemo } from "react";
import { RECIPES_DATA } from "../data/recipesData";
import { storage } from "../utils/helpers";

const STORAGE_KEY = "platr_meal_plan";

const DEFAULT_DAYS = [
  { name: "Mon", num: 28, meals: { lunch: "5", dinner: "7" } },
  { name: "Tue", num: 29, meals: { breakfast: "8" } },
  { name: "Wed", num: 30, meals: { lunch: "6" } },
  { name: "Thu", num: 31, meals: { dinner: "1" } },
  { name: "Fri", num: 1, meals: { dinner: "3" } },
  { name: "Sat", num: 2, meals: { breakfast: "2" } },
  { name: "Sun", num: 3, meals: { lunch: "4", dinner: "7" } },
];

export function useMealPlan() {
  const [weekOffset, setWeekOffset] = useState(0);
  const [plan, setPlan] = useState(() => {
    return storage.get(STORAGE_KEY, DEFAULT_DAYS);
  });

  // Sync state changes with localStorage
  useEffect(() => {
    storage.set(STORAGE_KEY, plan);
  }, [plan]);

  /**
   * Add a recipe to a specific day's meal slot.
   * @param {number} dayIndex - 0-6 (Mon-Sun)
   * @param {'breakfast'|'lunch'|'dinner'} slot
   * @param {string|number} recipeId
   */
  const addMeal = useCallback((dayIndex, slot, recipeId) => {
    setPlan((prevPlan) => {
      return prevPlan.map((day, idx) => {
        if (idx !== dayIndex) return day;
        return {
          ...day,
          meals: {
            ...day.meals,
            [slot]: String(recipeId),
          },
        };
      });
    });
  }, []);

  /**
   * Remove a recipe from a specific day's meal slot.
   * @param {number} dayIndex - 0-6 (Mon-Sun)
   * @param {'breakfast'|'lunch'|'dinner'} slot
   */
  const removeMeal = useCallback((dayIndex, slot) => {
    setPlan((prevPlan) => {
      return prevPlan.map((day, idx) => {
        if (idx !== dayIndex) return day;
        const newMeals = { ...day.meals };
        delete newMeals[slot];
        return {
          ...day,
          meals: newMeals,
        };
      });
    });
  }, []);

  /**
   * Clear all meal slots for the entire week.
   */
  const clearWeek = useCallback(() => {
    setPlan((prevPlan) => {
      return prevPlan.map((day) => ({
        ...day,
        meals: {},
      }));
    });
  }, []);

  /**
   * Navigate weeks.
   */
  const nextWeek = useCallback(() => setWeekOffset((prev) => prev + 1), []);
  const prevWeek = useCallback(() => setWeekOffset((prev) => prev - 1), []);

  /**
   * Computed week title label.
   */
  const weekLabel = useMemo(() => {
    if (weekOffset === 0) return "This Week (Oct 28 - Nov 3)";
    if (weekOffset === 1) return "Next Week (Nov 4 - Nov 10)";
    if (weekOffset === -1) return "Last Week (Oct 21 - Oct 27)";
    return `Week offset: ${weekOffset > 0 ? "+" : ""}${weekOffset}`;
  }, [weekOffset]);

  /**
   * Helper to resolve recipe object by ID for slots.
   */
  const getRecipeById = useCallback((recipeId) => {
    if (!recipeId) return null;
    return RECIPES_DATA.find((r) => String(r.id) === String(recipeId)) || null;
  }, []);

  return {
    plan,
    addMeal,
    removeMeal,
    clearWeek,
    weekOffset,
    nextWeek,
    prevWeek,
    weekLabel,
    getRecipeById,
  };
}

export default useMealPlan;
