import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type NavLink {
    name: String
    to: String
  }

  type NavContent {
    linkedin: String
    navLinks: [NavLink]
  }

  type SocialLinks {
    github: String
    linkedin: String
    email: String
  }

  type HeroContent {
    name: String
    bio: String
    titles: [String]
    socialLinks: SocialLinks
  }

  type AboutContent {
    languages: [Language]
    description: String
  }

  type Language {
    level: String
    label: String
  }

  type Portfolio {
    title: String
    img: String
    description: String
    projectLinks: ProjectLinks
    technologies: [String]
  }

  type ProjectLinks {
    site: String
    github: String
  }

  type Experience {
    company: String
    period: String
    role: String
    technologies: [String]
    description: String
  }

  type Education {
    degree: String
    period: String
    faculty: String
    institution: String
    location: String
  }

  type Query {
    navContent: NavContent
    heroContent: HeroContent
    aboutContent: AboutContent
    portfolio: [Portfolio]
    experience: [Experience]
    education: [Education]
  }
`;
