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
    aboutContent {
      languages {
        level
        label
      }
      description
    }
    portfolio {
      title
      img
      description
      projectLinks {
        site
        github
      }
      technologies
    }
    experience {
      company
      period
      role
      technologies
      description
    }
    education {
      degree
      period
      faculty
      institution
      location
    }
  }
`;
