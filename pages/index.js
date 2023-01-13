//import Link from 'next/link';
import LayoutMain from '../layouts/LayoutMain';
import Main from '../components/Main';

export default function Home() {
  return (
    <LayoutMain color="#0dcaf0">
      {/*<div style={{ fontSize: '3rem' }}>
        <Link href="/survey">
          <a>설문페이지로 이동</a>
        </Link>
      </div>*/}
      <Main>
        <Main.Title />
        <Main.Image />
        <Main.Button />
      </Main>
    </LayoutMain>
  );
}
