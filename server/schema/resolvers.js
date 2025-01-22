export const resolvers = {
  Query: {
    navContent: (_, { language }) => {
      const data = {
        en: {
          linkedin: "https://www.linkedin.com/in/panchenko91/",
          navLinks: [
            { name: "About", to: "about" },
            { name: "Skills", to: "skills" },
            { name: "Portfolio", to: "portfolio" },
            { name: "Experience", to: "experience" },
            { name: "Education", to: "education" },
          ],
        },
        de: {
          linkedin: "https://www.linkedin.com/in/panchenko91/",
          navLinks: [
            { name: "Über mich", to: "about" },
            { name: "Fähigkeiten", to: "skills" },
            { name: "Portfolio", to: "portfolio" },
            { name: "Erfahrung", to: "experience" },
            { name: "Ausbildung", to: "education" },
          ],
        },
      };
      return data[language];
    },
    heroContent: (_, { language }) => {
      const data = {
        en: {
          greetings: "Hey, I am",
          name: "Ihor Panchenko",
          bio: "As a passionate Junior Frontend Developer, I specialize in creating responsive and visually engaging web applications. Leveraging modern tools like React, Redux, and Tailwind CSS, I focus on crafting user-centric experiences with clean, efficient code. I am committed to continuous learning and growth in frontend development, eager to contribute to projects that make a meaningful impact.",
          titles: ["Frontend Developer", "Web Developer", "UI Engineer"],
          socialLinks: {
            github: "https://github.com/IhorPanchenko",
            linkedin: "https://www.linkedin.com/in/panchenko91/",
            email: "ipanchenko91@gmail.com",
          },
        },
        de: {
          greetings: "Hey, ich bin",
          name: "Ihor Panchenko",
          bio: "Als leidenschaftlicher Junior Frontend-Entwickler spezialisiere ich mich auf die Erstellung reaktionsschneller und visuell ansprechender Webanwendungen. Mit modernen Tools wie React, Redux und Tailwind CSS konzentriere ich mich darauf, benutzerzentrierte Erlebnisse mit sauberem, effizientem Code zu gestalten. Ich bin bestrebt, kontinuierlich zu lernen und mich im Bereich Frontend-Entwicklung weiterzuentwickeln und freue mich darauf, zu Projekten beizutragen, die einen bedeutenden Einfluss haben.",
          titles: ["Frontend-Entwickler", "Webentwickler", "UI-Ingenieur"],
          socialLinks: {
            github: "https://github.com/IhorPanchenko",
            linkedin: "https://www.linkedin.com/in/panchenko91/",
            email: "ipanchenko91@gmail.com",
          },
        },
      };
      return data[language];
    },
    aboutContent: (_, { language }) => {
      const data = {
        en: {
          heading: "About Me",
          languages: [
            { level: "C1", label: "English" },
            { level: "B2", label: "German" },
          ],
          description:
            "As a Junior Frontend Developer, I am continuously honing my skills through hands-on projects to deepen my understanding of frontend technologies. My academic background includes a Bachelor's Degree in Information Technology, a Specialist's Degree in Information Management Systems, and an Associate's Degree in Computer Programming. I am proficient in English (C1) and German (B2), with Ukrainian and Russian as my native languages. Currently, I am focused on improving my German language skills and am working toward achieving my C1 certification by May 2025. With a strong commitment to both technical and language proficiency, I strive for well-rounded growth to enhance my contributions in the frontend development field.",
        },
        de: {
          heading: "Über Mich",
          languages: [
            { level: "C1", label: "Englisch" },
            { level: "B2", label: "Deutsch" },
          ],
          description:
            "Als Junior Frontend-Entwickler arbeite ich kontinuierlich daran, meine Fähigkeiten durch praktische Projekte zu verbessern, um mein Verständnis für Frontend-Technologien zu vertiefen. Mein akademischer Hintergrund umfasst einen Bachelor-Abschluss in Informationstechnologie, einen Spezialistenabschluss in Informationsmanagementsystemen und einen Associate-Abschluss in Computerprogrammierung. Ich beherrsche Englisch (C1) und Deutsch (B2) und spreche Ukrainisch und Russisch als Muttersprache. Derzeit konzentriere ich mich darauf, meine Deutschkenntnisse zu verbessern, und arbeite darauf hin, bis Mai 2025 mein C1-Zertifikat zu erlangen. Mit einem starken Engagement für sowohl technische als auch sprachliche Fähigkeiten strebe ich nach einer ganzheitlichen Weiterentwicklung, um meine Beiträge im Bereich der Frontend-Entwicklung zu verbessern.",
        },
      };
      return data[language];
    },
    portfolio: (_, { language }) => {
      const data = {
        en: [
          {
            title: "Taskboard",
            img: "src/assets/images/task-board.jpg",
            description:
              "A task management app built with React, Vite, and Tailwind CSS.",
            projectLinks: {
              site: "https://ihorpanchenko.github.io/task-board/",
              github: "https://github.com/IhorPanchenko/task-board",
            },
            technologies: [
              "React.js",
              "Redux",
              "Tailwind CSS",
              "React Beautiful DnD",
            ],
          },
          {
            title: "Form Validation",
            img: "src/assets/images/form-validation.jpg",
            description:
              "A React-based project demonstrating client-side form validation using regular expressions.",
            projectLinks: {
              site: "https://ihorpanchenko.github.io/form-validation/",
              github: "https://github.com/IhorPanchenko/form-validation",
            },
            technologies: ["React.js", "TypeScript", "CSS/SCSS", "Regex"],
          },
          {
            title: "Portfolio Website",
            img: "src/assets/images/portfolio.jpg",
            description:
              "A personal portfolio website showcasing projects, education, and experience.",
            projectLinks: {
              site: "#",
              github: "https://github.com/IhorPanchenko/portfolio",
            },
            technologies: ["React.js", "Vite", "GraphQL", "Tailwind CSS"],
          },
          {
            title: "Movie Watchlist",
            img: "src/assets/images/watchlist.jpg",
            description:
              "Search and save movies to a personal watchlist with an intuitive and responsive interface.",
            projectLinks: {
              site: "https://ihorpanchenko.github.io/movie-watchlist/",
              github: "https://github.com/IhorPanchenko/movie-watchlist",
            },
            technologies: ["React.js", "Redux", "API", "Tailwind CSS"],
          },
          {
            title: "Weather Forecast",
            img: "src/assets/images/forecast.jpg",
            description:
              "Utilizes an API key to fetch and display current weather details.",
            projectLinks: {
              site: "https://ihorpanchenko.github.io/weather-forecast/",
              github: "https://github.com/IhorPanchenko/weather-forecast",
            },
            technologies: ["React.js", "Redux", "API", "HTML/CSS"],
          },
        ],
        de: [
          {
            title: "Taskboard",
            img: "src/assets/images/task-board.jpg",
            description:
              "Eine Aufgabenmanagement-App, entwickelt mit React, Vite und Tailwind CSS.",
            projectLinks: {
              site: "https://ihorpanchenko.github.io/task-board/",
              github: "https://github.com/IhorPanchenko/task-board",
            },
            technologies: [
              "React.js",
              "Redux",
              "Tailwind CSS",
              "React Beautiful DnD",
            ],
          },
          {
            title: "Formularvalidierung",
            img: "src/assets/images/form-validation.jpg",
            description:
              "Ein React-Projekt zur Demonstration der clientseitigen Formularvalidierung mit regulären Ausdrücken.",
            projectLinks: {
              site: "https://ihorpanchenko.github.io/form-validation/",
              github: "https://github.com/IhorPanchenko/form-validation",
            },
            technologies: ["React.js", "TypeScript", "CSS/SCSS", "Regex"],
          },
          {
            title: "Portfolio-Website",
            img: "src/assets/images/portfolio.jpg",
            description:
              "Eine persönliche Portfolio-Website mit Projekten, Bildung und Erfahrung.",
            projectLinks: {
              site: "#",
              github: "https://github.com/IhorPanchenko/portfolio",
            },
            technologies: ["React.js", "Vite", "GraphQL", "Tailwind CSS"],
          },
          {
            title: "Film-Watchlist",
            img: "src/assets/images/watchlist.jpg",
            description:
              "Durchsuchen und speichern Sie Filme in einer persönlichen Watchlist mit einer intuitiven und responsiven Benutzeroberfläche.",
            projectLinks: {
              site: "https://ihorpanchenko.github.io/movie-watchlist/",
              github: "https://github.com/IhorPanchenko/movie-watchlist",
            },
            technologies: ["React.js", "Redux", "API", "Tailwind CSS"],
          },
          {
            title: "Wettervorhersage",
            img: "src/assets/images/forecast.jpg",
            description:
              "Verwendet einen API-Schlüssel, um aktuelle Wetterdetails abzurufen und anzuzeigen.",
            projectLinks: {
              site: "https://ihorpanchenko.github.io/weather-forecast/",
              github: "https://github.com/IhorPanchenko/weather-forecast",
            },
            technologies: ["React.js", "Redux", "API", "HTML/CSS"],
          },
        ],
      };
      return data[language];
    },
    experience: (_, { language }) => {
      const data = {
        en: {
          heading: "Experience",
          content: [
            {
              company: "APEX Global Solutions LLC",
              period: "02/2020 - 02/2023",
              role: "Senior Accounts Payable Representative",
              technologies: [
                "Microsoft Dynamics",
                "Problem Solving",
                "Accounts Reconciliation",
                "Team/Vendor Communication",
              ],
              description:
                "Training and supporting new team members in onboarding processes and tools. Planning and executing supplier payments, handling inquiries regarding outstanding amounts. Managing supplier accounts and reconciling costs and balances.",
            },
            {
              company: "APEX Global Solutions LLC",
              period: "07/2019 - 02/2020",
              role: "Accounts Payable Representative",
              technologies: [
                "Microsoft Dynamics",
                "Invoice Processing",
                "Financial Reporting",
                "Attention to Detail",
              ],
              description:
                "Monitoring all payments and expenses, including invoices and bank statements. Creating account analyses and monthly reports. Preparing and compiling invoices for payment.",
            },
            {
              company: "NTC | Nationwide Title Clearing",
              period: "06/2018- 03/2019",
              role: "Junior Frontend Developer",
              technologies: ["JavaScript", "React.js", "Tailwind", "HTML/CSS"],
              description:
                "Developing responsive web applications using React.js and JavaScript. Styling components with Sass and creating custom themes using Tailwind CSS to enhance user experience.",
            },
          ],
        },
        de: {
          heading: "Erfahrung",
          content: [
            {
              company: "APEX Global Solutions LLC",
              period: "02/2020 - 02/2023",
              role: "Senior Accounts Payable Representative",
              technologies: [
                "Microsoft Dynamics",
                "Problemlösung",
                "Kontenabstimmung",
                "Team-/Lieferantenkommunikation",
              ],
              description:
                "Schulung und Unterstützung neuer Teammitglieder in den Onboarding-Prozessen und Tools. Planung und Durchführung von Lieferantenzahlungen, Bearbeitung von Anfragen zu offenen Beträgen. Verwaltung von Lieferantenkonten und Abstimmung von Kosten und Salden.",
            },
            {
              company: "APEX Global Solutions LLC",
              period: "07/2019 - 02/2020",
              role: "Accounts Payable Representative",
              technologies: [
                "Microsoft Dynamics",
                "Rechnungsbearbeitung",
                "Finanzberichterstattung",
                "Detailgenauigkeit",
              ],
              description:
                "Überwachung aller Zahlungen und Ausgaben, einschließlich Rechnungen und Bankauszügen. Erstellung von Kontoanalysen und monatlichen Berichten. Vorbereitung und Zusammenstellung von Rechnungen zur Zahlung.",
            },
            {
              company: "NTC | Nationwide Title Clearing",
              period: "06/2018- 03/2019",
              role: "Junior Frontend Developer",
              technologies: ["JavaScript", "React.js", "Tailwind", "HTML/CSS"],
              description:
                "Entwicklung von responsiven Webanwendungen mit React.js und JavaScript. Styling von Komponenten mit Sass und Erstellung benutzerdefinierter Designs mit Tailwind CSS zur Verbesserung der Benutzererfahrung.",
            },
          ],
        },
      };
      return data[language];
    },
    education: (_, { language }) => {
      const data = {
        en: {
          heading: "Education",
          content: [
            {
              degree: "A1 — C1 Level",
              period: "2023 - Present",
              faculty: "German",
              institution: "Ruhrwerkstatt",
              location: "Oberhausen, Germany",
            },
            {
              degree: "Associate in Science Degree",
              period: "2016 - 2018",
              faculty: "Computer Programming",
              institution: "Hillsborough Community College",
              location: "Tampa, FL, US",
            },
            {
              degree: "Specialist's Degree",
              period: "2012 - 2013",
              faculty: "Information Management Systems and Technologies",
              institution: "Odesa National Academy",
              location: "Odesa, Ukraine",
            },
            {
              degree: "Bachelor's Degree",
              period: "2008 - 2012",
              faculty: "Information Technology",
              institution: "Odesa National Academy",
              location: "Odesa, Ukraine",
            },
          ],
        },
        de: {
          heading: "Ausbildung",
          content: [
            {
              degree: "A1 — C1 Niveau",
              period: "2023 - Gegenwart",
              faculty: "Deutsch",
              institution: "Ruhrwerkstatt",
              location: "Oberhausen, Deutschland",
            },
            {
              degree: "Associate Degree in Science",
              period: "2016 - 2018",
              faculty: "Computerprogrammierung",
              institution: "Hillsborough Community College",
              location: "Tampa, FL, USA",
            },
            {
              degree: "Spezialistenabschluss",
              period: "2012 - 2013",
              faculty: "Informationsmanagementsysteme und -technologien",
              institution: "Odesa National Academy",
              location: "Odesa, Ukraine",
            },
            {
              degree: "Bachelor-Abschluss",
              period: "2008 - 2012",
              faculty: "Informationstechnologie",
              institution: "Odesa National Academy",
              location: "Odesa, Ukraine",
            },
          ],
        },
      };
      return data[language];
    },
  },
};
