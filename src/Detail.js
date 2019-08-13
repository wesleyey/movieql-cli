import React from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAIL } from "./queries";

const Detail = ({
  match: {
    params: { movieId }
  }
}) => (
  <Query query={MOVIE_DETAIL} variables={{ movieId }}>
    {({ loading, data, error }) => {
      if (loading) return <span>loading...</span>;
      if (error) return <span>You got a problem!</span>;
      if (data) {
        return <React.Fragment>{data.movie.description_intro}</React.Fragment>;
      }
    }}
  </Query>
);
export default Detail;
