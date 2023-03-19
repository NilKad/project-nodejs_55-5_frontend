import { baseColor } from 'components/baseStyles/Variables.styled';

import styled from 'styled-components';
const Text = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0.07em;
  color: ${baseColor.colors.blackText};
`;

const AccentLetter = styled.span`
  color: ${baseColor.colors.orangeLight};
`;
export { Text, AccentLetter };