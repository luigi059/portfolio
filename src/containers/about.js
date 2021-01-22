import React from 'react';
import { About } from '../components';

export default function AboutContainer() {
  return (
    <About>
      <About.Title>ABOUT ME</About.Title>
      <About.Content>
        <About.TextArea>
          <About.SubTitle>MOTIVATED & RESOLUTE</About.SubTitle>
          <About.Text>
            I'm a third year software development student looking for an oppurtunity to expand and broaden my horizons.
            Currently based in Sligo, Ireland, I'm willing to relocate if truly neccessary.
          </About.Text>
          <About.SubTitle>WILLING LEARNER & OPEN MINDED</About.SubTitle>
          <About.Text>
            I'm currently proficient in ReactJS and NodeJS &#40;MERN stack&#41;. I'm willing to learn any tools,
            languages and tech stacks on the go. I also have experience in C# and using SQL
          </About.Text>
        </About.TextArea>
        <About.PicArea>
          <About.Picture src="/images/nodejs.png" />
          <About.Picture src="/images/react.png" />
        </About.PicArea>
      </About.Content>
    </About>
  );
}
