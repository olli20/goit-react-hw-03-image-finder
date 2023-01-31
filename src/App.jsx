import {Component} from 'react';

import SearchBar from './modules/SearchBar';
import ImageGallery from './modules/ImageGallery';
import Button from './shared/components/Button';

import {searchImages} from './shared/services/gallery-api';

import styles from './app.module.scss';

class App extends Component {
  state = {
    search: "",
    items: [],
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    details: null,
  }

  componentDidUpdate(prevProps, prevState) {
    const {search, page} = this.state;
    if(prevState.search !== search || prevState.page !== page) {
        this.fetchImages();
    }
  }

  async fetchImages() {
    try {
        this.setState({loading: true})
        const {search, page} = this.state;
        const data = await searchImages(search, page);
        console.log(data);
        this.setState(({items}) => ({
            items: [...items, ...data]
        }))
      }
    catch(error) {
        this.setState({error: error.message})
    }
    finally {
      this.setState({loading: false})
    }
  }

  searchImages = ({search}) => {
    this.setState({search, items: [], page: 1});
  }

  loadMore = () => {
    this.setState(({page}) => ({page: page + 1}))
  }

  render() {
    const {items, loading} = this.state;
    const {searchImages, loadMore} = this;
    return(
      <div className={styles.app}>
        <SearchBar onSubmit={searchImages} />
        <ImageGallery items={items} />
        {loading && <p>Loading</p>}
        {Boolean(items.length) && <Button onClick={loadMore} type={"button"} text={"Load more"}></Button>}
      </div>
    )
  }
}

export default App;