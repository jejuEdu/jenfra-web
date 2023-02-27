import { useRecoilState, useRecoilValue } from 'recoil';
import CustomModal from '../components/common/CustomModal';
import { modalOpenState, modalTitleState, loadingSpinnerState } from '../recoil/atom';
import LoadingSpinner from '../components/common/LoadingSpinner';
import Script from 'next/script';

const LayoutBase = ({ children }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);
  const modalTitle = useRecoilValue(modalTitleState);
  const loadingSpinner = useRecoilValue(loadingSpinnerState);

  return (
    <div>
      {/* 광고 영역 */}
      <div style={{ textAlign: 'center' }}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1919598055512436"
          crossorigin="anonymous"
        ></Script>
        <ins
          class="adsbygoogle"
          style={{ display: 'inline-block', width: '320px', height: '100px' }}
          data-ad-client="ca-pub-1919598055512436"
          data-ad-slot="2044520891"
        ></ins>
        <Script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</Script>
      </div>
      <div>{children}</div>

      <CustomModal
        isOpen={modalOpen}
        subject={modalTitle}
        okName="확인"
        okClick={() => setModalOpen(!modalOpen)}
      />

      {loadingSpinner && <LoadingSpinner />}
    </div>
  );
};

export default LayoutBase;
