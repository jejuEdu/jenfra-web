import styled from 'styled-components';

const FooterWrap = styled.footer`
  width: 100%;
  max-width: 768px;
  height: 6rem;
  background: #fff;
  border: 1px solid #f00;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;
const Footer = () => {
  return <FooterWrap>FooterWrap!</FooterWrap>;
};
export default Footer;
