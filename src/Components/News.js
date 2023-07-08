import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";
import Loading from "./Loading";
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    pageSize:6,
    country:"in",
    category:"general"
  }
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  capitalizeFunc = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0,
    };
  }

  async fetchNews() {
    document.title = `${this.capitalizeFunc(this.props.category)} - NewsMonkey`
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e9370e871e35409b9ac367be63b85f44&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.fetchNews();
  }

  handlePrev = async () => {
    this.setState({page:this.state.page - 1});
    this.fetchNews();
  };
  handlePage = async (index) => {
    this.setState({page: index});
    this.fetchNews();
  };
  handleNext = async () => {
    this.setState({page: this.state.page + 1});
    this.fetchNews();
  };

  render() {
    return (
      <div className="container p-3 m-4">
        <h2 className="text-center mb-3 text-light">Top {this.capitalizeFunc(this.props.category)} Headlines</h2>
        <div className="container text-center">
          {this.state.loading && <Loading />}
        </div>
        <div className="d-flex justify-content-center">
        <div
          className={`container d-grid overflow-hidden`}
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(17rem, 1fr))",
            gridRowGap: "3rem",
            gridColumnGap: "6rem",
          }}
        >
          {!this.state.loading &&
            this.state.articles.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <NewsItem
                    title={ele.source.name}
                    description={ele.title.slice(0, 88) + "..."}
                    imgUrl={
                      ele.urlToImage === null
                        ? "https://img.freepik.com/free-vector/question-mark-sign-brush-stroke-trash-style-typography-vector_53876-140880.jpg"
                        : ele.urlToImage
                    }
                    url={ele.url}
                  />
                </div>
              );
            })}
        </div>
        </div>
        <div className="container d-flex align-item-center justify-content-between mt-5">
          <Pagination
            handlePrev={this.handlePrev}
            handleNext={this.handleNext}
            page={this.state.page}
            tR={this.state.totalResults}
            handlePage={this.handlePage}
            pageSize={this.props.pageSize}
          />
        </div>
      </div>
    );
  }
}
