import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import groupIcon from "./assets/group.svg";
import { Button, Row } from "reactstrap";
function App() {
  return (
    <div className="App">
      <header className="App-header">College of Engineering Aranmula</header>
      <div className="center">
        <h1 className="content">
          HACK WITH <span>REACT</span>
        </h1>
        <img src={groupIcon} alt="icons" />
        <div className="text-center mt-5">
          <Button color="primary" size="lg">
            Let’s Hack This
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
