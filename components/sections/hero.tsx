export function Hero() {
  return (
    // -mt 로 sticky 헤더 아래까지 끌어올려 그라데이션이 화면 최상단부터
    // 시작하게 하고, 같은 크기의 pt 로 문구 위치를 되돌린다.
    <section className="hero-gradient -mt-16 flex min-h-[calc(60vh+4rem)] items-center justify-center px-5 pb-28 pt-44 sm:-mt-18 sm:min-h-[calc(70vh+4.5rem)] sm:pt-46 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-2xl font-bold leading-[1.5] sm:text-3xl lg:text-[2.5rem] lg:leading-[1.45]">
          Empowering Every Child, with AI
          <span className="mt-1 block">
            아이의 오늘을 이해하고, 내일의 성장을 돕는 AI
          </span>
        </h1>
      </div>
    </section>
  );
}
