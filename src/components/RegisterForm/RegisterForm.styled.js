import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { baseColor } from 'components/baseStyles/Variables.styled';
import { FaCheck, FaTimes } from 'react-icons/fa';
import BackgroundImage from 'images/register/bgForm.webp';
import waveMobile from 'images/hero/waveMobileFull.webp';
import waveTab from 'images/register/BGFornTab.webp';

export const FormSection = styled.section`
  height: 100%;

  @media screen and (max-width: 767.9px) {
    min-height: 540px;
    background-image: url(${waveMobile});
    background-repeat: no-repeat;
    background-size: 620px auto;
    background-position: bottom -250px left 30%;
  }

  @media screen and (min-width: 768px) and (max-width: 1279.9px) {
    min-height: 720px;
    background: url(${waveTab});
    background-repeat: no-repeat;
    background-size: 1396px auto;
    background-position: bottom -130px left 50%;
  }
`;

export const FormContainer = styled.div`
  /* width: 100%; */
  height: 100%;
  @media (min-width: 767px) and (max-width: 1279px) {
    padding-top: 168px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 44px;
    min-height: 700px;
    background: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: 1280px auto;
    background-position: bottom 0 left 50%;
  }
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 40px;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    font-weight: 500;
  }
`;
export const FormRegister = styled(Form)`
  position: relative;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 44px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 608px;
    margin: 0 auto;
    padding: 60px 0 40px 0;
    background-color: ${baseColor.colors.white};
    border-radius: 40px;
    -webkit-box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);
    -moz-box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);
    box-shadow: 7px 4px 14px 0px rgba(0, 0, 0, 0.11);
  }
  @media screen and (min-width: 1280px) {
    width: 618px;
    padding: 60px 0 60px 0;
  }
  > div {
    position: relative;
  }
`;
export const ShowPassword = styled.span`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 6%;
  top: 62%;
  transform: translateY(-80%);
  color: grey;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;
export const IconValid = styled(FaCheck)`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 6%;
  top: 62%;
  transform: translateY(-80%);
  color: grey;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;

export const IconInValid = styled(FaTimes)`
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 6%;
  top: 62%;
  transform: translateY(-80%);
  color: grey;
  cursor: pointer;
  svg {
    width: inherit;
    height: inherit;
  }
`;

export const LocationList = styled.ul`
  width: 98%;
  position: absolute;

  top: 74%;
  left: 1.1%;
  background-color: ${baseColor.colors.mainBg};
  z-index: 100;
  border: 1px solid;
  border-top-color: transparent;
  border-left-color: ${baseColor.colors.error};
  border-right-color: ${baseColor.colors.error};
  border-bottom-color: ${baseColor.colors.error};

  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;
export const LocationItem = styled.li`
  margin: 16px 30px 0 30px;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  cursor: pointer;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  text-align: left;
  color: ${baseColor.colors.inpText};
  background: ${baseColor.colors.mainBg};
  transition: all 0.25s ease-in;
  &:hover {
    color: ${baseColor.colors.orangeLight};
  }

  &:focus {
    color: ${baseColor.colors.orangeLight};
  }

  @media screen and (min-width: 768px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

export const Input = styled(Field)`
  width: 280px;
  font-size: 14px;
  line-height: 1.3;
  padding: 11px 0 12px 14px;
  background: ${baseColor.colors.mainBg};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  transition: all 0.25s ease-in;
  &:focus,
  &:hover {
    border-color: ${baseColor.colors.orange};
    outline: none;
  }
  @media screen and (min-width: 768px) {
    width: 448px;
    font-size: 18px;
    padding: 14px 0 13px 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 458px;
  }
`;
export const PhoneInput = styled.div`
  width: 280px;
  padding: 11px 0 12px 14px;
  background: ${baseColor.colors.mainBg};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin-bottom: 16px;
  transition: all 0.25s ease-in;
  &:focus,
  &:hover {
    border-color: ${baseColor.colors.orange};
    outline: none;
  }
  @media screen and (min-width: 768px) {
    width: 448px;
    padding: 14px 0 13px 32px;
    font-size: 18px;
  }
  @media screen and (min-width: 1280px) {
    width: 458px;
  }
`;
export const Button = styled.button`
  width: 100%;
  padding: 11px 0 12px 14px;
  text-align: center;
  color: ${baseColor.colors.white};
  background: ${baseColor.colors.orangeLight};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  margin: 8px 0 40px 0;
  transform: scale(1);
  transition: transform 0.5s;
  cursor: pointer;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.25s ease-in;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${baseColor.colors.orangeLight};
    transition: all 450ms;
  }
  :disabled {
    opacity: 0.5;
    cursor: auto;
    transform: none;
    transition: none;
  }
  :disabled:before {
    transform: none;
    transition: none;
  }
  @media screen and (min-width: 768px) {
    width: 458px;
    font-size: 20px;
  }
`;
export const BackButton = styled.button`
  width: 100%;
  padding: 11px 0 12px 14px;
  text-align: center;
  color: #000;
  background: ${baseColor.colors.white};
  border: 1px solid ${baseColor.colors.orangeLight};
  border-radius: 40px;
  margin: -24px 0 40px 0;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.5s;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.25s ease-in;
  :hover,
  :focus {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
  :hover:before {
    left: 100%;
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${baseColor.colors.orangeLight};
    transition: all 450ms;
  }
  @media screen and (min-width: 768px) {
    width: 458px;
    font-size: 20px;
  }
`;

export const ErrBox = styled.div`
  position: relative;
  white-space: nowrap;
  bottom: 0px;
  left: 15px;
  color: #e53e3e;
  font-family: 'Manrope';
  font-size: 12px;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 0.03em;
  margin-bottom: -16px;

  @media screen and (min-width: 768px) {
    left: 32px;
  }
`;

export const Div = styled.div`
  margin-bottom: 32px;
`;

export const StyledLink = styled(Link)`
  color: ${baseColor.colors.blue};
  margin-left: 4px;
  transition: all 0.25s ease-in;
  :hover,
  :focus {
    color: ${baseColor.colors.orangeLight};
  }
`;
export const BoxText = styled.div`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);
`;

// export const Background = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   z-index: -100;
//   background-image: url(${mobileBackground});
//   background-position: center bottom;
//   background-size: contain;
//   background-repeat: no-repeat;
//   height: 100vh;
//   @media screen and (min-width: 768px) {
//     background-image: url(${tabletBackground});
//   }
//   @media screen and (min-width: 1280px) {
//     background-image: url(${desktopBackground});
//   }
// `;

export const SpinerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
