import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [sideMenu, setSideMenu] = useState(false);

  console.log(sideMenu);
  return (
    <>
      <Navbar setIsOpen={setSideMenu} />
      <Routes>
        <Route index path="/" element={<Home />} />
        {/* <Route path="/recipes" element={<RecipesPage />} />

        <Route path="/recipes/:id" element={<RecipeDetail />} />

        <Route path="/meal-planner" element={<MealPlannerPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />

        <Route path="*" element={<NotFound />} />*/}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
