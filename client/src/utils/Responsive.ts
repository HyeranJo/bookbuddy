import { css } from 'styled-components';

export const screenScale = {
  tablet: 1.8,
  laptop: 1.5,
  bigScreen: 1.2,
};

/** 반응형 분기점
 * 모바일 ~480px
 * 테블릿 ~820px
 * 노트북 ~1023px
 * 데스크탑 1024px~
 */
export const DeviceSize: DeviceProps = {
  tablet: 820,
  desktop: 1024,
  bigScreen: 1700,
};

interface DeviceProps {
  [key: string]: number;
}

/** 사용예시
 * import { DeviceQuery, screenScale } from '../../utils/Media';
 *  ${DeviceQuery.tablet`
      min-height: calc(100vh - (60px * ${screenScale.tablet}));
      width: calc(390px * ${screenScale.tablet})
    `}
 */
export const DeviceQuery = Object.keys(DeviceSize).reduce(
  (acc, label) => {
    acc[label] = (
      literals: TemplateStringsArray,
      ...placeholders: any[]
    ) => css`
      @media only screen and (max-width: ${DeviceSize[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `;
    return acc;
  },
  {} as Record<keyof typeof DeviceSize, any>,
);
