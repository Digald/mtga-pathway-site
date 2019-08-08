import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PageBody from "./components/PageBody/PageBody";
import AppPreview from "./components/AppPreview/AppPreview";
import DescriptionSection from "./components/DescriptionSection/DescriptionSection";
import Footer from "./components/Footer/Footer";

/**
 * Main component wrapping all other page components. App acts as a grid with one column and each child is it's own row.
 */

function App() {
  return (
    <div className="App" id="top">
      <div className="navContainer">
        <Navbar />
      </div>
      <PageBody />
      <AppPreview />
      <div className="previewSpacer" id="trythis" />
      <DescriptionSection />
      <Footer />
    </div>
  );
}

export default App;
