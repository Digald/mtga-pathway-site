import React, { Component } from "react";
import "./DescriptionSection.css";
import SingleSection from "../SingleSection/SingleSection";

class DescriptionSection extends Component {
  render() {
    return (
      <div className="descriptionSection">
        <h2 className="descriptionSection__title">How it works</h2>
        <SingleSection
          title="Collection"
          text="MTGA Pathway automatically imports all the cards in your collection
            and keeps updating when you get new cards through packs and events!
            It also keeps up to date with your gold, wildcards, and gems."
          image="cardArr"
        />
        <SingleSection
          title="Competitve Decks"
          text="MTGA Pathway automatically imports all the cards in your collection
            and keeps updating when you get new cards through packs and events!
            It also keeps up to date with your gold, wildcards, and gems."
          image="decks_icon"
        />
        <SingleSection
          title="Deck list breakdown"
          text="Found a deck list you want to try? Add it to your
          saved decks and keep track of what cards you are missing as you
          continue to add or your collection."
          image="decklist_icon"
        />
      </div>
    );
  }
}
export default DescriptionSection;
