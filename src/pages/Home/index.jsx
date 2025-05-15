import React from 'react';
import SvgIcon from '@/components/SvgIcon';
import useImage from '@/hooks/useImage';

const Home = () => {
  const image = useImage('test.png');
  const image2 = useImage('telegram.png', 'home');
  return (
    <div>
      <SvgIcon name="react" />
      <SvgIcon name="vite" />
      <img src={image} alt="" />
      <img src={image2} alt="" />
    </div>
  );
};

export default Home;
