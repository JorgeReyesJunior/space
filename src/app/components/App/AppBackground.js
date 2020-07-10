import React  from 'react';

const AppBackground = () => {
  return (
    <div className="o-app-background">
      <div className="o-app-background__overlay"></div>
      <img className="o-app-background__image" src={'https://jorgereyesjunior.github.io/src/assets/media/images/space.png'} alt="Abstract white triangles"></img>
      <video className="o-app-background__video" preload="preload" autoPlay="autoplay" loop="loop" muted >
        <source src={'https://jorgereyesjunior.github.io/src/assets/media/videos/space.mp4'} type="video/mp4"></source>
      </video>
    </div>
  );

};
  

export default AppBackground;