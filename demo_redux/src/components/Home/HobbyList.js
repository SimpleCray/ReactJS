import React from 'react';
import PropTypes from 'prop-types';

HobbyList.propTypes ={
    hobbyList: PropTypes.array,
};

HobbyList.defaultProps ={
    hobbyList: [],
};

export default function HobbyList(props){
    const{hobbyList} = props;

    return(
        <ul>
            {hobbyList.map(hobby=>(
                <li key={hobby.id}>{hobby.title}</li>
            ))}
        </ul>
    )
}

