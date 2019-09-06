import React from 'react';

const Header = (props) => {
    return(
        <div>
            <h1>
                {props.title}
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
};

export default Header;