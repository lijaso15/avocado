import React from "react";
// import "./App.css";
import Slideshow from "./components/Slideshow";
import "bulma/css/bulma.css";
import UserCards from "./Views/UserCards";

import {
  faChevronLeft,
  faChevronRight,
  faTimesCircle,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faChevronLeft, faChevronRight, faTimesCircle, faHeart);

class App extends React.Component {
  render() {
    // return <Slideshow />;
    return <UserCards />;
  }
}

export default App;
