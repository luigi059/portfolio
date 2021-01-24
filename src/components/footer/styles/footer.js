import styled from 'styled-components/macro';

/* 0f3057
00587a
008891
e7e7de */
export const Container = styled.section`
  background-color: #0f3057;
`;

export const MainText = styled.h1`
  font-family: 'sans-serif', 'Arial';
  font-size: 4rem;
  font-weight: 400;
  color: #f4f5db;
  margin: 2rem 0;
  @media only screen and (max-width: 56.25em) {
    font-size: 2rem;
  }
`;

export const SubText = styled.h2`
  font-family: 'sans-serif', 'Arial';
  font-size: 2rem;
  font-weight: 200;
  color: #f4f5db;
  margin-bottom: 2rem;
  @media only screen and (max-width: 56.25em) {
    font-size: 2rem;
  }
`;

export const TM = styled.div`
  height: 5rem;
  font-family: 'sans-serif', 'Arial';
  color: #f4f5db;
  background-color: #222831;
`;
