import { moviesApi, tvApi } from 'api';
import React from 'react';
import DetailPresenter from './DetailPresenter';

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousClass": true}] */
export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie/'),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push('/');
    }

    let result = null;
    try {
      if (isMovie) {
        //전체에 ()를 둬서 const가 아닌 let result에 값을 넣을 수 있다.
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find Detail information." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    //Route에 정의된 컴포넌트는 props에서 Loaction 정보를 자동으로 받아온다.
    //Header의 경우 Router에 정의되지 않았기 withRouter를 함께 사용해야한다.
    console.log(this.props);
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}
