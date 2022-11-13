import React from "react";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Setlist = () => {
  return (
    <div>
      <div className="show-title w=80">
        <ListGroup horizontal>
          <Container>
            <ListGroup.Item className="band-name">
              Dead & Company
            </ListGroup.Item>
          </Container>
          <Container>
            <ListGroup.Item className="venue-name">Walnut Creek</ListGroup.Item>
          </Container>
          <Container>
            <ListGroup.Item className="show-date-time">
              June 01, 2023
            </ListGroup.Item>
          </Container>
        </ListGroup>
      </div>
      <div>
        <h5 className="countdown">Countdown to Showtime!</h5>
        <h4>99:99</h4>
      </div>
      <Container className="sets">
        <Container>
          <Card className="set-one">
            <h2>Set One</h2>
            <Table striped bordered hover size="sm" variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Song Title</th>
                  <th>Add {">"} for into</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Touch of Grey</td>
                  <td>{">"}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Uncle John's Band</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>He's Gone</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Container>
        <Container>
          <Card className="set-two">
            <h2>Set Two</h2>
            <Table striped bordered condensed hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Song Title</th>
                  <th>Add {">"} for into</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Playing in the Band</td>
                  <td>{">"}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>St. Stephen</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Bird Song</td>
                  <td>{">"}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Drums/Space</td>
                  <td> {">"} </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Playing in the Band reprise</td>
                  <td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Mississippi Half Step</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Container>
        <Container>
          <Card className="encore">
            <h2>Encore</h2>
            <Table striped bordered condensed hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Song Title</th>
                  <th>Add {">"} for into</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Playing in the Band reprise</td>
                  <td> {">"} </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Attics of My Life</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>One More Saturday Night</td>
                  <td>{">"}</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Container>
      </Container>
    </div>
  );
};

export default Setlist;
