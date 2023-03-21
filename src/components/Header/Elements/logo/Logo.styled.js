import { baseColor } from 'components/baseStyles/Variables.styled';

import styled from 'styled-components';
const Text = styled.p`
  font-family: 'Poppins';
  font-weight: 700;
  font-style: normal;
  font-size: 28px;
  line-height: 42px;
  letter-spacing: 0.07em;
  color: ${baseColor.colors.blackText};
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

const AccentLetter = styled.span`
  color: ${baseColor.colors.orangeLight};
`;
export { Text, AccentLetter };
