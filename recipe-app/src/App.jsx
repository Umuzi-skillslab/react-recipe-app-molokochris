import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/common/Footer";
import RecipeDetail from "./components/Recipe/RecipeDetail";
import Home from "./pages/Home";
import RecipesPage from "./pages/RecipesPage";
import MealPlannerPage from "./pages/MealPlannerPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFound from "./pages/NotFound";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/meal-planner" element={<MealPlannerPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
