const cv = {
  name: "Johnny Bakaas",
  aboutMe: {
    title: "Om meg",
    paragraphs: [
      {
        text: `Jeg er en dreven ung kar med mye variert erfaring. Jeg har 5 års
              erfaring som teknisk tegner, men ønskier nå å gjøre en kariære
              endring.`,
      },
      {
        text: `
              Jeg har nå drivet med programering i litt over ett halvt år. Jeg har
              jobbet med Java og Python, men har drivet absolut mest med HTML, CSS
              og Java Script.
              `,
      },
    ],
  },
  projects: {
    title: "Prosjekter",
    paragraphs: [
      {
        link: "https://telemarkinterior.no/Expremi/index.html",
        linkText: "Telemark interior",
      },
      {
        link: "https://johnnybakaas.github.io/Snake-med-JS/",
        linkText: "Snake",
      },
      {
        link: "https://johnnybakaas.github.io/three.js-Test/vite-project/dist/",
        linkText: "Bubble-sort visualisering",
        text: "ADVARSEL dette prosjektet har en stor memory leak.",
      },
    ],
  },
  workExperience: {
    title: "Arbeids erfaring",
    paragraphs: [
      {
        title: "(2019 - Nå) Teknisk tegner: Bakaas Cadconsult AS",
        text: `I min rolle som teknisk tegner hos Bakaas Cad Consult produserer
              og oppdaterer jeg plantegninger og fag tegninger. En stor del av
              arbeids dagen betår av tegning, fil behandling, organisjon og
              komunikasjon med kunder.`,
      },
      {
        title: "(2016 - 2020) Teknisk tegner / konstruktør: Systemblokk",
        text: `Hos Systemblokk jobbet jeg tett på prosjetk ledere, arkitekter,
          enginører, produksjons lederen og fabrikk arbeidere. Hverdagen min
          besto hovedsakelig av selvstendig arbeid, komunisere med
          medarbeidere, modellering og produksjon av produksjons tegninger`,
      },
    ],
  },
  education: {
    title: "Utdanning",
    paragraphs: [
      {
        title: "(2022 - 2023) GET Academy",
        text: `Gjennom utdannelse min på GET Academy har jeg utviklet en
            grunnlegende og solid kompetanse innenfor front end og back end, med
            spesielt fokus på HTML, CSS , Javascript og C#. Jeg har også lært å
            følge design patterns som MVC og prinsipper som DRY.`,
      },
      {
        text: `Med denne bakgrunnen har jeg ett godt utgangspunkt til å bli ett
              nyttig og produktivt medlem av ett hvert team.`,
      },
      {
        title: "(2021 - 2022) Automasjon Vg2",
        text: `Dette var hvor jeg fant min interesse for programering. Dette
          førte til en sommer hvor jeg lærte meg hvordan programmere med
          Java og deretter at jeg startet på GET Academt.`,
      },
      {
        title: "(2016 - 2017) Elektro Vg2",
        text: `Etter ett havlt år fant jeg ut at jeg ikke var intresert i å være
          en elektrikker og jeg var heldig nokk til å få ett jobb tilbud fra
          Systemblokk der jeg hadde sommer jobb`,
      },
      {
        title: "(2015 - 2016) Elektro Vg1",
      },
    ],
  },
  contactInfo: {
    email: "Johnny@bakaas-cadconsult.no",
    phone: "907 32 947",
  },
  references: [
    {
      name: "Gunnar Gravdal Aasland",
      email: "gunnar@systemblokk.no",
      phone: "406 92 340",
    },
  ],
  skills: {
    programmering: [
      "HTML, CSS og JS",
      "C#",
      "React.js",
      "THREE.js",
      "Node.js",
      "GitHub",
      "ChatGPT",
      "Java",
      "SQL",
    ],
    tegning: ["AutoCad", "3ds MAX", "ProgeCad"],
    språk: ["Morsmål: Norsk", "Flytende i engelsk"],
    interesser: ["Design", "Trening", "Bil", "Gaming"],
  },
};

export default cv;
