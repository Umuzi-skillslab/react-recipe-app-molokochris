import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import RecipeCard from "../components/Recipe/RecipeCard";
import recipeStyles from "../components/Recipe/Recipe.module.css";
import styles from "./Home.module.css";

const trending = [
  {
    id: 1,
    title: "Rich Miso Vegetarian Ramen with Jammy Eggs",
    cookTime: "30 min",
    difficulty: "Medium",
    tags: ["Vegetarian"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArzM6oLeI65wZ9u_0v_pMhyrlK_EzFJdt3FDaU7onq7agcTK3CeKS9vtWS22uiyAeLzvwPHZuRNZgwlHvOvCmesLiVVjmK3wUMj4Vz7DkyzxihPGMbfixiGcQyWY5XmeBy0EaUuUksMMPZOctlsQQLtUt2NsQ5YFVeWCGpYx6FRcpql5YFT0iyZoFzLO9kNj2s68irVKoF2sDbxbBmaZ4QerJ1QMN5-44KrC6crr_hRCWW961qmJlCsQ",
  },
  {
    id: 2,
    title: "Classic Shakshuka with Feta & Herbs",
    cookTime: "25 min",
    difficulty: "Easy",
    tags: ["Gluten Free", "Breakfast"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB644WQ1p9TR6T1bz8PjujSDw2soeWoPmvwzZRDVBsi9ez7vPrcyB1yRIAd5Pb2iBw8EZ7LQueWHXh-fnfP0sH7GgoBGNYNU4Es3HEZIWdqHDnKqs9xQYP-hdPfglcO-pfUo_bVwkN_Dpjo6JNBAKCZPAj8KW7z9a9irgoBINgE3CXxbiVcML8f1BVnWmpXtjKXNJbwtRfUmwUqQCkMIAwUfbG742_sRrfpz5ARTttRiNv-urrSNIqTeg",
  },
  {
    id: 3,
    title: "Pan-Seared Salmon with Lemon-Dill Quinoa",
    cookTime: "40 min",
    difficulty: "Medium",
    tags: ["Pescatarian"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxQhXN7M4CQahM_uiOWSwxLZouIOrJZRPtKu2PN5tLmbfU5VxXodeJYYYdg7BWp0TAmM8qsixaLRwF61UGUxm2WdJj0jvXLc9njSwbcw97PUEC-2pI-pkROIu3WpWrmeqo9Jeycm4MfHNSyaxRTKCtPR4FqU4hPKvGR02EtvBF9n8m-yMI0CxD6vgiPpvHSw1i-qIzvkx_GvOPUvHYPx_IhzJ9fd-iion4grWbVUClX_vHetTKQTDeXw",
  },
];

export default function Home() {
  return (
    <main className="page">
      <div className="wrap">
        <section className={styles.hero}>
          <div>
            <span className={styles.eyebrow}>Smart meal planning</span>
            <h1>
              What's for dinner, <span className={styles.accent}>solved.</span>
            </h1>
            <p>
              Elevating your daily meal planning with simplicity and style.
              Wholesome, dependable, and organized recipes tailored to your taste.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primary} to="/meal-planner">
                Start Planning <ArrowRight size={16} />
              </Link>
              <Link className={styles.secondary} to="/recipes">
                Browse Recipes
              </Link>
            </div>
            <div className={styles.stats}>
              <div>
                <strong>5k+</strong>
                <span>Recipes</span>
              </div>
              <div>
                <strong>12m</strong>
                <span>Meals planned</span>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              alt="Fresh Mediterranean salad"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvt-qJeXzWUntDT6vfx9QTLI-b85wF4iIh6CoZh3BNKO7i49yg_y1za5t6w8hbUNxETQWdWGJqDz_YNXcg_zWmYuGJxv7Y6dtrhKiP0iGPT33z60dTIBQvDxR8x5jEV_Bd2Z_XNUMQhL0bFpmyfZR9DUtBiwe8U7NChYsQ-Mpa-3GIQe1i9jJ_J3llZvlNCq6I_bIEsxawBcSTuXXKTdAEQxajrPYe_jxaAz-nhygso6Xy6_OToG7Yg"
            />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <div>
              <span>Seasonal picks</span>
              <h2>Trending Recipes</h2>
            </div>
            <Link className={styles.viewAll} to="/recipes">
              View all
            </Link>
          </div>
          <div className={recipeStyles.grid}>
            {trending.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.audio}`}>
          <img
            alt="Hands kneading dough"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFEwfMKTv-gdq7gbq8GeBKYPscAa5Z-aXNobzlspi5WIzX-Qjxw2BWCFGlPQ4IYnkZwfEBNh6rsFBZH3a4EnWZwhq0uMJpu5mDrIsCoRL4soCZeOwEoRsqUNdmus6z6QqP5LMElWj8gp45QoTfDEq8L2MKKBWZhI6HjHQmdIZs7BttEoXGfTQ0BBJLG3fc9qjJGFRmNmKKKqWnRLr9M5t0GJNPXQws9mgSy18pwbqZLumq0iOFYJmJ0Q"
          />
          <div>
            <span className={styles.eyebrow}>Daily audio tip</span>
            <h2>The perfect sear, every time.</h2>
            <p>
              Listen to Chef Maria's quick guide on achieving that restaurant-quality
              crust without overcooking the center.
            </p>
            <div className={styles.player}>
              <div className={styles.playerTop}>
                <div>
                  <strong>Mastering the Sear</strong>
                  <p>Episode 42 · Kitchen Secrets</p>
                </div>
                <span>2:45</span>
              </div>
              <div className={styles.bar}>
                <div className={styles.fill} />
              </div>
              <div className={styles.controls}>
                <span>0:55</span>
                <button type="button" className={styles.play} aria-label="Play">
                  <Play size={22} fill="currentColor" />
                </button>
                <span>-1:50</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
