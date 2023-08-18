import Styled_Signup from './Signup.style';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { idRegExp, passwordRegExp } from '../../utils/RegExp';
import Header from '../../components/header/Header';
import Nav from '../../components/nav/Nav';
import RedButton from '../../components/buttons/RedButton';
import Input from '../../components/input/Input';

interface IFormData {
  id: string;
  password: string;
  password_confirm: string;
}

const Signup = () => {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = data => {
    // 데이터를 서버에 전달하는 함수 필요
    // 중복확인 버튼 눌렀는지 여부를 확인하여 분기
    console.log(data);
  };

  const onDuplicate = () => {
    const idValue = getValues('id');
    // 가져온 값을 서버로 연결해서 중복된 여부 확인
    console.log(idValue);
  };

  return (
    <>
      <Header />
      <Nav />
      <Styled_Signup.Main>
        <Styled_Signup.Title>회원가입</Styled_Signup.Title>
        <Styled_Signup.Wrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Styled_Signup.Container>
              {/* onSubmit에 영향 주는거 막기 */}
              <Styled_Signup.Duplicate
                onClick={e => {
                  e.preventDefault();
                  onDuplicate();
                }}
              >
                중복확인
              </Styled_Signup.Duplicate>
              <Styled_Signup.Lable>아이디</Styled_Signup.Lable>
              <Controller
                control={control}
                name="id"
                /* Controller를 사용할 때 초기에 값이 없으면 undefined로서 uncontrolled 상태가 되기 때문에 waring메시지가 뜸 따라서 defaultValue를 설정해서 해결*/
                defaultValue=""
                rules={{
                  required: '아이디를 입력해주세요.',
                  pattern: {
                    value: idRegExp,
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
              <Styled_Signup.ErrorMsg>
                {errors?.id?.message}
              </Styled_Signup.ErrorMsg>
            </Styled_Signup.Container>
            <Styled_Signup.Container>
              <Styled_Signup.Lable>비밀번호</Styled_Signup.Lable>
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
              <Styled_Signup.ErrorMsg>
                {errors?.password?.message}
              </Styled_Signup.ErrorMsg>
            </Styled_Signup.Container>
            <Styled_Signup.Container>
              <Styled_Signup.Lable>비밀번호 확인</Styled_Signup.Lable>
              <Controller
                control={control}
                name="password_confirm"
                defaultValue=""
                rules={{
                  required: '비밀번호를 입력해주세요.',
                  pattern: {
                    value: passwordRegExp,
                    message: '비밀번호가 일치하지 않습니다.',
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
              <Styled_Signup.ErrorMsg>
                {errors?.password_confirm?.message}
              </Styled_Signup.ErrorMsg>
            </Styled_Signup.Container>
            <Styled_Signup.SubmitBtn>
              <RedButton name="회원가입하기" width={415} height={60} />
            </Styled_Signup.SubmitBtn>
          </form>
        </Styled_Signup.Wrapper>
      </Styled_Signup.Main>
    </>
  );
};

export default Signup;
