import React from "react";
import { Card, Image, Title, Info, InfoItem } from "./RecipeCardStyle";
import Difficulty from "../Difficulty/Difficulty";

const RecipeCard = ({ recipe }) => {
  return (
    <Card difficulty={recipe.difficulty}>
      <Image src={recipe.image} alt={recipe.title} />

      <Title>{recipe.title}</Title>

      <Info>
        <InfoItem>⏱ {recipe.time} min</InfoItem>
        <InfoItem>🍽 {recipe.servings} servings</InfoItem>
        <InfoItem>🔥 {recipe.calories} calories</InfoItem>
      </Info>

      <Difficulty difficulty={recipe.difficulty} />
    </Card>
  );
};

export default RecipeCard;