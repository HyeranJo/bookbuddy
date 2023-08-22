/** @id :한글, 영문 가능, 띄어쓰기 불가*/
export const idRegExp = /^[a-zA-Z0-9ㄱ-힣][a-zA-Z0-9ㄱ-힣]*$/;

/** @Password :8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합 */
export const passwordRegExp = /^(?=.*[a-zA-z])(?=.*[0-9]).{8,16}$/;
