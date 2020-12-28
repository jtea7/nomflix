import { moviesApi } from 'api';
import React from 'react';
import HomePresenter from './HomePresenter';

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousClass": true}] */
export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const npTask = moviesApi.nowPlaying();
      const ucTask = moviesApi.upcoming();
      const ppTask = moviesApi.popular();

      const {
        data: { results: nowPlaying },
      } = await npTask;
      const {
        data: { results: upcoming },
      } = await ucTask;
      const {
        data: { results: popular },
      } = await ppTask;

      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find movies informaiton.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    //console.log(this.state);
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        loading={loading}
        error={error}
      />
    );
  }
}
