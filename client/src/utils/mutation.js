import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
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
        email
        password
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($author:[String!], $description:String!, $title: String!, $bookId: String!, $image: String!, $link: String!) {
    saveBook(author: $author, description: $description, title: $title, bookId: $bookId, String: $String, link: $link) {
      token
      book {
        author
        description
        title
        bookId
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(bookId: ID!) {
    removeBook(bookId: $ID) {
      token
      book {
        bookId
      }
    }
  }
`;