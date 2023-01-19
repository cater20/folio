import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 100, text: 'Students', },
  { number: 1000, text: 'Github Followers', },
  { number: 2000, text: 'Github Stars', }

];

const Acomplishments = () => (

<Section>
  <SectionTitle>Acomplishments</SectionTitle>
  <Boxes>
    {data.map((card, index)=>(
      <Box key={index}>
        <BoxNum>{card.number}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
  </Section>
);

export default Acomplishments;