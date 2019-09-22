import React, { Component } from "react"
import styled from "styled-components"
import SingleSection from "../components/singleSection"

/**
 * The portion of the page that contains all the descriptions of what the app does and icons that represent those descriptions.
 */

const DescriptionSectionWrapper = styled.div`
  background-color: white;
  color: #1b1b3a;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  padding: 70px 10% 50px 10%;
  @media (max-width: 768px) {
    padding: 50px 0;
  }
`

const DescriptionSectionTitle = styled.h2`
  color: black;
  font-size: 55px;
  margin: 0;
  text-align: center;
`

class DescriptionSection extends Component {
  render() {
    return (
      <DescriptionSectionWrapper id="howitworks">
        <DescriptionSectionTitle>How it works</DescriptionSectionTitle>
        <SingleSection
          title="Collection"
          text="MTGA Pathway automatically imports all the cards in your collection
            and stays up to date when you get new cards through packs and events!
            It also keeps up to date with your gold, wildcards, and gems."
          image="cardArr"
        />
        <SingleSection
          title="Competitve Decks"
          text="Tired of playing the same few decks you only have
          the exact cards for? Search for current competitve decks that you are
          closest to building with your current collection, or with wildcards."
          image="decks_icon"
        />
        <SingleSection
          title="Deck list breakdown"
          text="Found a deck list you want to try? Add it to your
          saved decks and keep track of what cards you are missing as you
          continue to add or your collection."
          image="decklist_icon"
        />
      </DescriptionSectionWrapper>
    )
  }
}
export default DescriptionSection
