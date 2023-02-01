import styles from './error.module.scss';

const Error = () => {
    return(
        <div className={styles.wrapper}>
            <p className={styles.message}>Something went wrong...</p>
        </div>
        
    )
}

export default Error;