import RecipeCard from "../components/Recipe/RecipeCard";
import recipeStyles from "../components/Recipe/Recipe.module.css";
import styles from "./RecipesPage.module.css";

const recipes = [
  {
    id: 1,
    title: "Perfect Poached Egg Avocado Toast",
    cookTime: "15m",
    difficulty: "Easy",
    tags: ["Breakfast", "Vegetarian"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuEl_uKc8MS_Ljta2FKb2oJ77WbdHo5R_BmyoIqTPLgP8pSsKqoG2xGlVHLa1d8Hd0SFKADfEAvOvpTvCfJI5k7vsK9XCn-AVOrG4oak3YTne480rnBBhyJdeWsdQXRZVhwiuYSlVWg6ok7Wyu33625FHw0o_b73VyO7IzMjg9IIfg9auqjbJYDsh_u-g-gM3VGlyg9opj24JZ3XdL6S8cbxeO9z_bYBN9-UUnxm6lBdOPTtbU0soZ4g",
  },
  {
    id: 2,
    title: "Nourishing Sweet Potato Quinoa Bowl",
    cookTime: "35m",
    difficulty: "Medium",
    tags: ["Lunch", "Vegan"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_X_qGDnofnZzJ9Tq6e5h2ufkL-W9__nR3PwoAvNfbGBw3SZKS3ddDFxmfNP7ewrFaJMiCf_OCYDnT-CMa3jfi4AE7Fhdlcgu8mXtNj_WIQ55ajPJsZPGte4vgR8hRML1hFktLJimWJtNXXhRmL_UfLbtlyRVtKcf0zc7VyWBQwRjMQQaaegoW6aMd6cLWHzZ1LtXJJjltDyW0kdU0_WmYeVMzEPWc6XNHjY1iwcS1Fr2LR85oJXOyMA",
  },
  {
    id: 3,
    title: "Pan-Seared Salmon with Lemon-Dill Quinoa",
    cookTime: "40 min",
    difficulty: "Medium",
    tags: ["Dinner"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxQhXN7M4CQahM_uiOWSwxLZouIOrJZRPtKu2PN5tLmbfU5VxXodeJYYYdg7BWp0TAmM8qsixaLRwF61UGUxm2WdJj0jvXLc9njSwbcw97PUEC-2pI-pkROIu3WpWrmeqo9Jeycm4MfHNSyaxRTKCtPR4FqU4hPKvGR02EtvBF9n8m-yMI0CxD6vgiPpvHSw1i-qIzvkx_GvOPUvHYPx_IhzJ9fd-iion4grWbVUClX_vHetTKQTDeXw",
  },
];

export default function RecipesPage() {
  return (
    <main className="page">
      <div className="wrap">
        <div className={styles.top}>
          <input
            className={styles.search}
            type="search"
            placeholder="Search for recipes, ingredients, or cuisines..."
          />
        </div>
        <div className={styles.layout}>
          <aside className={styles.filters}>
            <h2>Filters</h2>
            <p>Meal type</p>
            <label>
              <input type="checkbox" defaultChecked readOnly /> Breakfast
            </label>
            <label>
              <input type="checkbox" readOnly /> Lunch
            </label>
            <label>
              <input type="checkbox" readOnly /> Dinner
            </label>
            <p>Difficulty</p>
            <div className={styles.chips}>
              <span className={styles.chipOn}>Easy</span>
              <span className={styles.chip}>Medium</span>
              <span className={styles.chip}>Hard</span>
            </div>
          </aside>
          <div className={recipeStyles.grid}>
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
