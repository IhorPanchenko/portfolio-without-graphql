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
    greetings: String
    name: String
    bio: String
    titles: [String]
    socialLinks: SocialLinks
  }

  type Language {
    level: String
    label: String
  }

  type AboutContent {
    heading: String
    languages: [Language]
    description: String
  }

  type ProjectLinks {
    site: String
    github: String
  }

  type Portfolio {
    title: String
    img: String
    description: String
    projectLinks: ProjectLinks
    technologies: [String]
  }

  type ExperienceContent {
    company: String
    period: String
    role: String
    technologies: [String]
    description: String
  }

  type Experience {
    heading: String
    content: [ExperienceContent]
  }

  type EducationContent {
    degree: String
    period: String
    faculty: String
    institution: String
    location: String
  }

  type Education {
    heading: String
    content: [EducationContent]
  }

  type Query {
    navContent(language: String!): NavContent
    heroContent(language: String!): HeroContent
    aboutContent(language: String!): AboutContent
    portfolio(language: String!): [Portfolio]
    experience(language: String!): Experience
    education(language: String!): Education
  }
`;
