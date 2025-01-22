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
      greetings
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
      heading
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
      heading
      content {
        company
        period
        role
        technologies
        description
      }
    }
    education(language: $language) {
      heading
      content {
        degree
        period
        faculty
        institution
        location
      }
    }
  }
`;
