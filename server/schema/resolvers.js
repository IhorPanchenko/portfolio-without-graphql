export const resolvers = {
  Query: {
    navContent: () => ({
      linkedin: "https://www.linkedin.com/in/panchenko91/",
      navLinks: [
        { name: "About", to: "about" },
        { name: "Skills", to: "skills" },
        { name: "Portfolio", to: "portfolio" },
        { name: "Experience", to: "experience" },
        { name: "Education", to: "education" },
      ],
    }),
    heroContent: () => ({
      name: "Ihor Panchenko",
      bio: "As a passionate Junior Frontend Developer, I specialize in creating responsive and visually engaging web applications. Leveraging modern tools like React, Redux, and Tailwind CSS, I focus on crafting user-centric experiences with clean, efficient code. I am committed to continuous learning and growth in frontend development, eager to contribute to projects that make a meaningful impact.",
      titles: ["Frontend Developer", "Web Developer", "UI Engineer"],
      socialLinks: {
        github: "https://github.com/IhorPanchenko",
        linkedin: "https://www.linkedin.com/in/panchenko91/",
        email: "ipanchenko91@gmail.com",
      },
    }),
    aboutContent: () => ({
      languages: [
        { level: "C1", label: "English" },
        { level: "B2", label: "German" },
      ],
      description:
        "As a Junior Frontend Developer, I am continuously honing my skills through hands-on projects to deepen my understanding of frontend technologies. My academic background includes a Bachelor's Degree in Information Technology, a Specialist's Degree in Information Management Systems, and an Associate's Degree in Computer Programming. I am proficient in English (C1) and German (B2), with Ukrainian and Russian as my native languages. Currently, I am focused on improving my German language skills and am working toward achieving my C1 certification by May 2025. With a strong commitment to both technical and language proficiency, I strive for well-rounded growth to enhance my contributions in the frontend development field.",
    }),
    portfolio: () => [
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
        img: "src/assets/images/porfolio.jpg",
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
        title: "Weather-Forecast",
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
    experience: () => [
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
    education: () => [
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
};
