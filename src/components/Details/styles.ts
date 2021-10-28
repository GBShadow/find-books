import styled from 'styled-components';

export const Container = styled.div``;

export const BackButtonContainer = styled.div`
  position: relative;
  max-width: 700px;
  margin: 0 auto;

  > button {
    position: absolute;
    top: 55px;
    left: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Header = styled.header`
  height: 282px;
  background-color: var(--yellow);
  border-bottom-right-radius: 100px;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/background-details.png');
  background-repeat: no-repeat;
  background-position: right;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  div {
    width: 150px;
    height: 230px;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: -30px;
    background-color: var(--gray-100);
    gap: 1.6rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

    img {
      width: 150px;
      height: 230px;
    }
  }
`;

export const Content = styled.div`
  max-width: 700px;
  margin: 0 auto;
  margin-top: 6.7rem;
  padding: 0 2rem 5rem;

  h1 {
    margin-bottom: 0.7rem;
    font-size: 2.4rem;

    span {
      font-weight: 400;
    }
  }

  strong {
    color: var(--red);
    font-weight: 500;
  }
`;

export const DescriptionContainer = styled.div`
  height: 275px;
  overflow: auto;
  margin-top: 1rem;

  @media screen and (min-width: 900px) {
    height: 500px;
  }
`;

export const Description = styled.div`
  font-size: 1.4rem;
  line-height: 150%;
  color: var(--gray-400);
  padding-bottom: 1rem;
`;

export const Menu = styled.section`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 2px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

  button {
    padding: 2rem;
    background-color: var(--white);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  button + button {
    &::before {
      content: '';
      position: absolute;
      display: block;
      left: 0;
      height: 1.6rem;
      width: 2px;
      background-color: var(--gray-100);
    }
  }
`;
