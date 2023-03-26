import { StyledAsideCard } from "./AsideCard";

const ContactInfo = ({ contactInfo }) => {
  console.log(contactInfo);
  return (
    <StyledAsideCard>
      <h2>Kontakt informasjon</h2>
      <p>{contactInfo.email}</p>
      <p>{contactInfo.phone}</p>
    </StyledAsideCard>
  );
};

export default ContactInfo;
