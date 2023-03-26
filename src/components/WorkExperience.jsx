import { StyledCard } from "./Card";

const WorkExperience = ({ workExperience }) => {
  const experiance = workExperience.paragraphs.map((e, i) => (
    <div key={i}>
      {e.title ? <h3>{e.title}</h3> : ""}
      {e.text ? <p>{e.text}</p> : ""}
    </div>
  ));

  return (
    <StyledCard>
      <h2>{workExperience.title}</h2>
      {experiance}
    </StyledCard>
  );
};

export default WorkExperience;
