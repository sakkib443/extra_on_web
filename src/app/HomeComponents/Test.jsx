import React from 'react';
import bgImage from '../../images/grid-bg.png';

const Test = () => {
  return (
<div
  style={{ backgroundImage: `url(${bgImage.src})` }}
  className="w-full h-[90vh] bg-cover bg-center"
>
  <h1>Hello World</h1>
</div>

  );
};

export default Test;
