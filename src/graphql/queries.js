import { gql } from "@apollo/client";

export const GET_ALL_CONTENT = gql`
  query GetAllContent {
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
