//import Link from 'next/link';
import LayoutMain from '../layouts/LayoutMain';
import Main from '../components/main';
import { COLORS } from '../constant/colors';

export default function Home() {
  return (
    <LayoutMain color={COLORS.bg}>
      <Main>
        <Main.Title />
        <Main.Image />
        <Main.Button />
      </Main>
    </LayoutMain>
  );
}
