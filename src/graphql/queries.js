import { gql } from "@apollo/client";

export const GET_HERO_CONTENT = gql`
  query GetHeroContent {
    heroContent {
      name
      bio
      titles
      socialLinks {
        github
        linkedin
        email
      }
    }
  }
`;

export const GET_ABOUT_CONTENT = gql`
  query GetAboutContent {
    aboutContent {
      languages {
        level
        label
      }
      description
    }
  }
`;

export const GET_EXPERIENCE = gql`
  query GetExperience {
    experience {
      company
      period
      role
      technologies
      description
    }
  }
`;

export const GET_EDUCATION = gql`
  query GetEducation {
    education {
      degree
      period
      faculty
      institution
      location
    }
  }
`;
