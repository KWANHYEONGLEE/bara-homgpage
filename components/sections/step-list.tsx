export type Step = { title: string; body: string };

/**
 * 번호가 붙은 단계 목록.
 * 순서가 실제로 의미를 갖는 곳(이해 -> 방법 -> 지속)에만 쓴다.
 * ol 로 두어 스크린리더에도 순서가 전달되게 한다.
 */
export function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="space-y-8">
      {steps.map((step, i) => (
        <li key={step.title} className="grid grid-cols-[2.25rem_1fr] gap-x-4">
          <span
            aria-hidden
            className="t-title pt-px tabular-nums text-brand-ink"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="t-title">{step.title}</h3>
            <p className="t-body measure mt-2">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
