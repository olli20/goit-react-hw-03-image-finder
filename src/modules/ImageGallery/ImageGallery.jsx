// import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

import styles from './image-gallery.module.scss';

const ImageGallery = ({items, showImage}) => {
    const elements = items.map(({id, webformatURL, largeImageURL}) => 
        <ImageGalleryItem key={id} showImage={showImage} webformatURL={webformatURL} largeImageURL={largeImageURL} />)
    console.log(elements);
    return(
        <ul className={styles.gallery}>
            {elements}
        </ul>
    )
}

export default ImageGallery;