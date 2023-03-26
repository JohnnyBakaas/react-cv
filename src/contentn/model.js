const cv = {
  name: "Johnny Bakaas",
  aboutMe: {
    title: "Om meg",
    paragraphs: [
      {
        text: `Jeg er en dreven ung kar med mye variert erfaring. Jeg har 5 års
              erfaring som teknisk tegner, men ønsker nå å gjøre en karriere
              endring.`,
      },
      {
        text: `
        Jeg har nå drevet med programmering i litt over et halvt år. 
        Jeg har jobbet med C#, Java og Python, men har drivet absolutt 
        mest med HTML, CSS og Java Script.
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
        text: `I min rolle som teknisk tegner hos Bakaas Cadconsult AS produserer
              og oppdaterer jeg plantegninger og fag tegninger. En stor del av
              arbeidsdagen består av tegning, filbehandling, organisering og
              kommunikasjon med kunder.`,
      },
      {
        title: "(2016 - 2020) Teknisk tegner / konstruktør: Systemblokk",
        text: `Hos Systemblokk jobbet jeg tett på prosjektledere, arkitekter,
          ingeniører, produksjons ledere og fabrikk arbeidere. Hverdagen min
          besto hovedsakelig av selvstendig arbeid, kommunisere med
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
            grunnleggende og solid kompetanse innenfor frontend og backend, med
            spesielt fokus på HTML, CSS , Javascript og C#. Jeg har også lært å
            følge design patterns som MVC og prinsipper som DRY.`,
      },
      {
        text: `Med denne bakgrunnen har jeg ett godt utgangspunkt til å bli ett
              nyttig og produktivt medlem av ett hvert team.`,
      },
      {
        title: "(2021 - 2022) Automasjon Vg2",
        text: `Det var her jeg oppdaget min interesse for programmering, 
        noe som ledet til en sommer hvor jeg lærte å programmere med Java 
        og deretter begynte på GET Academy.`,
      },
      {
        title: "(2016 - 2017) Elektro Vg2",
        text: `Etter et halvt år fant jeg ut at jeg ikke var interessert 
        i å være elektriker, og jeg var heldig nok til å få et jobbtilbud 
        fra Systemblokk, hvor jeg allerede hadde sommerjobb.`,
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
