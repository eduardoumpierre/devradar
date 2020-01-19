import styled from 'styled-components';

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
