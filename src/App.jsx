import React from "react";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import { recipes } from "./data/recipes";

const App = () => {
  return (
    <div style={wrapper}>
      <div style={container}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

const wrapper = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#e8dcc0"
};

const container = {
  display: "flex",
  gap: "30px",
  flexWrap: "wrap",
  justifyContent: "center",
  maxWidth: "1200px"
};

export default App;