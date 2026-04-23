import Link from "next/link";

import type { CourseListItem, CourseResponse } from "@/lib/courses";

type CoursePageProps = {
  course: CourseResponse;
  otherCourses: CourseListItem[];
  error: string | null;
  isDetailPage?: boolean;
};

export function CoursePage({
  course,
  otherCourses,
  error,
  isDetailPage = false,
}: CoursePageProps) {
  const { overview, highlights, modules, outcomes } = course;
  const serviceMetrics = [
    { label: "집중 운영 기간", value: `${overview.duration_weeks}주` },
    { label: "핵심 모듈", value: `${modules.length}개` },
    { label: "실무 성과", value: `${outcomes.length}개` },
    { label: "운영 트랙", value: `${otherCourses.length + 1}개` },
  ];
  const serviceSignals = [
    "실습 환경은 Docker 기반으로 일관되게 제공됩니다.",
    "과정 소개, 트랙 탐색, 상세 조회가 한 화면 흐름으로 연결됩니다.",
    "백엔드 데이터 연결 상태를 서비스 배너에서 바로 확인할 수 있습니다.",
  ];
  const operations = [
    {
      title: "주차별 실습 로드맵",
      description: "기초 학습부터 배포와 운영까지 단계적으로 이어지는 흐름으로 설계했습니다.",
    },
    {
      title: "실전형 서비스 스택",
      description: "Next.js, Node.js, PostgreSQL, Docker를 기준으로 전체 연결 경험을 제공합니다.",
    },
    {
      title: "운영 관점의 학습 경험",
      description: "배포 이후 모니터링, 장애 대응, 운영 절차까지 자연스럽게 이어지도록 구성했습니다.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#eef2f7] text-slate-900">
      <section className="bg-[#0b1220] text-white">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-12">
          <header className="flex flex-col gap-4 border-b border-white/10 py-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/15 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-300/20">
                DP
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Docker Practice Academy</p>
                <p className="text-xs text-slate-400">실무형 DevOps 교육 플랫폼</p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-5 text-sm text-slate-300">
              <a href="#overview" className="transition-colors hover:text-white">
                소개
              </a>
              <a href="#curriculum" className="transition-colors hover:text-white">
                커리큘럼
              </a>
              <a href="#outcomes" className="transition-colors hover:text-white">
                기대 효과
              </a>
              <a href="#tracks" className="transition-colors hover:text-white">
                다른 트랙
              </a>
              {isDetailPage ? (
                <Link href="/" className="font-medium text-white transition-opacity hover:opacity-80">
                  메인 과정
                </Link>
              ) : null}
            </nav>
          </header>

          <div
            id="overview"
            className="grid gap-10 py-14 lg:grid-cols-[minmax(0,1.45fr)_360px] lg:py-18"
          >
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="inline-flex items-center rounded-full bg-emerald-400/12 px-3 py-1 font-medium text-emerald-200 ring-1 ring-emerald-300/20">
                  모집 중
                </span>
                <span className="inline-flex items-center rounded-full bg-white/6 px-3 py-1 text-slate-300 ring-1 ring-white/10">
                  운영 방식 · {overview.schedule}
                </span>
              </div>

              <div className="space-y-5">
                <p className="text-sm font-medium tracking-[0.22em] text-cyan-200/80 uppercase">
                  Professional program
                </p>
                <h1 className="max-w-4xl break-keep text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  {overview.title}
                </h1>
                <p className="max-w-3xl break-keep text-xl leading-9 text-slate-300">
                  {overview.subtitle}
                </p>
                <p className="max-w-3xl break-keep text-base leading-8 text-slate-400">
                  {overview.summary}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#curriculum"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
                >
                  커리큘럼 보기
                </a>
                <a
                  href="#tracks"
                  className="inline-flex items-center justify-center rounded-xl border border-white/12 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/6"
                >
                  다른 트랙 살펴보기
                </a>
              </div>

              <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {serviceMetrics.map((item) => (
                  <article key={item.label} className="rounded-2xl border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                      {item.value}
                    </p>
                  </article>
                ))}
              </section>
            </div>

            <aside className="space-y-5 rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-md">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-cyan-200">Program snapshot</p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">운영 정보</h2>
                </div>
                <span className="rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-medium text-emerald-200 ring-1 ring-emerald-300/20">
                  Live
                </span>
              </div>

              <dl className="space-y-4 text-sm">
                <div className="rounded-2xl border border-white/8 bg-slate-950/30 px-4 py-4">
                  <dt className="text-slate-400">교육 기간</dt>
                  <dd className="mt-2 text-lg font-semibold text-white">{overview.duration_weeks}주</dd>
                </div>
                <div className="rounded-2xl border border-white/8 bg-slate-950/30 px-4 py-4">
                  <dt className="text-slate-400">난이도</dt>
                  <dd className="mt-2 text-lg font-semibold text-white">{overview.level}</dd>
                </div>
                <div className="rounded-2xl border border-white/8 bg-slate-950/30 px-4 py-4">
                  <dt className="text-slate-400">구성 방식</dt>
                  <dd className="mt-2 break-keep text-lg font-semibold text-white">
                    이론, 실습, 배포 흐름을 한 과정 안에서 연결
                  </dd>
                </div>
              </dl>

              <div className="rounded-2xl border border-cyan-300/15 bg-cyan-400/8 p-4">
                <p className="text-sm font-medium text-cyan-100">서비스 신뢰 요소</p>
                <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-300">
                  {serviceSignals.map((signal) => (
                    <li key={signal} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                      <span className="break-keep">{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8 sm:px-10 lg:px-12">
        {error ? (
          <div className="rounded-2xl border border-[#e7d5b4] bg-[#fcf7ed] px-5 py-4 text-sm leading-7 text-[#7b5b25] shadow-sm">
            백엔드 데이터에 아직 연결되지 않아 임시 과목 정보를 표시하고 있습니다. 상세: {error}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#d7e3d2] bg-white px-5 py-4 text-sm leading-7 text-slate-700 shadow-sm">
            <span className="font-semibold text-slate-900">실시간 운영 상태</span> · Node.js 백엔드와 PostgreSQL에서 불러온 과정 데이터를 반영하고 있습니다.
          </div>
        )}

        <section className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.35)] ring-1 ring-slate-200 sm:p-8">
            <div className="space-y-2">
              <p className="text-sm font-medium text-cyan-700">Why this program</p>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950">
                운영 환경을 전제로 설계한 학습 흐름
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {operations.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 break-keep text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <article
                key={`${item.label}-${item.value}`}
                className="rounded-[24px] bg-[#0f172a] p-6 text-white shadow-[0_20px_70px_-40px_rgba(15,23,42,0.7)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-slate-300">{item.label}</p>
                  <span className="text-sm font-semibold text-cyan-300">0{index + 1}</span>
                </div>
                <h2 className="mt-4 break-keep text-xl font-semibold leading-8 text-white">{item.value}</h2>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)]">
          <div
            id="curriculum"
            className="rounded-[28px] bg-white p-6 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.35)] ring-1 ring-slate-200 sm:p-8"
          >
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-cyan-700">Curriculum roadmap</p>
                <h2 className="break-keep text-3xl font-semibold tracking-[-0.03em] text-slate-950">
                  커리큘럼 로드맵
                </h2>
              </div>
              <p className="max-w-md break-keep text-sm leading-7 text-slate-600">
                기본기부터 배포, 운영, 서비스 완성까지 이어지는 실전 중심 흐름입니다.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {modules.map((module, index) => (
                <article
                  key={`${module.week_label}-${module.title}`}
                  className={`grid gap-4 ${index === 0 ? "" : "border-t border-slate-200 pt-6"} sm:grid-cols-[110px_minmax(0,1fr)]`}
                >
                  <div className="pt-1">
                    <p className="text-sm font-semibold text-cyan-700">{module.week_label}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <h3 className="break-keep text-xl font-semibold text-slate-900">{module.title}</h3>
                    <p className="mt-3 break-keep text-sm leading-7 text-slate-600">
                      {module.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <section
              id="outcomes"
              className="rounded-[28px] bg-white p-6 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.35)] ring-1 ring-slate-200"
            >
              <div className="space-y-2">
                <p className="text-sm font-medium text-cyan-700">Outcome</p>
                <h2 className="break-keep text-2xl font-semibold text-slate-950">수강 후 기대 효과</h2>
              </div>
              <div className="mt-6 space-y-5">
                {outcomes.map((outcome, index) => (
                  <article
                    key={outcome.title}
                    className={`rounded-2xl bg-slate-50 p-5 ${index === 0 ? "" : "border border-slate-200"}`}
                  >
                    <h3 className="break-keep text-lg font-semibold text-slate-900">{outcome.title}</h3>
                    <p className="mt-2 break-keep text-sm leading-7 text-slate-600">
                      {outcome.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {otherCourses.length > 0 ? (
              <section
                id="tracks"
                className="rounded-[28px] bg-white p-6 shadow-[0_20px_70px_-40px_rgba(15,23,42,0.35)] ring-1 ring-slate-200"
              >
                <div className="space-y-2">
                  <p className="text-sm font-medium text-cyan-700">More programs</p>
                  <h2 className="break-keep text-2xl font-semibold text-slate-950">
                    함께 운영 중인 다른 트랙
                  </h2>
                  <p className="break-keep text-sm leading-7 text-slate-600">
                    학습 목적에 따라 다른 트랙을 비교하고 상세 페이지로 이동할 수 있습니다.
                  </p>
                </div>

                <div className="mt-6 space-y-4">
                  {otherCourses.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/courses/${item.slug}`}
                      className="group block rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
                    >
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        <span>{item.level}</span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span>{item.duration_weeks}주</span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span>{item.schedule}</span>
                      </div>
                      <h3 className="mt-3 break-keep text-xl font-semibold text-slate-900 transition-colors group-hover:text-cyan-800">
                        {item.title}
                      </h3>
                      <p className="mt-2 break-keep text-sm leading-7 text-slate-600">{item.subtitle}</p>
                      <span className="mt-4 inline-flex font-medium text-slate-700 transition-colors group-hover:text-cyan-800">
                        상세 트랙 보기 →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </section>
      </section>
    </main>
  );
}
