import { useRecoilState, useRecoilValue } from 'recoil';
import CustomModal from '../components/common/CustomModal';
import { modalOpenState, modalTitleState, loadingSpinnerState } from '../recoil/atom';

const LayoutBase = ({ children }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);
  const modalTitle = useRecoilValue(modalTitleState);
  const loadingSpinner = useRecoilValue(loadingSpinnerState);

  return (
    <div>
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
