import {Component} from 'react';

import SearchBar from './modules/SearchBar';
import ImageGallery from './modules/ImageGallery';
import Button from './shared/components/Button';
import Modal from './shared/components/Modal';
import Loader from './shared/components/Loader';

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

  showImage = (largeImageURL) => {
    this.setState({
      details: largeImageURL,
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({
        details: null,
        showModal: false,
    })
}

  render() {
    const {items, loading, details, showModal, search} = this.state;
    const {searchImages, loadMore, showImage, closeModal} = this;
    return(
      <div className={styles.app}>
        {showModal && <Modal onClose={closeModal}><img src={details} alt={search} /></Modal>}
        <SearchBar onSubmit={searchImages} />
        <ImageGallery items={items} showImage={showImage} />
        {loading && <Loader />}
        {Boolean(items.length) && <Button onClick={loadMore}>Load more</Button>}
      </div>
    )
  }
}

export default App;