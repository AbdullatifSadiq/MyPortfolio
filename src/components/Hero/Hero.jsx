import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there,<br />
        I'm Abdul-latif Sadiq
      </SectionTitle>
      <SectionText>
        A Software Engineer who's in love with optimism.
      </SectionText>

    </LeftSection>
  </Section>

);

export default Hero;