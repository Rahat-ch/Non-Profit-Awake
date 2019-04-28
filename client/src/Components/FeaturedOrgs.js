import React, {Component} from 'react';
import Slider from 'react-slick';
import { Divider } from 'semantic-ui-react';

import img1 from '../Images/logo8.jpg';
import img2 from '../Images/logo2.png';
import img3 from '../Images/logo7.png';
import img4 from '../Images/logo4.png';


class FeaturedOrgs extends Component{
    constructor(props){
        super(props);
        this.state ={
           images: [img1, img2, img3, img4] 
        }
    }
   
    render(){
        let settings = {
            dots: true,
            infinite:true,
            speed: 3000,
            autoplay: true,
            autoplaySpeed: 7000,
            slidesToShow: 1,
            slidesToScrool:1
        };
        return(
        <div id='featureOrgs'>
            <Slider {...settings}>
                {this.state.images.map(img =>(
                    <div id='imgDescription' className="slider"> 
                        <div id='parHolder'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                        </div> 
                        <div id='imgHolder'>
                            <img src={img} />  
                        </div>               
                    </div>
                    ))}
            </Slider>
        </div>
        
            
        )
    }
}
export default FeaturedOrgs;
       