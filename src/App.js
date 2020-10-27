import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      total_data: 0,
      total_pages: 0,
      loading: ''
    };
  }

  getData() {
    const api_key = 'dd2bb9663dfda1829956fbf2e12eeed7';
    const url = `https://api.themoviedb.org/3/person/popular?api_key=${api_key}&language=en-US&page=1`;
    fetch(url)
    .then(res => res.json())
    .then(response => {
      this.setState({ data: response.results })
    })
  }


  componentDidMount() {
    this.getData()
  }


  render() {
    return (
      <React.Fragment>
        <Nav />
        <Home data={this.state} />
      </React.Fragment>
    )
  }
}



//   return (
//   <React.Fragment>
//     <Navbar />
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/ourservice" component={OurService} />
//       <Route exact path="/contact" component={Contact} />
//       <Route component={Error} />
//     </Switch>
//   </React.Fragment>
// );
