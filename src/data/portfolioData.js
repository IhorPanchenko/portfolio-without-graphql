import taskBoardImg from "../assets/images/task-board.jpg";
import formValidationImg from "../assets/images/form-validation.jpg";
import portfolioImg from "../assets/images/portfolio.jpg";
import watchlistImg from "../assets/images/watchlist.jpg";
import forecastImg from "../assets/images/forecast.jpg";

const portfolioData = {
  en: [
    {
      title: "Taskboard",
      img: taskBoardImg,
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
      img: formValidationImg,
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
      img: portfolioImg,
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
      img: watchlistImg,
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
      img: forecastImg,
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
      img: taskBoardImg,
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
      img: formValidationImg,
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
      img: portfolioImg,
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
      img: watchlistImg,
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
      img: forecastImg,
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

export default portfolioData;
