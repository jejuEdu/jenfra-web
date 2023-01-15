import React from 'react';
import QuestionBox from '.';

// controls 설정
export default {
  title: 'components/common/QuestionBox',
  question: '',
};

// default props 설정
const Template = (args) => <QuestionBox {...args} />;
export const Default = Template.bind({});
Default.args = {
  question: '',
};
