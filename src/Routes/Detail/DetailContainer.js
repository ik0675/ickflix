import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieAPI, tvAPI } from "../../api";

export default class DetailContainer extends Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;

    /* Need to chekc whether id is valid (not string) should be a number*/
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push("/");
    }

    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieAPI.detail(parseId));
      } else {
        ({ data: result } = await tvAPI.detail(parseId));
      }
      console.log(result);
    } catch {
      this.setState({ error: "Can't find Detail information " });
    } finally {
      this.setState({
        loading: false,
        result
      });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
