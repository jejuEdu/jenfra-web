import styled from 'styled-components';

export const Main = styled.div`
  display: flex; /* flex 셋팅 */
  justify-content: center; /* 가로, 세로 가운데 정렬 */
  align-items: center; /* 위, 아래 가운데 정렬 */
  flex-direction: column; /* 아이템이 흐르는 방향을 위아래로 */
`;

export const Title = styled.div`
  padding: 2rem;
  h1 {
    text-align: center;
    font-size: 4rem;
    line-height: 5rem;
  }
`;

export const SubTitle = styled.p`
  color: white;
  font-size: 2rem;
  padding: 0 2rem;
  margin-bottom: 40px;
  b {
    font-weight: bold;
  }
`;

export const MainImage = styled.div`
  @media all and (max-height: 800px) {
    height: 40vh;
  }
  @media all and (min-height: 800px) {
    height: 25vh;
  }
  @media all and (min-height: 1300px) {
    height: 10vh;
  }

  .animation-img {
    animation: swing ease-in-out 1s infinite alternate-reverse;
    /* transform-origin: center -20px; 액자회전 */
    position: relative;
    width: 100px;
    @media all and (max-height: 800px) {
      left: 50vw;
      top: -50vh;
    }
    @media all and (min-height: 800px) {
      left: 50vw;
      top: -40vh;
    }
    @media all and (min-height: 1000px) {
      left: 25vw;
      top: -30vh;
    }

    @keyframes swing {
      0% {
        transform: rotate(-45deg);
      }
      100% {
        transform: rotate(45deg);
      }
    }
  }
`;

export const Button = styled.button`
  height: 10vh;
  font-size: 2rem;
  margin-top: 5vh;
  border-radius: 5rem;
  width: 80vw;
  background-color: black;
  color: white;
  cursor: pointer;
  @media all and (max-height: 800px) {
    height: 10vh;
  }
  @media all and (min-height: 800px) {
    height: 8vh;
  }
  @media all and (min-height: 1000px) {
    height: 5vh;
  }
`;

export const Count = styled.p`
  font-size: 2rem;
  padding: 2rem 0;
  b {
    font-weight: bold;
  }
`;
