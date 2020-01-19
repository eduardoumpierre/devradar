import styled, { css } from 'styled-components';

export const boxStyle = css`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
`;

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
  padding: 50px 25px;

  @media screen and (min-width: 710px) {
    flex-direction: row;
    padding: 60px 30px;
  }
`;

export const Aside = styled.aside`
  ${boxStyle}
  padding: 30px 20px;
  width: 100%;

  @media screen and (min-width: 710px) {
    width: 320px;
  }
`;

export const AsideTitle = styled.strong`
  display: block;
  color: #333;
  font-size: 20px;
  text-align: center;
`;

export const Main = styled.main`
  flex: 1;
  margin-top: 25px;
  width: 100%;

  @media screen and (min-width: 710px) {
    margin: 0 0 0 30px;
  }
`;
