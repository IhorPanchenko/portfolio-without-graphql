import { gql } from "apollo-server-express";

export const typeDefs = gql`
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

  type Query {
    heroContent: HeroContent
  }
`;
