import Link from 'next/link';
import LayoutSurvey from '../layouts/LayoutSurvey';

const Survey = () => {
  return (
    <LayoutSurvey>
      설문페이지
      <br />
      <Link href="/">
        <a>홈으로 이동</a>
      </Link>
    </LayoutSurvey>
  );
};

export default Survey;
