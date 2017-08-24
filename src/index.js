import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAWbYXUmqT0yg3qjpKPapM1kcVrSAaoXwg';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>{
      this.setState({ videos });
    });
  }

  render(){
    return (
      <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


// Take this component's generated HTML and put it on the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
