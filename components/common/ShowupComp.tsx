import { characterAnimation } from "utils/animationConfig";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface IShowupComp {
  customStyle?: object;
  isInView: boolean;
  delay: number;
  children: React.ReactNode | React.ReactNode[];
}

const ShowupComp: React.FC<IShowupComp> = ({
  customStyle,
  isInView,
  delay,
  children,
}) => {
  const ctrls = useAnimation();
  useEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    }

    if (!isInView) {
      ctrls.start("hidden");
    }
  }, [ctrls, isInView]);
  return (
    <motion.article
      style={{ ...customStyle }}
      initial="hidden"
      animate={ctrls}
      variants={characterAnimation(delay)}
    >
      {children}
    </motion.article>
  );
};

export default ShowupComp;
