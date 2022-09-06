import { gql } from "graphql-request";

export const GET_ALL_DATA = gql`
  query {
    projects(stage: PUBLISHED) {
      id
      title
      description
      demo
      github
      image {
        url
      }
    }
  }
`;
