import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TRACKER = gql`
  mutation addTracker($keys: [ID]!) {
    addTracker(keys: $keys) {
      createdAt
      keys {
        _id
        rating
        theme {
          name
        }
      }
    }
  }
`;
