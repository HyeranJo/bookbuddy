import { atom } from 'recoil';
import { getCookie } from '../utils/cookie';

export const AccessTokenAtom = atom({
  key: 'AccessTokenAtom',
  default: getCookie('accessToken'),
});
