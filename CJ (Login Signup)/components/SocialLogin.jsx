import React from 'react';

const SocialLogin = () => {
  return (
    <div className="social col-md-6 pt-4">
      <br/>
      <div className="text-center mb-4">
        <em>Or connect with your favourite social media account</em>
      </div>
      <div className="text-center mb-1">
        <a href="#"><img className="mb-2 mt-2" src="/src/assets/img/Button_Facebook.svg" alt="logo" width="250" height="59" /></a>
      </div>
      <div className="text-center mb-1">
        <a href="#"><img className="mb-2 mt-2" src="/src/assets/img/Button_Twitter.svg" alt="logo" width="250" height="59" /></a>
      </div>
      <div className="text-center mb-1">
        <a href="#"><img className="mb-2 mt-2" src="/src/assets/img/Button_Google.svg" alt="logo" width="250" height="59" /></a>
      </div>
    </div>
  );
}

export default SocialLogin;
