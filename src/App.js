// import libaries
import React, {Component} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import List from './List.jsx';

// create component
    const App = () => {
  
      return (
        <div>
        <h1>Hello React</h1>
        <p> My Name is Sapta</p>
        <Header  />
        <List  />
        <Footer  />
        </div>
      );
    }
// export component
export default App;
