import React, { Component } from "react";
import ColdWar from "../images/cold-war2.jpg";
import SaveImage from "../images/beskyddarna2.jpg";
import ShopLifters from "../images/shoplifters2.jpg";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src: ColdWar,
    altText: "",
    caption:
      "Cold War, Det underförståddas konst som bara en riktig mästare behärskar."
  },
  {
    src: SaveImage,
    altText: "",
    caption: "Beskyddarna, Som att kliva in i en mustig men ordknapp tavla."
  },
  {
    src: ShopLifters,
    altText: "",
    caption:
      "Shoplifters, Nytt mästerverk av vår tids främsta familjeskildrare."
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem className="imageHolder"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            className="captionHeader"
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <React.Fragment>
      <div className="container homeCarousel">
        <div className="carousel-inner d-block w-100">
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators
              items={items}
              // activeIndex={activeIndex}
              // onClickHandler={this.goToIndex}
            />
            {slides}
            <CarouselControl
              // direction="prev"
              // directionText="Previous"
              onClickHandler={this.previous}
            />
            <CarouselControl
              // direction="next"
              // directionText="Next"
              onClickHandler={this.next}
            />
          </Carousel>
        </div>
      </div>
      <div className="row">
      <div className="col">
      <i class="fab fa-facebook-square"></i>
      <i class="fab fa-facebook-messenger"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-twitter-square"></i>
      </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Home;
