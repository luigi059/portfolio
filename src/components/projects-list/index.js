import React from 'react';
import {
  Container,
  Content,
  Title,
  Card,
  FrontCard,
  BackCard,
  Picture,
  SubTitleArea,
  SubTitle,
  TextArea,
  Text,
  ToolsArea,
  ToolTitle,
  ToolRow,
  Tool,
} from './styles/projects-list';

export default function ProjectList({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ProjectList.Title = function ProjectListTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

ProjectList.Content = function ProjectListContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

ProjectList.Card = function ProjectListCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

ProjectList.FrontCard = function ProjectListFrontCard({ children, ...restProps }) {
  return <FrontCard {...restProps}>{children}</FrontCard>;
};

ProjectList.BackCard = function ProjectListBackCard({ children, color1, color2, ...restProps }) {
  return (
    <BackCard color1={color1} color2={color2} {...restProps}>
      {children}
    </BackCard>
  );
};

ProjectList.Picture = function ProjectListPicture({ src }) {
  return <Picture src={src} alt="" />;
};

ProjectList.SubTitleArea = function ProjectListSubTitleArea({ children, color1, color2, ...restProps }) {
  return (
    <SubTitleArea color1={color1} color2={color2} {...restProps}>
      {children}
    </SubTitleArea>
  );
};

ProjectList.SubTitle = function ProjectListSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

ProjectList.TextArea = function ProjectListTextArea({ children, ...restProps }) {
  return <TextArea {...restProps}>{children}</TextArea>;
};

ProjectList.Text = function ProjectListText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

ProjectList.ToolsArea = function ProjectListToolsArea({ children, ...restProps }) {
  return <ToolsArea {...restProps}>{children}</ToolsArea>;
};

ProjectList.ToolTitle = function ProjectListToolTitle({ children, ...restProps }) {
  return <ToolTitle {...restProps}>{children}</ToolTitle>;
};

ProjectList.ToolRow = function ProjectListToolRow({ children, ...restProps }) {
  return <ToolRow {...restProps}>{children}</ToolRow>;
};

ProjectList.Tool = function ProjectListTool({ src, ...restProps }) {
  return <Tool src={src} {...restProps} />;
};
