import * as S from './style';

const CustomModal = ({
  img = '',
  subject = '',
  desc = '',
  isOpen = false,
  closeBtn = false,
  setIsOpen = () => {},
  cancelName = '',
  cancelClick = () => {},
  okName = '',
  okClick = () => {},
}) => {
  return (
    <>
      {isOpen && (
        <S.ModalWrap isOpen={isOpen}>
          <S.Dimmed onClick={setIsOpen} />
          <S.Panel>
            {closeBtn && <S.CloseIcon src="" alt="닫기" />}
            {img && <S.ImgIcon src={img} />}
            {subject && <S.Title>{subject}</S.Title>}
            {desc && <S.Desc>{desc}</S.Desc>}
            {(cancelName || okName) && (
              <S.ButtonWrap>
                {cancelName && <S.CancelBtn onClick={cancelClick}>{cancelName}</S.CancelBtn>}
                {okName && <S.OkBtn onClick={okClick}>{okName}</S.OkBtn>}
              </S.ButtonWrap>
            )}
          </S.Panel>
        </S.ModalWrap>
      )}
    </>
  );
};

export default CustomModal;
