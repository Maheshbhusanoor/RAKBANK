import styled from 'styled-components/native';
import {perfectSize} from '../../themes/screen';
export const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: ${perfectSize(80)};
  left: ${perfectSize(10)};
`;

export const TextItemContainer = styled.View`
  flex-direction: row;
  width: 90%;
  align-items: center;
  /* justify-content: space-between; */
  margin-bottom: 20;
  border-radius: 3;
  border-width: 1;
  padding-top: 2%;
  padding-bottom: 2%;
`;

export const Item = styled.Text`
  font-size: 15;
  margin-left: 3%;
`;
