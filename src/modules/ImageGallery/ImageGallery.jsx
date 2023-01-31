// import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

import styles from './image-gallery.module.scss';

const ImageGallery = ({items}) => {
    const elements = items.map(({id, webformatURL}) => <ImageGalleryItem key={id} webformatURL={webformatURL} />)
    console.log(elements);
    return(
        <ul className={styles.gallery}>
            {elements}
        </ul>
    )
}

export default ImageGallery;