import styled from 'styled-components';

export const Main = styled.div``;

export const Title = styled.div`
  padding: 1rem;
  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 2.6rem;
    line-height: 141%;
  }
`;

export const SubTitle = styled.p`
  color: white;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 141%;
  text-align: center;
  color: #ffffff;
  padding: 0 1rem;
  margin: 1rem auto 0;

  b {
    font-weight: bold;
  }
`;

export const MainImage = styled.div`
  width: 100%;
  max-width: 39rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  .main-img {
    width: 15.7rem;
    margin-top: 5rem;
    img {
      width: 15.7rem;
    }
  }

  .animation-img {
    width: 7rem;
    height: 10rem;
    animation: swing ease-in-out 1s infinite alternate-reverse;

    img {
      width: 100%;
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
  width: 28.6rem;
  height: 5rem;
  font-weight: 800;
  font-size: 2rem;
  line-height: 141%;
  color: #faf6f2;
  border-radius: 5rem;
  background-color: black;
  border: none;
  cursor: pointer;
`;

export const Count = styled.p`
  font-size: 1.5rem;
  padding: 2rem 0 0;
  b {
    font-weight: bold;
  }
`;
