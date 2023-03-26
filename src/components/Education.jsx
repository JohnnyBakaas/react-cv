import { StyledCard } from "./Card";

const Education = ({ education }) => {
  const timeLine = education.paragraphs.map((e, i) => (
    <div key={i}>
      {e.title ? <h3>{e.title}</h3> : ""}
      {e.text ? <p>{e.text}</p> : ""}
    </div>
  ));

  return (
    <StyledCard>
      <h2>{education.title}</h2>
      {timeLine}
    </StyledCard>
  );
};

export default Education;
