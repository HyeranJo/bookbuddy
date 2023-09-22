import { atom } from 'recoil';
import { getCookie } from '../utils/ReactCookie';

export const AccessTokenAtom = atom({
  key: 'AccessTokenAtom',
  default: getCookie('accessToken'),
});
