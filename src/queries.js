import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      id
      title
      genres
    }
  }
`;

export const MOVIE_DETAIL = gql`
  query movieDetail($movieId: Int!) {
    movie(id: $movieId) {
      description_intro
    }
  }
`;
