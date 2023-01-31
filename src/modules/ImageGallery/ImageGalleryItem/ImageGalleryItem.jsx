import styles from './image-gallery-item.module.scss';

const ImageGalleryItem = ({webformatURL}) => {
    return (
        <li className={styles.item}>
            <img className={styles.image} src={webformatURL} alt="" />
        </li>
    )
}

export default ImageGalleryItem;