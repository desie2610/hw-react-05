import React from "react";
import { Wrapper, Level } from "./DifficultyStyle";

const Difficulty = ({ difficulty }) => {
  return (
    <Wrapper>
      <Level active={difficulty === 0}>Easy</Level>
      <Level active={difficulty === 1}>Medium</Level>
      <Level active={difficulty === 3}>Hard</Level>
    </Wrapper>
  );
};

export default Difficulty;