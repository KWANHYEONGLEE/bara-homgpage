/** 원본 캔버스와, 그 안에서 실제 그림이 차지하는 영역(px) */
export type Crop = {
  canvasW: number;
  canvasH: number;
  x: number;
  y: number;
  w: number;
  h: number;
};

/**
 * 캔버스로 실측한 크롭 좌표.
 *
 * 같은 이미지를 여러 화면에서 쓰는데 좌표를 각 컴포넌트에 적어 두면,
 * 원본이 교체됐을 때 한쪽만 고쳐지고 다른 쪽은 깨진 채로 남는다.
 * (실제로 solution_3 가 교체됐을 때 홈만 고쳐지고 사업소개가 깨졌다)
 * 그래서 좌표는 여기서만 관리한다.
 */
export const imageCrops = {
  /** 심바키즈 서비스 화면 */
  solution1: {
    crop: { canvasW: 1121, canvasH: 937, x: 264, y: 262, w: 592, h: 409 },
  },
  /** AI 부모코칭 서비스 화면 */
  solution2: {
    crop: { canvasW: 1121, canvasH: 1080, x: 264, y: 262, w: 592, h: 553 },
  },
  /**
   * 바라 임팩트 구조도.
   * 원본이 이미 빠듯하게 잘려 있어 좌우 여백이 14px 뿐이라,
   * 기본 여백 4%(16.6px)로는 캔버스를 넘어가 가장자리에 빈 띠가 생긴다.
   */
  solution3: {
    crop: { canvasW: 454, canvasH: 466, x: 14, y: 40, w: 416, h: 384 },
    pad: 0.03,
  },
} satisfies Record<string, { crop: Crop; pad?: number }>;
