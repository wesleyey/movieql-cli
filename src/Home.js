import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading) return <span>loading...</span>;
      if (error) return <span>You got a problem!</span>;
      if (data) {
        return data.movies.map(movie => (
          <h2 key={movie.id}>
            {movie.title} / {movie.genres}
          </h2>
        ));
      }
    }}
  </Query>
);

export default Home;
