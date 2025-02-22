import React from "react";

function Home() {
  const img = "src/assets/home_page__video.mp4";
  return (
    <div className="hero min-h-screen">
      <div
        className="relative flex h-screen  
        items-center justify-center overflow-hidden font-inter text-white flex-col"
      >
        <video
          src={img}
          autoPlay="{true}"
          loop
          muted
          className="absolute min-h-full  
            w-auto min-w-full max-w-none"
        ></video>
        <div className="hero-overlay z-20 m-4 bg-opacity-60 text-center tracking-wide font-medium text-2xl ">
          A NITA Club
        </div>
        <div className="hero-content text-neutral-content z-20 text-center">
          <div className="mx-auto my-auto max-w-lg ">
            <h1 className="mb-5 text-5xl font-bold">Civil Services Society</h1>
            <p className="mb-5 px-4">
            Ready to embark on your journey to becoming a future leader? Take the first step and join the CSS today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
