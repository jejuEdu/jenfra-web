import React from 'react';
import QuestionBox from '.';

// controls 설정
export default {
  title: 'components/common/AnswerBox',
  subject: '타이틀',
  desc: '',
  img: '../../../assets/main.png',
};

// default props 설정
const Template = (args) => <QuestionBox {...args} />;
export const Default = Template.bind({});
Default.args = {
  subject: '타이틀',
  desc: '',
  img: '../../../assets/main.png',
};
