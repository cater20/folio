import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row noppadding>
  <LeftSection>
    <SectionTitle  main center>
    .
Hello ,, i am <br/><hr/>
                   Chrisphine  <br/>
         a  softtware engineer

  </SectionTitle>
  <SectionText>
    
    Being a Software Engineer means loving to make interesting web based appliations <br/>
    that entice a lot of the internert users.
  </SectionText>
  <Button onclick ={()=>window.location = 'https://google.com'}> 
Learn more .
  </Button>
</LeftSection>
 </Section>
);

export default Hero;