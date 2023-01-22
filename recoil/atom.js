import { atom } from 'recoil';

const modalOpenState = atom({
  key: 'modalOpenState',
  default: false,
});
const modalTitleState = atom({
  key: 'modalTitleState',
  default: '',
});

export { modalOpenState, modalTitleState };
