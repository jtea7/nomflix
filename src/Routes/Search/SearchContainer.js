import { moviesApi, tvApi } from 'api';
import React from 'react';
import SearchPresenter from './SearchPresenter';

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousClass": true}] */
export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: '',
    error: null,
    loading: false,
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm && searchTerm !== '') {
      this.searchByTerm(searchTerm);
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });

    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);

      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);

      //console.log(movieResults, tvResults);
      this.setState({ movieResults, tvResults });
    } catch {
      this.setState({ error: "Can't find results" });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    //console.log(this.state);
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
