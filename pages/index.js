//import Link from 'next/link';
import LayoutMain from '../layouts/LayoutMain';
import Main from '../components/main';
import { COLORS } from '../constant/colors';
import * as S from '../styles/style';

export default function Home() {
  return (
    <LayoutMain color={COLORS.mainbg}>
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
