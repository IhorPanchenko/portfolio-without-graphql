export const resolvers = {
  Query: {
    heroContent: () => {
      return {
        name: "Ihor Panchenko",
        bio: "I am a Junior Frontend Developer with experience in JavaScript and React. I develop dynamic, responsive user interfaces and have a good eye for design. Teamwork and continuous learning are important to me in creating modern and innovative solutions.",
        titles: ["Frontend Developer", "Web Developer", "UI Engineer"],
        socialLinks: {
          github: "https://github.com/IhorPanchenko",
          linkedin: "https://www.linkedin.com",
          email: "ipanchenko91@gmail.com",
        },
      };
    },
  },
};
