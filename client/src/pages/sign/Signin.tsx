import Styled_Signin from './Signin.style';
import Styled_Sign from './Sign.style';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { emailRegExp, passwordRegExp } from '../../utils/RegExp';
import RedButton from '../../components/buttons/RedButton';
import Input from '../../components/input/Input';
import { useMutation } from 'react-query';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { setCookie } from '../../utils/cookie';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

interface IFormData {
  email: string;
  password: string;
  password_confirm: string;
}

const Signin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const navigate = useNavigate();

  const signinUser = (userData: IFormData) => {
    return axios
      .post(`${SERVER_HOST}/signin`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        const accessToken = response.headers['authorization'];
        if (response.status === 200) {
          setCookie(
            'userInfo',
            JSON.stringify({
              email: response.data.email,
            }),
            { path: '/' },
          );
          setCookie('accessToken', `${accessToken}`, {
            path: '/',
            sameSite: 'strict',
            secure: true,
          });
          setCookie('refreshToken', response.data.refreshToken, {
            path: '/',
            sameSite: 'strict',
            secure: true,
          });
          alert('[로그인 성공] 메인 페이지로 이동합니다');
          navigate('/');
          window.location.reload();
        }
      })
      .catch(err => {
        alert(`${err}`);
      });
  };
  const { mutate } = useMutation(signinUser);

  const onSubmit: SubmitHandler<IFormData> = data => {
    mutate(data);
  };

  return (
    <>
      <Styled_Sign.Main>
        <Styled_Sign.Title>로그인</Styled_Sign.Title>
        <Styled_Signin.Wrapper>
          <Styled_Signin.Form onSubmit={handleSubmit(onSubmit)}>
            <Styled_Signin.InputContainer>
              <Styled_Sign.Container>
                <Styled_Sign.Lable>아이디</Styled_Sign.Lable>
                <Controller
                  control={control}
                  name="email"
                  /* Controller를 사용할 때 초기에 값이 없으면 undefined로서 uncontrolled 상태가 되기 때문에 waring메시지가 뜸 따라서 defaultValue를 설정해서 해결*/
                  defaultValue=""
                  rules={{
                    required: '아이디를 입력해주세요.',
                    pattern: {
                      value: emailRegExp,
                      message: '특수문자, 띄어쓰기는 사용하실 수 없습니다.',
                    },
                  }}
                  render={({ field }) => {
                    return (
                      <Input
                        type="text"
                        placeholder="아이디"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    );
                  }}
                />
                <Styled_Sign.ErrorMsg>
                  {errors?.email?.message}
                </Styled_Sign.ErrorMsg>
              </Styled_Sign.Container>
              <Styled_Sign.Container>
                <Styled_Sign.Lable>비밀번호</Styled_Sign.Lable>
                <Controller
                  control={control}
                  name="password"
                  defaultValue=""
                  rules={{
                    required: '비밀번호를 입력해주세요.',
                    pattern: {
                      value: passwordRegExp,
                      message: '영문, 숫자, 8 ~ 16자 입력해주세요.',
                    },
                  }}
                  render={({ field }) => {
                    return (
                      <Input
                        type="password"
                        placeholder="비밀번호"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    );
                  }}
                />
                <Styled_Sign.ErrorMsg>
                  {errors?.password?.message}
                </Styled_Sign.ErrorMsg>
              </Styled_Sign.Container>
            </Styled_Signin.InputContainer>
            <Styled_Signin.SubmitBtn>
              <RedButton name="로그인" width={180} height={180} />
            </Styled_Signin.SubmitBtn>
          </Styled_Signin.Form>
        </Styled_Signin.Wrapper>
        <Styled_Signin.TextWrapper>
          <Styled_Signin.Text>아직 아이디가 없으신가요?</Styled_Signin.Text>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Styled_Signin.Signup>회원가입하기</Styled_Signin.Signup>
          </Link>
        </Styled_Signin.TextWrapper>
      </Styled_Sign.Main>
    </>
  );
};

export default Signin;
