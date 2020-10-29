import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import Search from './components/Search';
import Footer from './components/Footer';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      data: [],
      search: '',
      searched_data: [],
      search_class: 'closed',
      home_class: 'opened',
      img_http: 'http://image.tmdb.org/t/p/',
      img_size: ['w45', 'w185', 'h632', 'original']
    };
    this.search_button = this.search_button.bind(this)
    this.search_letter = this.search_letter.bind(this);
    this.home_page = this.home_page.bind(this);
    this.last_page = this.last_page.bind(this);
    this.page = this.page.bind(this);
  }

  getData() {
    const api_key = 'dd2bb9663dfda1829956fbf2e12eeed7';
    const url = `https://api.themoviedb.org/3/person/popular?api_key=dd2bb9663dfda1829956fbf2e12eeed7&language=en-US&page=${this.state.page}`;
    fetch(url)
    .then(res => res.json())
    .then(response => {
      this.setState({ data: response.results })
    })
  }

  search_button() {
    if (this.state.search !== '') {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=dd2bb9663dfda1829956fbf2e12eeed7&query=${this.state.search}`)
      .then(res => res.json())
      .then(response => {
        this.setState({ searched_data: response.results, home_class: 'closed', search_class: 'opened' })
      })
    } else {
      return
    }
  }
  search_letter(e) {
    this.setState({ search: e.target.value })
  }
  home_page() {
    this.setState({ home_class: 'opened', search_class: 'closed' })
  }
  page() {
    this.setState({page: this.state.page + 1})
    this.getData();
  }
  last_page() {
    if (this.state.page !== 1) {
      this.setState({page: this.state.page - 1})
      this.getData();
    }
  }

  componentDidMount() {
    this.getData()
  }


  render() {
    return (
      <React.Fragment>

        <Nav
          search_button={ this.search_button }
          search_letter={ this.search_letter }
          search={ this.state.search }
          home_page={ this.home_page }
        />

        <div className='App'>
          <div className={this.state.home_class}>
            <Home state={this.state} />
          </div>

          <div className={this.state.search_class}>
            <Search state={this.state} />
          </div>
        </div>

        <Footer last_page={this.last_page} page={this.page} />
      </React.Fragment>
    )
  }
}
