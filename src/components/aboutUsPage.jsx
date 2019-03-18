import React, { Component } from "react";
import CandyImage from "../images/popcornanddrink.jpg";
import AboutusImage from "../images/aboutusImage.jpg";
import EventImage from "../images/eventImage.jpg";
import QueueAnim from "rc-queue-anim";
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from "reactstrap";

class AboutUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    Object.assign(this, props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="aboutUsInfoPage">
            <QueueAnim>
            <div key="1">
              <div className="row">
                <div className="col-lg-12 col-md-4 col-sm-12 mb-5 text-center">
                  <Col>
                    <Card className="candyInfoCard">
                      <CardImg
                        top
                        width="100%"
                        src={CandyImage}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle>
                          <h2>{this.props.butikName}</h2>
                        </CardTitle>
                        <CardText>{this.props.butik}</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </div>
              </div>
              </div>
              <div key="5">
              <div className="row">
                <div className="col-lg-12 col-md-4 col-sm-12 mb-5 text-center">
                  <Col>
                    <Card className="eventInfoCard">
                      <CardImg
                        top
                        width="100%"
                        src={EventImage}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle>
                          <h2>{this.props.eventName}</h2>
                        </CardTitle>
                        <CardText>{this.props.event}</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </div>
              </div>
              </div>
              <div key="10">
              <div className="row">
                <div className="col-lg-12 col-md-4 col-sm-12 mb-5 text-center">
                  <Col>
                    <Card className="abouUsInfoCard">
                      <CardImg
                        top
                        width="100%"
                        src={AboutusImage}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle>
                          <h2>{this.props.aboutusName}</h2>
                        </CardTitle>
                        <CardText>{this.props.aboutUs}</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </div>
              </div>
              </div>
              <div key="15">
              <div className="row">
                <div className="col-lg-12 col-md-4 col-sm-12 mb-5 text-center">
                  <Col>
                    <Card className="abouUsInfoCard">
                      <CardBody>
                        <CardTitle>
                          <h2>{this.props.regulationName}</h2>
                        </CardTitle>
                        <CardText>{this.props.regulations}</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </div>
              </div>
              </div>
            </QueueAnim>, mountNode);
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUsPage;
