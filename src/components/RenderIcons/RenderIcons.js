import React, { Component } from "react";
import "./RenderIcons.css";
import collection_icon from '../../assets/collection_icon.svg';
import decks_icon from '../../assets/decks_icon.svg';
import decklist_icon from '../../assets/decklist_icon.svg';
import DisplayIcon from "../DisplayIcon/DisplayIcon.js";


class RenderIcons extends Component {
  render() {
    let usedIcon;
    const { image } = this.props;
    switch (image) {
      case "cardArr":
        usedIcon = collection_icon;
        return <DisplayIcon icon={usedIcon}/>;
      case "decks_icon":
          usedIcon = decks_icon;
          return <DisplayIcon icon={usedIcon}/>;
      case "decklist_icon":
          usedIcon = decklist_icon;
          return <DisplayIcon icon={usedIcon}/>;
      default:
        return "";
    }
  }
}
export default RenderIcons;
