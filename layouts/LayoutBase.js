import { useRecoilState } from 'recoil';
import CustomModal from '../components/common/CustomModal';
import { modalOpenState, modalTitleState } from '../recoil/atom';

const LayoutBase = ({ children }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalOpenState);
  const [modalTitle, setModalTitle] = useRecoilState(modalTitleState);
  return (
    <div>
      <div>{children}</div>

      <CustomModal
        isOpen={modalOpen}
        subject={modalTitle}
        okName="확인"
        okClick={() => setModalOpen(!modalOpen)}
      />
    </div>
  );
};

export default LayoutBase;
