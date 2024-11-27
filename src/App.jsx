import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';



import Page1 from "./pages/Page1";
import Header from "./components/Header";
import Page2 from "./pages/Page2";
import FooterImage from "./components/FooterImage";
import { Page3 } from "./pages/Page3";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Router>
        <div id="mian">
          <Header />
          <Page1 />
          <FooterImage />
          <Page2 />
          <Page6 />
          <Page3 />
          <Page5 />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
