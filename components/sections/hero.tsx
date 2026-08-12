export function Hero() {
  return (
    // -mt 로 sticky 헤더 아래까지 끌어올려 그라데이션이 화면 최상단부터
    // 시작하게 하고, 같은 크기의 pt 로 문구 위치를 되돌린다.
    // 위/아래 패딩 차이를 헤더 높이(4rem/4.5rem)와 맞춰,
    // 문구가 헤더 아래 영역의 광학적 중앙에 오게 한다.
    <section className="hero-gradient -mt-16 flex min-h-[calc(54vh+4rem)] items-center justify-center px-5 pb-20 pt-36 sm:-mt-18 sm:min-h-[calc(56vh+4.5rem)] sm:pb-[4.5rem] sm:pt-36 lg:px-8">
      {/* 60px 기준 한 줄에 약 1040px 이 필요하다. 5xl(1024) 로는 아슬하게 모자란다 */}
      <div className="mx-auto max-w-6xl text-center">
        {/* balance 는 줄을 고르게 나누려고 Child 를 미리 내린다. 앞줄부터 채운다 */}
        <h1 className="t-display [text-wrap:pretty]">
          Empowering Every Child, with AI
        </h1>
        <p className="t-body-sm mx-auto mt-5 max-w-xl text-3xl font-bold">
          아이의 오늘을 이해하고, 내일의 성장을 돕는 기업
        </p>
      </div>
    </section>
  );
}
