import React, {Component} from 'react';
import Slider from 'react-slick';
import { Button } from 'semantic-ui-react';

class FeaturedPetitions extends Component{
    constructor(props){
        super(props);
        this.state ={
            titles: ['Feeding The Elderly', 'Food For Thought', 'Girl Hacker', 'Africa\'s Brightes', 'Basic Women Right', 'Resisting bad Govt.', 'Gaining Global Exposure', 'Local Scholars Go International'],
        }
    }
    render(){
        let settings = {
            infinite:true,
            speed: 3000,
            autoplay: true,
            autoplaySpeed: 6000,
            slidesToShow: 4,
            slidesToScrool:1,
            arrows: false,
        };
        return( 
            <div id='featurePetitions'>
                <div id='sliderDiv'>
                    <Slider {...settings}>
                        {this.state.titles.map(title =>(
                            <div id='petDisplay' > 
                                <div id='petTitle'>
                                   <h1>Title<h3>{title}</h3></h1>
                                   <Button primary>Read More</Button>
                                </div> 
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            )
        }
    }
    export default FeaturedPetitions;