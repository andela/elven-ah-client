import React from 'react';
import btnFacebook from '../../../shared/assets/img/Button_Facebook.svg';
import btnGoogle from '../../../shared/assets/img/Button_Twitter.svg';
import btnTwitter from '../../../shared/assets/img/Button_Google.svg';

const SocialLogin = () => (
  <div className="social col-md-6 pt-4">
    <br />
    <div className="text-center mb-4">
      <em>Or connect with your favourite social media account</em>
    </div>
    <div className="text-center mb-1">
      <a href="#"><img className="mb-2 mt-2" src={btnFacebook} alt="logo" width="250" height="59" /></a>
    </div>
    <div className="text-center mb-1">
      <a href="#"><img className="mb-2 mt-2" src={btnTwitter} alt="logo" width="250" height="59" /></a>
    </div>
    <div className="text-center mb-1">
      <a href="#"><img className="mb-2 mt-2" src={btnGoogle} alt="logo" width="250" height="59" /></a>
    </div>
  </div>
);

export default SocialLogin;
