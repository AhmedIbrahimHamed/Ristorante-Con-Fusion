import React, {Component} from 'react';
import './App.css';
import Main from './components/MainComponent';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Router basename="/Ristorante-Con-Fusion">
          <div className="App">
            <Main />
          </div>
        </Router>
      </Provider>
    );
  }

}

export default App;
