import React, { Component } from "react";
import "./DescriptionSection.css";

class DescriptionSection extends Component {
  render() {
    return (
      <div className="descriptionSection">
        <h2 className="descriptionSection__title">How it works</h2>
        <div className="descriptionSection__section">
          <div className="descriptionSection__section__image" />
          <div className="descriptionSection__section__text">
            <h3>Collection</h3>
            <p>
              MTGA Pathway automatically imports all the cards in your
              collection and keeps updating when you get new cards through packs
              and events! It also keeps up to date with your gold, wildcards,
              and gems.
            </p>
          </div>
        </div>
        <div className="descriptionSection__section">
          Competitve Decks: Tired of playing the same few decks you have only
          the exact cards for? Search for current competitve decks that you are
          closest to building with your current collection, or with wildcards
        </div>
        <div className="descriptionSection__section">
          Deck list breakdown: Found a deck list you want to try? Add it to your
          saved decks and keep track of what cards you are missing as you
          continue to add or your collection.
        </div>
      </div>
    );
  }
}
export default DescriptionSection;
