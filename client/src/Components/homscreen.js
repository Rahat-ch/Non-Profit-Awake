import React from 'react';
import FeaturedOrgs from './FeaturedOrgs';
import FeaturedPetitions from './FeaturedPetitions';
import SignUpModal from './signup_modal.js';

export default function homeScreen(props){
    return(
        <div id='homeScreen'>
          <div id="logButtons">
            <SignUpModal />
          </div>
          <div id='headers'>
            <h1>Non-Profit Awake </h1>
            <p>This is what we are about, making the world a better place to live in."Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit </p>
          </div> 
            <FeaturedOrgs />
            <FeaturedPetitions />
        </div>
    )
}