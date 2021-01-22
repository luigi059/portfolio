import styled from 'styled-components/macro';

export const Container = styled.section`
  background-color: #d9dab0;
  padding: 5rem 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextArea = styled.div`
  width: 45%;
`;

export const Title = styled.h1`
  font-family: 'sans-serif', 'Arial';
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  background-image: linear-gradient(to right, #0f3057, #00587a);
  color: transparent;
  -webkit-background-clip: text;
  text-align: center;
  margin-bottom: 3rem;
`;

export const SubTitle = styled.h2`
  font-family: 'sans-serif', 'Arial';
  font-size: 1.6rem;
  font-weight: 700;
  color: #0f3057;
  margin-bottom: 3rem;
`;

export const Text = styled.p`
  font-family: 'serif', 'Times New Roman';
  font-size: 1.6rem;
  margin-right: 1rem;
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const PicArea = styled.div`
  margin-left: 1rem;
  width: 45%;
  display: flex;
`;

export const Picture = styled.img`
  width: 55%;
`;
