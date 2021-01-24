import img1 from "../img/slideshow/admin2.png";
import img2 from "../img/slideshow/survival2.png";
import img3 from "../img/slideshow/creative2.png";
import img4 from "../img/slideshow/SOT_Sun_Mountain_1.png";
import "../css/desktop/slides.css"
import React, {Component} from 'react';


let images = [
    img1,
    img2,
    img3,
    img4
]

class SlideShow extends Component{
    constructor(){
        super();
        this.state = {
            img1: 0, img2: 1,
        }
        this.changeSlides = this.changeSlides.bind(this)
    }

    changeSlides(){
        this.setState(prevSlide => {
            if(this.state.img1 >= images.length - 1){
                return { img1: 0, img2: prevSlide.img2 + 1}
            } else if (this.state.img2 >= images.length - 1){
                return { img1: prevSlide.img1 + 1, img2: 0}
            }else {
                return { img1: prevSlide.img1 + 1, img2: prevSlide.img2 + 1}
            }
        })
    }
    componentDidMount() {
        this.interval = setInterval(() => this.changeSlides(), 15000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render(){
        return(
            <div className="slides">
                <div id="slide1"><img src={images[this.state.img1]}></img></div>
                <div id="slide2"><img src={images[this.state.img2]}></img></div>
            </div>  
        )
    }
}

export default SlideShow;