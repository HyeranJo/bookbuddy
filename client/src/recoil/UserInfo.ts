import { atom } from 'recoil';
import { getCookie } from '../utils/Cookie';

export const AccessTokenAtom = atom({
  key: 'AccessTokenAtom',
  default: getCookie('accessToken'),
});
