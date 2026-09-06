import RecipeCard from "../components/Recipe/RecipeCard";
import recipeStyles from "../components/Recipe/Recipe.module.css";

const favorites = [
  {
    id: 1,
    title: "Mediterranean Chickpea Salad Bowl",
    cookTime: "15 mins",
    difficulty: "Easy",
    tags: ["Vegetarian"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD57nWP4pWOociz4BFMSNXt7KC2Ww1pyvlJzLrsJS9lfv_Jspi3G4uJLvMTW0hGbK8sVmki27lk2FjdDq0KDKR4JLbaD_cJ0jb8BUpvVkrmeH9Qy3AdNlEL4zRxdqWNGLqhm69rmknxHU4k1xx8JTycQSB3Q8dWLffUoYyRgvqJnypSnGM6uN5DhizLv60NiqnSSJpBBbZOU_GyQmlRVH87NUmJu-d0AC1T1YoLgKFVROpRxI94w93u0w",
  },
  {
    id: 3,
    title: "Pan-Seared Salmon with Lemon Asparagus Quinoa",
    cookTime: "25 mins",
    difficulty: "Medium",
    tags: ["High protein"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqoVikZDqmt1T8W_6HZnGwrU5ZNm3XjG5t_vpLlB4Z-WNYQ_Awc8msjKXGFT2yFCrUEZS215XrpO9M2cRBMvri0B8caCVFvxpN7Bx3E_JF-UiaXM1it4q2GLNDLRlewgl_2KBcaylUuIyuJPwil6gYy_iJFSFUSWYHs-SFmqc-PG1_owx1qRoFwH5tOToj6Aq-B-IctqKAy289hFCI3CGt7Gbwn6BjJ5GQl6WeUJ3De3kYotGRkzOmlg",
  },
];

export default function FavoritesPage() {
  return (
    <main className="page">
      <div className="wrap" style={{ paddingTop: 32, paddingBottom: 48 }}>
        <h1 style={{ fontSize: 40, marginBottom: 8 }}>Your Favorites</h1>
        <p style={{ color: "var(--muted)", marginBottom: 32 }}>
          The recipes you love, all in one place.
        </p>
        <div className={recipeStyles.grid}>
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} favorite />
          ))}
        </div>
      </div>
    </main>
  );
}
