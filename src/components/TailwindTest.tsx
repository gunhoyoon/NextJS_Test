import React from "react";

const TailwindTest = () => {
  return (
    <>
      <strong className="p-10">스트롱 윤건호입니다</strong>
      <div className="h-[900px]">
        <p className="my-10">피 윤건호입니다</p>
        <p className="mt-16">피 윤건호입니다</p>
        {/* top, bottom 가질 수 없습니다.  */}
        {/* height(높이값) 가질 수 없습니다. */}
        <p className="mt-32">피 윤건호입니다</p>
      </div>
    </>
  );
};

export default TailwindTest;
