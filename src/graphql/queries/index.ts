import { gql } from "graphql-request";

export const GET_ALL_DATA = gql`
  query {
    projects(stage: PUBLISHED) {
      id
      title
      description
      demo
      github
      technologies
      image {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { width: 700 } }
            validateOptions: true
          }
        )
      }
    }
  }
`;
