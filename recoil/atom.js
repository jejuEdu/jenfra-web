import { atom } from 'recoil';
import { v1 } from 'uuid';

const modalOpenState = atom({
  key: `modalOpenState/${v1()}`,
  default: false,
});
const modalTitleState = atom({
  key: `modalTitleState/${v1()}`,
  default: '',
});
const loadingSpinnerState = atom({
  key: `loadingSpinnerState${v1()}`,
  default: false,
});

const surveyQuestionBase = atom({
  key: `surveyQuestionBase/${v1()}`,
  default: {
    '2023년 새해, 올해 이것 만큼은 꼭 해보고 싶다!': '',
    '목표를 이루기 위해 내가 가장 먼저 하는 것은?': '',
    '만약, 내 목표를 누군가와 함께 이룰 수 있다면, 어떤 사람들과 함께 하고 싶나요?': '',
    '이럴 때 의지가 불타오른다.': '',
    '그룹 활동에서 내 성향은?': '',
    '나에게 이런 성장 뱃지가 주어진다면?': '',
    '모임을 만들고 싶을 때, 이런게 허들이다!': '',
  },
});

const surveyValueState = atom({
  key: `surveyValue/${v1()}`,
  default: [],
});

export {
  modalOpenState,
  modalTitleState,
  loadingSpinnerState,
  surveyQuestionBase,
  surveyValueState,
};
