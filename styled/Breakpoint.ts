/**
 * This js contains the breakpoint variables for responsive stylings
 */
const size = {
  xsm: "374px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

export const device = {
  xsm: `(max-width: ${size.xsm})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
};

//Usage Example
// @media ${device.laptop} {
//     max-width: 800px;
// }
