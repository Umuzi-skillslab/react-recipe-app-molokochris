import { ArrowLeft, Clock, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Recipe.module.css";

export default function RecipeDetail() {
  return (
    <main className="page">
      <div
        className={styles.detailHero}
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-YZiS_6DoA7GUbxkJCQuhxvFzAn3Sa7iZT2oVkOXZHosDncRQ7ffOKcJZmr2RYH7j5QtUIfxzxV70cNihygVq7nxfFe8bKndtPpOqsoR8crMLw2py9hPE5pd8LfWUdk2lFrtjicb0E9x3TLv3ORCYzFmO9oMfm4BnICCyI53GWTbmFojDkN-IaLhPTX_7ClEKm_N-5ObuJa_vZYBWWwF-ggTKaDddKi3z-W4mlr7EYjF3O6JVBdyMcw')",
        }}
      >
        <div className={styles.detailBar}>
          <Link to="/recipes" className={styles.back}>
            <ArrowLeft size={16} /> Back to Recipes
          </Link>
          <button type="button" className={styles.heart} aria-label="Favorite">
            <Heart size={16} />
          </button>
        </div>
      </div>

      <section className={styles.panel}>
        <div className={styles.tags}>
          <span className={styles.tag}>Dinner</span>
          <span className={styles.tag}>Quick & Easy</span>
        </div>
        <h1 className={styles.title} style={{ fontSize: 36 }}>
          Roasted Lemon-Herb Salmon with Asparagus
        </h1>
        <div className={styles.meta} style={{ marginTop: 16 }}>
          <span>
            <Clock size={16} /> 35 mins
          </span>
          <span>
            <Users size={16} /> Serves 4
          </span>
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.primaryBtn}>
            Add to Meal Planner
          </button>
          <button type="button" className={styles.ghostBtn}>
            Share
          </button>
        </div>
      </section>

      <section className={styles.columns}>
        <aside className={styles.ingredients}>
          <h2>Ingredients</h2>
          <ul>
            <li>4 salmon fillets</li>
            <li>1 bunch asparagus</li>
            <li>2 tbsp olive oil</li>
            <li>1 lemon</li>
            <li>2 cloves garlic</li>
            <li>Salt and pepper</li>
          </ul>
        </aside>
        <div>
          <h2>Instructions</h2>
          <div className={styles.step}>
            <strong>1. Preheat & prep</strong>
            <p>Heat oven to 400°F. Line a baking sheet with parchment.</p>
          </div>
          <div className={styles.step}>
            <strong>2. Season asparagus</strong>
            <p>Toss asparagus with oil, garlic, salt, and pepper.</p>
          </div>
          <div className={styles.step}>
            <strong>3. Prepare salmon</strong>
            <p>Season fillets and place on the other side of the sheet.</p>
          </div>
          <div className={styles.step}>
            <strong>4. Roast & serve</strong>
            <p>Bake 12–15 minutes until the salmon flakes easily.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
