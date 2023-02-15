//import Link from 'next/link';
import LayoutMain from '../layouts/LayoutMain';
import Main from '../components/main';
import { COLORS } from '../constant/colors';
import * as S from '../styles/style';
import CustomHead from '../components/common/CustomHead';

export default function Home() {
  return (
    <LayoutMain color={COLORS.mainbg}>
      <CustomHead
        title="Jenfra:: 제주도민 성장을 위한 첫 걸음"
        description="나만의 성장 라이프를 공유해주세요!"
        url={window.location.origin}
        image="/images/og-img-home.png"
      />
      <Main>
        <S.Header>
          <Main.Logo />
        </S.Header>
        <div>
          <Main.Title />
          <Main.SubTitle />
          <Main.Image />
        </div>
      </Main>
      <S.Footer>
        <Main.Button />
        <Main.Count />
      </S.Footer>
    </LayoutMain>
  );
}
