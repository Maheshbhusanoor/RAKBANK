import styled from 'styled-components/native';
interface Props {
  background?: boolean;
  top?: string;
}
export const Container = styled.TouchableOpacity<Props>`
  display: flex;
  height: 40;
  width: 100%
  background-color: ${props => (props.background ? 'black' : 'transparent')};
  border-radius: 30;
  align-items: center;
  justify-content: center;
  margin-top: ${props => (props.top ? props.top : '0')};
  opacity: ${props => (props.disabled ? 0.3 : 1)};;
`;

export const ButtonTitle = styled.Text<Props>`
  font-size: 20;

  color: ${props => (props.background ? 'white' : 'black')};
`;
