import { motion } from "framer-motion";

const RadarRings = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Blue radar rings */}
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={`blue-${i}`}
          className="absolute rounded-full border"
          style={{
            top: "50%",
            left: "50%",
            width: 200,
            height: 200,
            marginTop: -100,
            marginLeft: -100,
            borderColor: `rgba(59, 130, 246, ${0.6 - i * 0.1})`,
          }}
          animate={{
            scale: [0.5 + i * 0.2, 2.5 + i * 0.3],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Purple radar rings offset */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={`purple-${i}`}
          className="absolute rounded-full border"
          style={{
            top: "30%",
            left: "70%",
            width: 160,
            height: 160,
            marginTop: -80,
            marginLeft: -80,
            borderColor: `rgba(168, 85, 247, ${0.5 - i * 0.1})`,
          }}
          animate={{
            scale: [0.5, 2.2 + i * 0.2],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Ambient glow blobs */}
      <div
        className="absolute rounded-full"
        style={{
          top: "20%",
          left: "15%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          bottom: "20%",
          right: "10%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
};

export default RadarRings;
