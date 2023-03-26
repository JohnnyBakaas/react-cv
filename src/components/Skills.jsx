import { StyledAsideCard } from "./AsideCard";

const Skills = ({ skills }) => {
  const categorys = mapSkills(skills);

  return (
    <StyledAsideCard>
      <h2>Ferdigheter</h2>
      {categorys}
    </StyledAsideCard>
  );
};

// Kunne jeg bare ha endret modellen min så den ikke er lagt opp
// på denne måten? Ja, hadde det vært mye lettere? Ja, men det hadde
// ikke vært like lærerikt, så da gjør vi det tungvindt

const mapSkills = (skills) =>
  Object.entries(skills).map(([category, value], i) => {
    return (
      <div key={i}>
        <h3> {capitalize(category)} </h3>
        {value.map((s, i) => {
          return <p key={i}>{s}</p>;
        })}
      </div>
    );
  });

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export default Skills;
