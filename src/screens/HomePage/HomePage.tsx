import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {locationDataSelector, loginDataSelector} from '../../store/selectors';
import {Container, TextItemContainer, Item, BackButton} from './styles';
export const HomePage = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  const result = useSelector(loginDataSelector);
  const location = useSelector(locationDataSelector);
  return (
    <Container>
      <BackButton onPress={() => goBack()}>
        <Icon name="long-arrow-left" size={28} />
      </BackButton>
      <TextItemContainer>
        <Item> Hello, </Item>
        <Item>{result.loginData.firstName} Welcome Back!!!!</Item>
      </TextItemContainer>
      <TextItemContainer>
        <Item>You are logged in on {location.userConfigData.deviceName} </Item>
      </TextItemContainer>
      <TextItemContainer>
        <Item>Last Logged in :</Item>
        <Item>{result.loginData.loggedInTimeStamp}</Item>
      </TextItemContainer>
    </Container>
  );
};
