import Styled_Signup from './Signup.style';
import Styled_Sign from './Sign.style';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { emailRegExp, passwordRegExp } from '../../utils/RegExp';
import RedButton from '../../components/buttons/RedButton';
import Input from '../../components/input/Input';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IFormData {
  email: string;
  password: string;
  password_confirm: string;
}

const Signup = () => {
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const navigate = useNavigate();

  const onDuplicate = () => {
    const idValue = getValues('email');
    // 가져온 값을 서버로 연결해서 중복된 여부 확인 성공하면 true 실패하면 초기화
    return axios
      .post(
        'https://29a6-210-106-53-186.ngrok-free.app/duplicate/email',
        idValue,
        {
          headers: {
            'Content-Type': 'application/json',
            // 'ngrok-skip-browser-warning': true,
          },
        },
      )
      .then(response => {
        if (response.status === 200) {
          // 사용가능한 email
          if (response.data === false) {
            setIsDuplicate(true);
            // 지금 작성한 email값을 저장
            setEmailValue(idValue);
            // 사용 불가능한 email
            alert('중복확인 성공');
          } else if (response.data === true) {
            alert('이미 사용중인 이메일입니다.');
            setIsDuplicate(false);
          }
        }
      })
      .catch(() => {
        alert('올바른 형식이 아닙니다.');
      });
  };

  function signupUser(userData: IFormData) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password_confirm, ...otherData } = userData;
    return axios
      .post('https://29a6-210-106-53-186.ngrok-free.app/signup', otherData, {
        headers: {
          'Content-Type': 'application/json',
          // 'ngrok-skip-browser-warning': true,
        },
      })
      .then(response => {
        response.data;
        alert('[회원가입 성공] 로그인 페이지로 이동합니다');
      })
      .catch(err => {
        alert(`erro: ${err}`);
      });
  }
  const { mutate } = useMutation(signupUser);

  const onSubmit: SubmitHandler<IFormData> = data => {
    const idValue = getValues('email');
    // 데이터를 서버에 전달하는 함수 필요 중복확인 버튼 눌렀는지 여부를 확인하여 분기
    if (isDuplicate === true && emailValue === idValue) {
      mutate(data);
    } else {
      alert('중복확인해주세요');
    }
    navigate('/signin');
  };

  return (
    <>
      <Styled_Sign.Main>
        <Styled_Sign.Title>회원가입</Styled_Sign.Title>
        <Styled_Signup.Wrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Styled_Sign.Container>
              {/* onSubmit에 영향 주는거 막기 */}
              <Styled_Signup.Duplicate
                onClick={e => {
                  e.preventDefault();
                  onDuplicate();
                }}
              >
                중복확인
              </Styled_Signup.Duplicate>
              <Styled_Sign.Lable>이메일</Styled_Sign.Lable>
              <Controller
                control={control}
                name="email"
                /* Controller를 사용할 때 초기에 값이 없으면 undefined로서 uncontrolled 상태가 되기 때문에 waring메시지가 뜸 따라서 defaultValue를 설정해서 해결*/
                defaultValue=""
                rules={{
                  required: '이메일을 입력해주세요.',
                  pattern: {
                    value: emailRegExp,
                    message: '이메일형식으로 작성해주세요. ex)test@test.com ',
                  },
                }}
                render={({ field }) => {
                  return (
                    <Input
                      type="text"
                      placeholder="이메일"
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
            <Styled_Sign.Container>
              <Styled_Sign.Lable>비밀번호 확인</Styled_Sign.Lable>
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
              <Styled_Sign.ErrorMsg>
                {errors?.password_confirm?.message}
              </Styled_Sign.ErrorMsg>
            </Styled_Sign.Container>
            <Styled_Signup.SubmitBtn>
              <RedButton name="회원가입" width={415} height={60} />
            </Styled_Signup.SubmitBtn>
          </form>
        </Styled_Signup.Wrapper>
      </Styled_Sign.Main>
    </>
  );
};

export default Signup;
