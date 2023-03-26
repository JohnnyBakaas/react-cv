import { StyledCard } from "./Card";

const AboutMe = ({ aboutMe }) => {
  const paragraphs = aboutMe.paragraphs.map((e, i) => (
    <p key={i}> {e.text} </p>
  ));

  return (
    <StyledCard>
      <h2>{aboutMe.title}</h2>
      {paragraphs}
    </StyledCard>
  );
};

export default AboutMe;
