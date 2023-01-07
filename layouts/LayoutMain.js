import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LayoutMainWrap = styled.div``;
const CustomMain = styled.main`
  width: 100%;
  background: #fafafa;
`;

const LayoutMain = ({ children }) => {
  return (
    <LayoutMainWrap className="responsive">
      <Header />
      <CustomMain>{children}</CustomMain>
      <Footer />
    </LayoutMainWrap>
  );
};

export default LayoutMain;
