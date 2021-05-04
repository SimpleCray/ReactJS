import React, { Component } from "react";
import "./HobbyList.css";
import PropTypes from "prop-types";

class HobbyList extends Component {
  render() {
    const { hobbyList, activeId, onHobbyClick } = this.props;

    const handleClick = (hobby) => {
      if (onHobbyClick) {
        onHobbyClick(hobby);
      }
    };
    return (
      <ul>
        {hobbyList.map((hobby) => (
          <li
            key={hobby.id}
            className={hobby.id === activeId ? "active" : ""}
            onClick={() => handleClick(hobby)}
          >
            {hobby.title}
          </li>
        ))}
      </ul>
    );
  }
}

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
};

export default HobbyList;
