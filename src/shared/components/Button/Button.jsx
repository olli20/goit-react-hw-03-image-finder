import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({text, type}) => {
    return(
        <button type={type}>{text}</button>
    )
}

export default Button;