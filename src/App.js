import React from 'react';
import logo from './logo.svg';
import Login from './views/login';
import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css';

class App extends React.Component {
    render() {
      return (
        <div><Login/></div>
      );
    }
}

export default App;
