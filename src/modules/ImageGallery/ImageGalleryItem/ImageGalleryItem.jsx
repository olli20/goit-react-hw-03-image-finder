// import PropTypes from 'prop-types';

import styles from './image-gallery-item.module.scss';

const ImageGalleryItem = ({webformatURL, largeImageURL, tags, showImage}) => {
    return (
        <li onClick={() => showImage(largeImageURL)} className={styles.item}>
            <img className={styles.image} src={webformatURL} alt={tags} />
        </li>
    )
}

export default ImageGalleryItem;