import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '../../components/Header/Header';
import './AppLayout.css';

class App extends Component {
  render() {
    const { route } = this.props;
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-6">{renderRoutes(route.routes)}</div>
            <div className="col"></div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;


