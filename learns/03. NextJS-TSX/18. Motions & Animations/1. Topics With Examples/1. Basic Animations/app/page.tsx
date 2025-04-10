import * as motion from "motion/react-client";

const BasicAnimations = () => {
  return (
    <div>
      <motion.div
        className="box"
        style={{ background: "red" }}
        animate={{ x: 60 }}
      />
      <motion.div className="box" animate={{ x: 40 }} />
      <motion.div
        className="box"
        style={{ background: "green" }}
        animate={{ x: 20 }}
      />
    </div>
  );
};

export default BasicAnimations;
