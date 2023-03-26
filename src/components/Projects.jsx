import { StyledCard } from "./Card";

const Projects = ({ projects }) => {
  const links = projects.paragraphs.map((e, i) => (
    <div key={i}>
      <a href={e.link}>{e.linkText}</a>
      {e.text ? <p> {"▲" + e.text} </p> : ""}
    </div>
  ));

  return (
    <StyledCard>
      <h2>{projects.title}</h2>
      {links}
    </StyledCard>
  );
};

export default Projects;
