import styled from 'styled-components';
import { COLORS } from '../../../constant/colors';

const QuestionComponent = styled.div`
  display: inline-block;
  width: fit-content;
  height: 2.5rem;
  padding: 0 1.45rem;
  background: ${(props) => (props.index % 2 === 1 ? '#FFFFFF' : COLORS.point)};
  border-radius: 2rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 155%;
  display: flex;
  align-items: center;
  color: ${(props) => (props.index % 2 === 1 ? '#000000' : '#ffffff')};
  margin-bottom: 0.8rem;
`;

const ResultQuestionCard = ({ index = null }) => {
  return (
    <div>
      <QuestionComponent index={index}>Question {index}</QuestionComponent>
    </div>
  );
};

export default ResultQuestionCard;
