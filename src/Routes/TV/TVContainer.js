import { tvApi } from 'api';
import React from 'react';
import TVPresenter from './TVPresenter';

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousClass": true}] */
export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { ressults: topRated },
      } = await tvApi.topRated();
      const {
        data: { ressults: popular },
      } = await tvApi.popular();
      const {
        data: { ressults: airingToday },
      } = await tvApi.airingToday();

      this.setState({ topRated, popular, airingToday });
    } catch {
      this.setState({ error: "Can't find TV's information." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    //console.log(this.state);
    const { topRated, popular, airingToday, error, loading } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}
