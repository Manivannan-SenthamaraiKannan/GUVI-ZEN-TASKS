//My Resume data in JSON Format
let myResume = {
    basics: {
      name: "Manivannan S",
      email: "manivannan2996@gmail.com",
      phone: 6380766315,
      degree: "B.E.",
      location: {
        address: "Steel Plant First Gate,Maramangalathupatty",
        postalCode: 636030,
        city: "Salem",
        state: "Tamilnadu",
        country: "India",
      },
      profiles: [
        {
          website: "https://www.linkedin.com/in/sharva-manivannan/",
          github: "https://github.com/Manivannan-SenthamaraiKannan",
        },
      ],
    },
    work: [
      {
        company: "Yokogawa India Limited",
        position: "Executive Engineer",
        startDate: "25-06-2022",
        status: "currently working",
        summary: "DCS Engineer(Automation and Control Engineering)",
      },
    ],
    education: [
      {
        institution: "Kumaraguru College of Technology",
        department: "Electronics and Instrumentation Engineering",
        courseType: "fulltime",
        batchStartYear: 2015,
        batchEndYearear: 2019,
        gpa: 7.83,
      },
    ],
    skills: [
      {
        name: ["DCS", "PLC", "EMBEDDED"],
        level: "INTERMEDIATE",
        project: "Pilot Plant System",
      },
    ],
    languages: [
      {
        language: "Tamil,Enlish",
      },
    ],
    interests: [
      {
        name: "BookReading, Vlogging",
      },
    ],
  };
  console.log(myResume);