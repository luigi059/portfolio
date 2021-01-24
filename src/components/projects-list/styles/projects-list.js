import styled from 'styled-components/macro';

export const Container = styled.div`
  background-image: linear-gradient(to right bottom, rgba(15, 48, 87, 0.8), rgba(0, 88, 122, 0.8)),
    url(/images/stars.jpg);
  background-size: cover;
  padding: 5rem 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-family: 'sans-serif', 'Arial';
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #f4f5db;
`;

export const Card = styled.div`
  position: relative;
  height: 40rem;
  width: 30rem;
  margin: 0 3rem;
  positon: relative;
  border-radius: 3px;
  @media only screen and (max-width: 56.25em) {
    height: auto;
    background-color: #fff;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
    margin-bottom: 2rem;
    width: 40rem;
  }
`;

export const FrontCard = styled.div`
  height: 40rem;
  background-color: #f4f5db;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  ${Card}:hover & {
    transform: rotateY(-180deg);
  }
  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    height: auto;
    position: relative;
    box-shadow: none;
    ${Card}:hover & {
      transform: rotateY(0);
    }
  }
`;

export const BackCard = styled.div`
  height: 40rem;
  background-image: linear-gradient(to right bottom, ${({ color1 }) => color1}, ${({ color2 }) => color2});
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transform: rotateY(180deg);
  ${Card}:hover & {
    transform: rotateY(0);
  }
  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    height: auto;
    transform: rotateY(0);
    position: relative;
    border-radius: 0;
  }
`;

export const Picture = styled.img`
  width: 100%;
  display: block;
`;

export const SubTitleArea = styled.div`
  background-image: linear-gradient(to right, ${({ color1 }) => color1}, ${({ color2 }) => color2});
`;

export const SubTitle = styled.h2`
  font-family: 'sans-serif', 'Arial';
  font-size: 2.8rem;
  font-weight: 300;
  text-align: center;
  color: #f4f5db;
`;

export const TextArea = styled.div`
  height: 30%;
  padding: 2rem;
`;

export const Text = styled.p`
  font-family: 'serif', 'Times New Roman';
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2;
  text-align: center;
  color: #777;
`;

export const ToolsArea = styled.div``;

export const ToolTitle = styled.h3`
  font-family: 'sans-serif', 'Arial';
  text-align: center;
  color: #777;
`;

export const ToolRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

export const Tool = styled.img`
  width: 5rem;
  margin: 0 1rem;
`;
