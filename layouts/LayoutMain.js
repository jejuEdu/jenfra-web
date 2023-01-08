import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LayoutMainWrap = styled.main`
  min-height: 100vh;
  padding: 6rem 0;
`;

const LayoutMain = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutMainWrap className="responsive">{children}</LayoutMainWrap>
      <Footer />
    </>
  );
};

export default LayoutMain;
