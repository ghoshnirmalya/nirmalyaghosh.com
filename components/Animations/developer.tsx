import { useRef, useEffect } from 'react';
import { Rive } from 'rive-js';
import React, { FC } from "react";
import path from 'path'
import { Box, Flex } from '@chakra-ui/layout';

const DeveloperAnimation: FC = ()  => {

  const canvas = useRef<HTMLCanvasElement>(null)
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animation: typeof Rive;
    animation = new Rive({
      src: path.resolve("/animations/developer_.riv"),
      canvas: canvas.current,
      autoplay: true      
    });

    resize();
    window.addEventListener('resize', resize);
    return () => {
      animation.current?.stop()
      window.removeEventListener('resize', resize);
    };
  }, []);

  const resize = () => {
    if (container.current && canvas.current) {
      const { width, height } = container.current.getBoundingClientRect();
      canvas.current.width = width;
      canvas.current.height = height;
    }
  }

  return (
    <Flex ref={container} h="400" align="center" justify="center" mt="1rem" display={{base: "none", md: "block"}}>
        <canvas ref={canvas} />
    </Flex>
  )
}

export default DeveloperAnimation;