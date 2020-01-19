import styled from 'styled-components';
import { boxStyle } from '../../style';

export const List = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  list-style: none;
`;

export const ListItem = styled.li`
  ${boxStyle}
  padding: 20px;
  width: 100%;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  flex-shrink: 0;
  height: 54px;
  width: 54px;
`;

export const Info = styled.div`
  margin-left: 10px;
`;

export const Name = styled.strong`
  color: #333;
  display: block;
  font-size: 16px;
`;

export const Techs = styled.span`
  color: #999;
  font-size: 13px;
  margin-top: 2px;
`;

export const Bio = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0;
`;

export const Link = styled.a`
  color: #8e4dff;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #5a2ea6;
  }
`;
