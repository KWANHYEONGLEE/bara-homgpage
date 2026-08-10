export function AboutHero() {
  return (
    // 홈과 같은 브랜드 진입. -mt 로 sticky 헤더 아래까지 끌어올리고
    // 위/아래 패딩 차이를 헤더 높이와 맞춰 문구를 광학적 중앙에 둔다.
    <section className="hero-gradient -mt-16 flex min-h-[calc(34vh+4rem)] items-center justify-center px-5 pb-16 pt-32 sm:-mt-18 sm:min-h-[calc(38vh+4.5rem)] sm:pb-[4.5rem] sm:pt-36 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="t-display">TEAM&nbsp;·&nbsp;BARA</h1>
        <p className="t-body-sm mx-auto mt-5 max-w-xl">
          바라스페이스가 걸어온 길과 일하는 방식을 소개합니다.
        </p>
      </div>
    </section>
  );
}
