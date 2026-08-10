"use client";

import { useEffect, useRef } from "react";

/**
 * 심바키즈 수업 영상.
 *
 * 브라우저는 소리 있는 자동재생을 막으므로 음소거로 시작한다.
 * autoPlay 속성 대신 effect 에서 play() 를 부르는 이유는,
 * 모션 최소화를 켠 사용자에게는 자동으로 움직이지 않기 위해서다.
 * 컨트롤을 남겨 두어 소리를 켜거나 다시 볼 수 있게 한다.
 */
export function IntroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // React 가 muted 를 속성으로 반영하지 않는 경우가 있어 직접 지정한다.
    // 음소거가 아니면 브라우저가 재생을 거부한다.
    video.muted = true;
    // 막히더라도 컨트롤로 직접 재생하면 되므로 조용히 넘어간다
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className="aspect-video w-full"
      muted
      playsInline
      controls
      preload="metadata"
      aria-label="심바키즈 수업 영상"
    >
      <source src="/videos/intro.mp4" type="video/mp4" />
      이 브라우저는 영상 재생을 지원하지 않습니다.
    </video>
  );
}
