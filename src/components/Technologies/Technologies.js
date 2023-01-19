import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='tech'>
  <SectionDivider />
  <br />
<SectionTitle> Technologies</SectionTitle>
<SectionText>
I've worked with a range a technologies in the web development world.
      From Back-end To Design
</SectionText>
<List>
    <ListItem>
      <DiReact size='3rem'/>
<ListContainer>
  <ListTitle>Front-end</ListTitle>

  <ListParagraph>
  Experiece with <br />
            vanilla js <br />
            Ruby
  </ListParagraph>
</ListContainer>
      </ListItem>

    <ListItem>
      <DiFirebase size='3rem'/>
<ListContainer>
  <ListTitle>Back-end</ListTitle>

  <ListParagraph>
  Experiece with <br />
            React.js <br />
            Ruby on rails <br />
            database
  </ListParagraph>
</ListContainer>
      </ListItem>
 
    <ListItem>
      <DiZend size='3rem'/>
<ListContainer>
  <ListTitle>ui/ux</ListTitle>

  <ListParagraph>
  Experiece with <br />
        tools like figma
           
</ListParagraph>
</ListContainer>
      
    </ListItem>
 </List>
 </Section>
);

export default Technologies;
