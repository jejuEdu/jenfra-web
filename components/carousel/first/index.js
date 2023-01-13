import { Wrapper } from './style';

function First({ next }) {
  return (
    <Wrapper>
      <h1>첫번째 페이지</h1>
      <button onClick={next}>선택지1</button>
      <button onClick={next}>선택지2</button>
      <button onClick={next}>선택지3</button>
      <button onClick={next}>선택지4</button>
    </Wrapper>
  );
}

export default First;
