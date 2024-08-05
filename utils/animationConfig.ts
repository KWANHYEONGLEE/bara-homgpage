export const characterAnimation = (delay: number) => {
  let obj = {
    hidden: {
      opacity: 0,
      y: `2em`,
    },

    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
        delay: delay ?? 0,
      },
    },
  };
  return obj;
};
