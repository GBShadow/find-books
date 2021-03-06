import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

export const Welcome = styled.header`
  margin-bottom: 3rem;

  h1 {
    font-size: 2.4rem;
    font-family: 'SFProDisplay400';
    font-weight: 400;

    span {
      color: var(--red);
      font-family: 'SFProDisplay500';
      font-weight: 500;
    }
  }
`;

export const Section = styled.section`
  width: 100%;
  position: relative;

  > img {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }

  & + & {
    margin-top: 3rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 1.8rem;
    font-family: 'SFProDisplay500';
    font-weight: 500;
  }

  a {
    color: var(--blue-100);
    transition: all 0.4s;
    position: relative;
    z-index: 2;

    &:active {
      opacity: 0.3;
    }

    &:hover {
      color: ${darken(0.2, `#4ABDF1`)};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  overflow-x: auto;
  padding-right: 6rem;
`;

export const Content2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
`;

export const Box = styled.div`
  min-width: 272px;
  width: 272px;
  height: 139px;
  padding: 1.5rem 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  color: var(--white);
  background-color: var(--blue-200);
  border-radius: 5px;
  position: relative;

  &.box2 {
    background-color: var(--purple);
    height: 127px;
    padding: 1.5rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  z-index: 5;

  > strong {
    font-size: 2.7rem;
  }

  span {
    margin-bottom: auto;
    font-size: 1.4rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    p {
      font-size: 1rem;
    }
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const BookImage = styled.div`
  a {
    display: flex;
    justify-content: flex-end;
    position: relative;
  }
`;

export const FormsImage = styled.div`
  position: absolute;
  left: 5px;
  top: -10px;
  width: 100%;
  height: 109px;
  background-image: url('/forms.png');
  background-repeat: no-repeat;
`;

export const Cover = styled.div`
  width: 73px;
  height: 109px;
  border-radius: 5px;
  background-color: var(--gray-100);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: var(--black-100);
  font-size: 1.2rem;

  &.cover2 {
    width: 73px;
    height: 100px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CurrentlyBook = styled.div`
  position: relative;
  min-width: 88px;
  width: 88px;
  height: 130px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 5;

  @media screen and (min-width: 700px) {
    width: 148px;
    height: 190px;
  }

  > a {
    position: absolute;
    min-width: 88px;
    height: 130px;
    background-color: var(--gray-100);
    z-index: 22;

    @media screen and (min-width: 700px) {
      width: 148px;
      height: 190px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const InfoBook = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  background-color: var(--green);
  overflow: hidden;

  @media screen and (min-width: 700px) {
    height: 150px;
  }

  > img {
    position: absolute;
    right: -20px;
    top: -20px;
  }

  > div {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 0 3px 3px 0;

    strong {
      font-size: 2rem;
      font-family: 'Playfair Display';
      letter-spacing: 1px;
    }

    span {
      margin-bottom: auto;
      font-size: 1rem;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 0.4rem;

      p {
        font-size: 1rem;

        span {
          font-weight: 700;
          color: var(--red);
        }
      }
    }
  }
`;

export const LastVideos = styled.div`
  display: flex;
  gap: 1rem;
  overflow: auto;
  padding-bottom: 1rem; ;
`;

export const Video = styled.div`
  min-width: 320px;
  width: 400px;
  margin-top: 1.5rem;
  background-color: var(--white);
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
`;

export const ImageVideo = styled.div`
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const InfoVideo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: var(--gray-300);
  padding: 1.2rem;

  strong {
    color: var(--black-100);
    font-size: 1.2rem;
  }

  ul {
    font-size: 0.8rem;
    display: flex;

    li + li {
      margin-left: 5rem;
    }

    li:first-child {
      list-style: none;
    }
  }

  p {
    font-size: 1rem;
  }
`;
