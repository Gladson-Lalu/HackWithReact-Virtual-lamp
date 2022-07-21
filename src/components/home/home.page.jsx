import "./home.page.css";
import React from "react";
import groupIcon from "../../assets/group.svg";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigator = useNavigate();
  return (
    <div>
      <header className="App-header">College of Engineering Aranmula</header>
      <div className="center">
        <h1 className="content">
          HACK WITH <span>REACT</span>
        </h1>
        <img src={groupIcon} alt="icons" />
        <div className="text-center mt-5">
          <Button
            color="primary"
            size="lg"
            onClick={() => {
              navigator("/lamp");
            }}
          >
            Let’s Hack This
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
