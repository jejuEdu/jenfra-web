import { Wrapper } from './style';

function Second({ next }) {
  return (
    <Wrapper className="wrapper">
      <h1>두번째 페이지</h1>
      <button onClick={next}>선택지1</button>
      <button onClick={next}>선택지2</button>
      <button onClick={next}>선택지3</button>
      <button onClick={next}>선택지4</button>
    </Wrapper>
  );
}

export default Second;
