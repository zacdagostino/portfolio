import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Assuming you are using Next.js for Image component
import Picture1 from '../public/assets/images/sky.png'

import Picture2 from '../public/assets/images/sky.png'

import Picture3 from '../public/assets/images/sky.png'

import { motion } from 'framer-motion';

import { useTransform } from 'framer-motion';




const Slide = (props) => {

  const direction = props.direction == 'left' ? -1 : 1;

  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])



  return (

    <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">

      <Phrase src={props.src}/>

      <Phrase src={props.src}/>

      <Phrase src={props.src}/>

    </motion.div>

  )

}

const Phrase = ({ src }) => {
  return (
    <div className="px-5 flex gap-5 items-center">
      <p className="text-[7.5vw] text-white">Front End Developer</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'cover' }} src={src} alt="image" fill />
      </span>
    </div>
  );
};

const ParallaxText = ({scrollYProgress}) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="h-[100vh]" />

      <Slide src={Picture1} direction={'left'} left={"-40%"} progress={scrollYProgress}/>

      <Slide src={Picture2} direction={'right'} left={"-25%"} progress={scrollYProgress}/>

      <Slide src={Picture3} direction={'left'}  left={"-75%"} progress={scrollYProgress}/>

      <div className="h-[100vh]" />
    </>
  );
};

export default ParallaxText;
