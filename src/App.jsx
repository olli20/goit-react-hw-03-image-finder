
import {Component} from 'react';

import SearchBar from './modules/SearchBar';

import styles from './app.module.scss';

class App extends Component {
  state = {
    search: "",
    items: [],
    loaging: false,
  }

  render() {
    return(
      <>
        <SearchBar />
      </>
    )
  }
}

export default App;