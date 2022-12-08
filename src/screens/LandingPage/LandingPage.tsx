import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Text, TouchableOpacity} from 'react-native';
import {Button} from '../../components';
import {
  Container,
  SubContainer,
  BottomContainer,
  FormContainer,
  Input,
  InfoTitle,
  InfoContainer,
  Info,
  RegisterContainer,
  Register,
} from './styles';
import {perfectSize} from '../../themes/screen';
import colors from '../../themes/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import createMockServer from '../../services/mirage';
import {
  fetchLoginDataRequest,
  fetchUserCurrentLocationRequest,
} from '../../store/actions';
import {useOnRequestSuccess, useRequestLoading} from 'react-redux-help-kit';
import {loginApiPayloadModel} from 'src/types';
export const LandingPage = ({navigation}) => {
  const dispatch = useDispatch();
  const [userId, setUserID] = useState('');
  const [navigateTo, setNavigateTo] = useState(false);

  const [password, setPassword] = useState('');
  const subContainerMarginTop = useRef(new Animated.Value(0)).current;
  const bottomContainerOpacity = useRef(new Animated.Value(1)).current;
  const backArrowLeft = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    createMockServer();
  }, []);
  useEffect(() => {
    if (navigateTo) {
      navigation.navigate('Home');
    }
  }, [navigateTo]);
  const onLogin = () => {
    Animated.parallel([
      Animated.timing(subContainerMarginTop, {
        toValue: perfectSize(-2400),
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(bottomContainerOpacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(backArrowLeft, {
        toValue: 10,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const {loading} = useRequestLoading(fetchLoginDataRequest);

  const loginWithUserNamePassword = useCallback(() => {
    setNavigateTo(false);

    dispatch(fetchUserCurrentLocationRequest());
  }, [dispatch]);

  useOnRequestSuccess(
    fetchUserCurrentLocationRequest,
    (data: loginApiPayloadModel) => {
      data.userConfigData.userId = userId;
      data.userConfigData.password = userId;
      dispatch(fetchLoginDataRequest(data));
    },
  );
  useOnRequestSuccess(fetchLoginDataRequest, () => {
    setUserID('');
    setPassword('');
    setNavigateTo(true);
  });
  const onBack = () => {
    Animated.parallel([
      Animated.timing(subContainerMarginTop, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(bottomContainerOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(backArrowLeft, {
        toValue: -50,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
    setUserID('');
    setPassword('');
  };
  return (
    <Container pointerEvents={loading ? 'none' : 'auto'}>
      <Animated.View
        style={{
          marginTop: subContainerMarginTop,
        }}>
        <SubContainer>
          <InfoTitle>RAKBANK</InfoTitle>
          <InfoContainer>
            <Info>
              Everything you love about Digital Banking in a smarter, simpler
              design
            </Info>
          </InfoContainer>
        </SubContainer>
      </Animated.View>
      <Animated.View
        style={{
          left: backArrowLeft,
          position: 'absolute',
          top: perfectSize(80),
          zIndex: 1,
        }}>
        <TouchableOpacity onPress={() => onBack()}>
          <Icon name="long-arrow-left" size={28} />
        </TouchableOpacity>
      </Animated.View>

      <RegisterContainer>
        <Register>Register</Register>
      </RegisterContainer>

      <Animated.View
        style={{
          opacity: bottomContainerOpacity,
        }}>
        <BottomContainer>
          <Button
            onPress={() => onLogin()}
            title="Login with User ID"
            background={true}
          />
          <Button title="Quick balance" top={'4%'} />
        </BottomContainer>
      </Animated.View>
      <Animated.View>
        <FormContainer>
          <Input
            placeholder="Enter user ID"
            onChangeText={userId => setUserID(userId)}
            value={userId}
            placeholderTextColor={colors.placeholderColor}
          />
          <Input
            placeholder="Enter Password"
            style={{
              marginTop: perfectSize(20),
            }}
            onChangeText={password => setPassword(password)}
            value={password}
            placeholderTextColor={colors.placeholderColor}
            secureTextEntry={true}
          />
          <Button
            background={true}
            title={'Submit'}
            onPress={() => loginWithUserNamePassword()}
            disabled={!userId || !password}
            top={'4%'}
            loading={loading}
          />
        </FormContainer>
      </Animated.View>
    </Container>
  );
};
