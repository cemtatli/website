import React from "react";

const CV = () => {
  return (
    <section className="h-screen-fit w-full">
      <iframe src={process.env.CV_LINK} title="CV" className="h-full w-full" />
    </section>
  );
};

export default CV;
