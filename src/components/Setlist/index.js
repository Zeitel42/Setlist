import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsPlusCircle } from "react-icons/bs";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import SetOne from "../Setlist/SetOne";
import SetTwo from "../Setlist/SetTwo";
import Encore from "../Setlist/Encore";

const Setlist = () => {
  const daysToShow = 198 * 24 * 60 * 60 * 1000;
  const timeNow = new Date().getTime();
  const showTime = timeNow + daysToShow;

  return (
    <div>
      <div className="show-title w=80">
        <ListGroup horizontal>
          <Container>
            <ListGroup.Item className="band-name">
              <h1>Dead & Company</h1>
            </ListGroup.Item>
          </Container>
          <Container>
            <ListGroup.Item className="venue-name">
              <h1>Walnut Creek</h1>
            </ListGroup.Item>
          </Container>
          <Container>
            <ListGroup.Item className="show-date-time">
              <h1>June O1, 2023 7pm</h1>
              <Container>
                <CountdownTimer targetDate={showTime} />
                <h5 className="countdown">Countdown to Showtime!</h5>
              </Container>
            </ListGroup.Item>
          </Container>
        </ListGroup>
      </div>
      <div>
        <h4></h4>
      </div>
      <Container className="sets">
        <Container>
          <Card className="set-one">
            <SetOne />
          </Card>
        </Container>
        <Container>
          <Card className="set-two">
            <SetTwo />
          </Card>
        </Container>
        <Container>
          <Card className="encore">
            <Encore />
          </Card>
        </Container>
      </Container>
    </div>
  );
};

export default Setlist;
