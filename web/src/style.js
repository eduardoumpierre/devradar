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

export const Form = styled.form`
  margin-top: 30px;
`;

export const InputBlock = styled.div`
  & + & {
    margin-top: 20px;
  }
`;

export const Label = styled.label`
  color: #acacac;
  display: block;
  font-size: 14px;
  font-weight: 700;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #eee;
  color: #666;
  font-size: 14px;
  height: 32px;
  width: 100%;
`;

export const InputGroup = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;

  ${InputBlock} {
    margin-top: 0;
  }
`;

export const Button = styled.button`
  background-color: #7d40e7;
  border: none;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  margin-top: 30px;
  padding: 15px 20px;
  transition: background-color 300ms ease;
  width: 100%;

  &:hover {
    background-color: #6931ca;
  }
`;

export const Main = styled.main`
  flex: 1;
  margin-top: 25px;
  width: 100%;

  @media screen and (min-width: 710px) {
    margin: 0 0 0 30px;
  }
`;