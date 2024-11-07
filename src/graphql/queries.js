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
