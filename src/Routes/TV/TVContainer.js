import React, { Component } from "react";
import TVPresenter from "./TVPresenter";
import { tvAPI } from "api";

export default class TVContainer extends Component {
  state = {
    topRated: null,
    popular: null,
    airing: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated }
      } = await tvAPI.topRated();
      const {
        data: { results: popular }
      } = await tvAPI.popular();
      const {
        data: { results: airing }
      } = await tvAPI.airing();
      this.setState({
        topRated,
        popular,
        airing
      });
    } catch {
      console.log("Can't find TV information");
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { topRated, popular, airing, error, loading } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airing={airing}
        error={error}
        loading={loading}
      />
    );
  }
}
