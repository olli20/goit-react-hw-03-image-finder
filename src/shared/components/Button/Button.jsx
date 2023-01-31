import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({text, type, onClick}) => {
    return(
        <button className={styles.button} onClick={onClick} type={type}>{text}</button>
    )
}

export default Button;