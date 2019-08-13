import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import { Link } from "react-router-dom";

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading) return <span>loading...</span>;
      if (error) return <span>You got a problem!</span>;
      if (data) {
        return data.movies.map(movie => (
          <Link to={`/details/${movie.id}`}>
            <h2 key={movie.id}>
              {movie.title} / {movie.genres.join(", ")}
            </h2>
          </Link>
        ));
      }
    }}
  </Query>
);

export default Home;
