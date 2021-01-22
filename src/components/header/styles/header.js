import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';

/* 0f3057
00587a
008891
e7e7de */
const moveInLeft = keyframes`
0% {
  opacity: 0;
  transform: translateX(-10rem); }
80% {
  transform: translateX(1rem); }
100% {
  opacity: 1;
  transform: translate(0); }
`;
const moveInRight = keyframes`  
0% {
  opacity: 0;
  transform: translateX(10rem); }
80% {
  transform: translateX(-1rem); }
100% {
  opacity: 1;
  transform: translate(0); }
`;
const moveInBottom = keyframes`
0% {
  opacity: 0;
  transform: translateY(3rem); }
100% {
  opacity: 1;
  transform: translate(0); }
`;

export const Video = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.2;
  overflow: hidden;
  object-fit: cover;
`;

export const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(to right bottom, rgba(15, 48, 87, 0.8), rgba(0, 88, 122, 0.8));
  background-size: cover;
  background-position: top;
  position: relative;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MainText = styled.h1`
  font-family: 'sans-serif', 'Arial';
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 1rem;
  color: white;
  margin-bottom: 3rem;
  animation: ${moveInLeft} 1s linear;
`;

export const SubText = styled.h2`
  font-family: 'sans-serif', 'Arial';
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.5rem;
  color: white;
  margin-bottom: 3rem;
  animation: ${moveInRight} 1s linear;
`;

export const Icons = styled.div``;

export const Button = styled.button`
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
    color: #0f3057;
    animation: ${moveInBottom} 1s linear;
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
`;
