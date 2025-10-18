"use client";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

function Animations() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  return (
    <div>
      {" "}
      <Typewriter
        words={["به سامانه اجاره و خرید ملک خوش آمدید"]}
        //  loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={70}
        delaySpeed={3000}
        animate={inView ? { opacity: 1, y: 0 } : {}}
      />
    </div>
  );
}

export default Animations;
