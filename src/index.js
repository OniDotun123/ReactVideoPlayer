import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAWbYXUmqT0yg3qjpKPapM1kcVrSAaoXwg';

// Create A new Component that should produce some HTML
const App = () =>{

  return (
    <div>
      <SearchBar />
    </div>
  );

}


// Take this component's generated HTML and put it on the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
