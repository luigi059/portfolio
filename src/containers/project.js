import React from 'react';
import { ProjectList, Center, Icon } from '../components';

export default function ProjectContainer({ prop }) {
  return (
    <ProjectList prop={prop}>
      <ProjectList.Title>PROJECTS</ProjectList.Title>
      <ProjectList.Content>
        <ProjectList.Card>
          <ProjectList.FrontCard>
            <ProjectList.Picture src="/images/weather.png" />
            <ProjectList.SubTitleArea color1="#e27802" color2="#f88f01">
              <ProjectList.SubTitle>Weather App</ProjectList.SubTitle>
            </ProjectList.SubTitleArea>
            <ProjectList.TextArea>
              <ProjectList.Text>
                A frontend minimalist weather app where you can search for a city's weather details e.g. Wind Speed,
                Humidity etc.
              </ProjectList.Text>
            </ProjectList.TextArea>
            <ProjectList.ToolsArea>
              <ProjectList.ToolTitle>Built With</ProjectList.ToolTitle>
              <ProjectList.ToolRow>
                <ProjectList.Tool src="/images/react.png" />
              </ProjectList.ToolRow>
            </ProjectList.ToolsArea>
          </ProjectList.FrontCard>
          <ProjectList.BackCard color1="#e27802" color2="#f88f01">
            <Center>
              <ProjectList.SubTitle>URL + Code</ProjectList.SubTitle>
              <Icon>
                <Icon.Web to="https://weather-app-ee033.web.app/" />
                <Icon.GitHub to="https://github.com/luigi059/weather-app" />
              </Icon>
            </Center>
          </ProjectList.BackCard>
        </ProjectList.Card>
        <ProjectList.Card>
          <ProjectList.FrontCard>
            <ProjectList.Picture src="images/netflix.png" />
            <ProjectList.SubTitleArea color1="#cd0a0a" color2="#ec0101">
              <ProjectList.SubTitle>Netflix Clone</ProjectList.SubTitle>
            </ProjectList.SubTitleArea>
            <ProjectList.TextArea>
              <ProjectList.Text>
                A frontend Netflix Clone built to imitate Netflix's website to the best of my abilities.
              </ProjectList.Text>
            </ProjectList.TextArea>
            <ProjectList.ToolsArea>
              <ProjectList.ToolTitle>Built With</ProjectList.ToolTitle>
              <ProjectList.ToolRow>
                <ProjectList.Tool src="/images/react.png" />
              </ProjectList.ToolRow>
            </ProjectList.ToolsArea>
          </ProjectList.FrontCard>
          <ProjectList.BackCard color1="#cd0a0a" color2="#ec0101">
            <Center>
              <ProjectList.SubTitle>URL + Code</ProjectList.SubTitle>
              <Icon>
                <Icon.Web to="https://goofy-jepsen-5dcb22.netlify.app" />
                <Icon.GitHub to="https://github.com/luigi059/Netflix-Clone" />
              </Icon>
            </Center>
          </ProjectList.BackCard>
        </ProjectList.Card>
        <ProjectList.Card>
          <ProjectList.FrontCard>
            <ProjectList.Picture src="images/gametracker.png" />
            <ProjectList.SubTitleArea color1="#222831" color2="#393e46">
              <ProjectList.SubTitle>Game Tracker</ProjectList.SubTitle>
            </ProjectList.SubTitleArea>
            <ProjectList.TextArea>
              <ProjectList.Text>
                A fullstack games directory service where users can track their favourite games
              </ProjectList.Text>
            </ProjectList.TextArea>
            <ProjectList.ToolsArea>
              <ProjectList.ToolTitle>Built With</ProjectList.ToolTitle>
              <ProjectList.ToolRow>
                <ProjectList.Tool src="/images/mongodb.png" />
                <ProjectList.Tool src="/images/express.png" />
                <ProjectList.Tool src="/images/react.png" />
                <ProjectList.Tool src="/images/nodejs.png" />
              </ProjectList.ToolRow>
            </ProjectList.ToolsArea>
          </ProjectList.FrontCard>
          <ProjectList.BackCard color1="#222831" color2="#393e46">
            <Center>
              <ProjectList.SubTitle>URL + Code</ProjectList.SubTitle>
              <Icon>
                <Icon.Web to="https://game--tracker.herokuapp.com/" />
                <Icon.GitHub to="https://github.com/luigi059/directory-service" />
              </Icon>
            </Center>
          </ProjectList.BackCard>
        </ProjectList.Card>
        <ProjectList.Card>
          <ProjectList.FrontCard>
            <ProjectList.Picture src="images/ecommerce.png" />
            <ProjectList.SubTitleArea color1="#00587a" color2="#008891">
              <ProjectList.SubTitle>E-Commerce</ProjectList.SubTitle>
            </ProjectList.SubTitleArea>
            <ProjectList.TextArea>
              <ProjectList.Text>
                A fullstack e-commerce website where users can view and buy cars and motorcycles{' '}
              </ProjectList.Text>
            </ProjectList.TextArea>
            <ProjectList.ToolsArea>
              <ProjectList.ToolTitle>Built With</ProjectList.ToolTitle>
              <ProjectList.ToolRow>
                <ProjectList.Tool src="/images/mongodb.png" />
                <ProjectList.Tool src="/images/express.png" />
                <ProjectList.Tool src="/images/react.png" />
                <ProjectList.Tool src="/images/nodejs.png" />
              </ProjectList.ToolRow>
            </ProjectList.ToolsArea>
          </ProjectList.FrontCard>
          <ProjectList.BackCard color1="#00587a" color2="#008891">
            <Center>
              <ProjectList.SubTitle>URL + Code</ProjectList.SubTitle>
              <Icon>
                <Icon.Web to="https://e----commerce.herokuapp.com/" />
                <Icon.GitHub to="https://github.com/luigi059/e-commerce" />
              </Icon>
            </Center>
          </ProjectList.BackCard>
        </ProjectList.Card>
      </ProjectList.Content>
    </ProjectList>
  );
}
