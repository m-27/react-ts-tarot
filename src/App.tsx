import * as React from 'react';
import './stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Tarot from './components/Tarot';



class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Banner />
        <Tarot />
      </div>
    );
  }
}

export default App;
