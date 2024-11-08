export const resolvers = {
  Query: {
    heroContent: () => ({
      name: "Ihor Panchenko",
      bio: "I am a Junior Frontend Developer with experience in JavaScript and React...",
      titles: ["Frontend Developer", "Web Developer", "UI Engineer"],
      socialLinks: {
        github: "https://github.com/IhorPanchenko",
        linkedin: "https://www.linkedin.com",
        email: "ipanchenko91@gmail.com",
      },
    }),
  },
};
