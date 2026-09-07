/**
 * Home.jsx
 * Landing page featuring hero banner, stats, dynamic trending recipes list, and live audio tip player.
 */

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RECIPES_DATA } from "../data/recipesData";
import { useFavorites } from "../hooks/useFavorites";
import RecipeList from "../components/Recipe/RecipeList";
import AudioPlayer from "../components/Media/AudioPlayer";
import Button from "../components/UI/Button";
import styles from "./Home.module.css";

export default function Home() {
  const { isFavorite, toggleFavorite } = useFavorites();

  // Top 3 featured or trending recipes
  const trendingRecipes = RECIPES_DATA.slice(0, 3);

  return (
    <main className="page">
      <div className="wrap">
        {/* Hero Section */}
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
              <Link to="/meal-planner">
                <Button variant="primary">
                  Start Planning <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/recipes">
                <Button variant="secondary">
                  Browse Recipes
                </Button>
              </Link>
            </div>
            <div className={styles.stats}>
              <div>
                <strong>8+</strong>
                <span>Curated Recipes</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Fresh & Tested</span>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              alt="Fresh Mediterranean salad"
              src="https://picsum.photos/seed/platr-hero/1200/800"
            />
          </div>
        </section>

        {/* Trending Recipes Section */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <div>
              <span>Seasonal picks</span>
              <h2>Trending Recipes</h2>
            </div>
            <Link className={styles.viewAll} to="/recipes">
              View all recipes →
            </Link>
          </div>
          <RecipeList
            recipes={trendingRecipes}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
          />
        </section>

        {/* Daily Audio Tip Section */}
        <section className={`${styles.section} ${styles.audio}`}>
          <img
            alt="Hands kneading dough"
            src="https://picsum.photos/seed/platr-audio/800/500"
          />
          <div>
            <span className={styles.eyebrow}>Daily audio tip</span>
            <h2>The perfect sear, every time.</h2>
            <p style={{ color: "var(--muted)", margin: "12px 0 20px" }}>
              Listen to Chef Maria's quick guide on achieving that restaurant-quality
              crust without overcooking the center.
            </p>
            <AudioPlayer
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              title="Mastering the Sear"
              subtitle="Episode 42: Kitchen Secrets"
              badge="Chef Maria"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
