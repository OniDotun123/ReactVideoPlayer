import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAWbYXUmqT0yg3qjpKPapM1kcVrSAaoXwg'

// Create A new Component that should produce some HTML
const App = () =>{
  return <div>Hi</div>

}


// Take this component's generated HTML and put it on the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
