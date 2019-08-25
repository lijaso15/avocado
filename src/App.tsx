import React from "react";
// import "./App.css";
import Slideshow from "./components/Slideshow";
import "bulma/css/bulma.css";
import UserCards from "./Views/UserCards";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import {
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
  faCommentDots,
  faHome,
  faCoins,
  faLockOpen,
  faCog,
  faBookReader
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faChevronLeft,
  faChevronRight,
  faArrowLeft,
  faCommentDots,
  faHome,
  faCoins,
  faLockOpen,
  faCog,
  faBookReader
);

class App extends React.Component {
  render() {
    return (
      <section className="hero is-fullheight">
        <Navbar />
        <UserCards />
        <Slideshow />
        <Footer />
      </section>
    );
  }
}

export default App;
