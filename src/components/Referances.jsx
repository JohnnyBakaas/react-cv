import { StyledAsideCard } from "./AsideCard";

const References = ({ references }) => {
  const contacts = references.map((e) => (
    <div>
      <p>{e.name}</p>
      {e.email ? <p>{e.email}</p> : ""}
      {e.phone ? <p>{e.phone}</p> : ""}
    </div>
  ));

  return (
    <StyledAsideCard>
      <h2> Referanse </h2>
      {contacts}
    </StyledAsideCard>
  );
};

export default References;
