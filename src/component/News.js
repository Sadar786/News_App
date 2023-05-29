import React, { Component } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// import './A'
class News extends Component {
  static defualtProps = {
    country: 'in',
    pageSize: 5,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults: 0
    };
    // document.title=`${this.capitalize(this.props.category)}` - "-News"
    document.title = this.props.cat + "-News"
  }


  async componentDidMount() {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c3edb1f8528441e9853fdc8d5acc39af&page=1&pageSize=${this.props.pageSize}`;

    try {
      const response = await axios.get(url);
      this.setState({
        articles: response.data.articles,
        totalResults: response.data.totalResults,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
    this.props.setProgress(100)

  }

  handlePageChange = async (direction) => {
    console.log(direction);
    let newPage = this.state.page;

    if (direction === "prev" && newPage > 1) {
      newPage--;
    } else if (direction === "next") {
      if (this.state.page + 1 > Math.ceil(this.totalResults / 9)) {
        return;
      } else {
        newPage++;
        this.setState({ loading: true });
      }
    }

    let url = `https://newsapi.org/v2/top-headlines?country=&category=${this.props.category}&apiKey=c3edb1f8528441e9853fdc8d5acc39af&page=${newPage}&pageSize=${this.props.pageSize}`;

    try {
      const response = await axios.get(url);
      this.setState({
        page: newPage,
        articles: response.data.articles,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=c3edb1f8528441e9853fdc8d5acc39af&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    try {
      const response = await axios.get(url);
      this.setState({
        articles: this.state.articles.concat(response.data.articles),
        totalResults: response.data.totalResults,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }



render() {
  const { articles } = this.state;
  return (
    < >
      <h1 className="text-center " style={{ paddingTop: 25 }}><u>Daily News Top-headlines</u></h1>
      <h2 className="text-center " style={{ padding: 10 }}><b>{this.props.cat} News</b></h2>

      {/* { this.state.loading ? 
       <Spinner/> : null} */}
      <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length !== this.state.totalResults}
        
        loader={<Spinner />} 
        >
        
         <div className="container">
        <div className="row">
          {articles.length ? articles.map((article, index) => (
            <div className="col-md-4">
              <NewsItem
                key={index}
                imageUrl={article.urlToImage ? article.urlToImage : "/imag.jpep"}
                title={article.title}
                description={article.description}
                newsUrl={article.url}
                author={article.author}
                date={article.publishedAt}
                source={article.source.name}
              />
            </div>
          ))
            : (
              <Spinner/>
            )}
        
        </div>
        </div>
        
      </InfiniteScroll>
    </>
  );
}
}

export default News;
