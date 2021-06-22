import React, {Component} from 'react';
import styled from "@emotion/styled";
import { Transition, animated } from 'react-spring/renderprops'
import ImageArray from "./images"
import "./slides.css";

const images = ImageArray.map(image => <div className="imageContain" key={image.id}><img src={image.imageURL}/><h4>{image.imageCap}</h4></div>)

const Container = styled("div")`
    height: 100vh;
    width: 100vw;
    position: absolute;
    cursor: pointer;
    z-index:0;
    background-color: black;
    & > img {
      will-change: transform, opacity;
      position: absolute;
      z-index:0;
    }
`;
export default class Slides extends Component{
    constructor(){
        super();
        this.state = {
            index:0
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.toggle(), 10000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
  toggle = e =>
    this.setState(state => ({
      index: state.index === 4 ? 0 : state.index + 1
    }))
  render() {
    return (
      <Container>
        <Transition
            native
            reset
            unique
            items={this.state.index}
            from={{ opacity: 0, transform: "translate3d(100%, 0 ,0)" }}
            enter={{ opacity: 1, transform: "translate3d(0%, 0, 0)" }}
            leave={{ opacity: 0, transform: "translate3d(-50%, 0, 0)" }}
          >
          {index => style => (
              <animated.div style={{...style}}>
                  {images[index]}
              </animated.div>
          )}
        </Transition>
      </Container>
    )
  }

}

