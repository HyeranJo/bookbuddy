/** @email :@.필수, TDL 2또는 3자*/
export const emailRegExp =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

/** @Password :8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합 */
export const passwordRegExp = /^(?=.*[a-zA-z])(?=.*[0-9]).{8,16}$/;
