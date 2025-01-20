import { gql } from "@apollo/client";

export const GET_ALL_CONTENT = gql`
  query GetAllContent($language: String!) {
    navContent(language: $language) {
      linkedin
      navLinks {
        name
        to
      }
    }
    heroContent(language: $language) {
      name
      bio
      titles
      socialLinks {
        github
        linkedin
        email
      }
    }
    aboutContent(language: $language) {
      languages {
        level
        label
      }
      description
    }
    portfolio(language: $language) {
      title
      img
      description
      projectLinks {
        site
        github
      }
      technologies
    }
    experience(language: $language) {
      company
      period
      role
      technologies
      description
    }
    education(language: $language) {
      degree
      period
      faculty
      institution
      location
    }
  }
`;
