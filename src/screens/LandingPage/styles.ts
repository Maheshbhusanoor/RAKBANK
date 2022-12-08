import styled from 'styled-components/native';
import {perfectSize} from '../../themes/screen';
export const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 10%;
`;
interface Props {
  background?: boolean;
  top?: string;
}
export const TopContainer = styled.Text<Props>`
  height: 40%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const SubContainer = styled.View`
    height: 75%
    width: 100%;
    background-color: transparent;
`;
export const InfoContainer = styled.View`
  width: 50%;
`;
export const Info = styled.Text`
  fon-size: ${perfectSize(18)};
  margin-top: 2%;
`;

export const InfoTitle = styled.Text`
  font-size: ${perfectSize(25)};
  margin-top: 45%;
  font-weight: bold;
`;

export const BottomContainer = styled.View`
  height: 40%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.View`
  /* flex: 1; */
  height: 50%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  height: ${perfectSize(60)};
  border-radius: ${perfectSize(7)};
  width: 100%;
  background-color: white;
  font-size: ${perfectSize(19)};
  padding-left: 3%;
`;
export const RegisterContainer = styled.View`
  /* padding: 6%; */
  border-width: 1;
  height: 6%;
  width: 30%;
  align-items: center;
  justify-content: center;
  border-radius: 4;
  position: absolute;
  top: ${perfectSize(80)};
  right: 10;
`;
export const Register = styled.Text`
  font-size: 18;
`;
