import { ReactComponent as iconClose } from 'images/svg/icon_close.svg';

import styled from 'styled-components';

const MobileHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 20px 0px 20px;
  @media screen and (min-width: 768px) {
    padding: 24px 32px 0px 32px;
  }
`;
const IconClose = styled(iconClose)`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // @media screen and (max-width: 1279px) {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  // }
`;

export { MobileHeader, IconClose };
