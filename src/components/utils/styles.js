import styled from 'styled-components/macro';

export const Centered = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CenterNoHeight = styled.div`
  display: flex;
  justify-content: center;
`;

export const Btn = styled.button`
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
    font-size: 1.6rem;
    border: none;
    cursor: pointer;
    outline: none;
    background-color: #00587a;
    color: #e7e7de;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  &:active {
    outline: none;
    transform: translateY(-5px);
    box-shadow: 0 0.5rem 1rem rgba($color-black, 0.2);
  }
  @media only screen and (max-width: 56.25em) {
    font-size: 1.25rem;
  }
`;
