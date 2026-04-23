export type CourseOverview = {
  slug?: string;
  title: string;
  subtitle: string;
  summary: string;
  duration_weeks: number;
  schedule: string;
  level: string;
};

export type CourseItem = {
  title: string;
  description: string;
};

export type CourseHighlight = {
  label: string;
  value: string;
};

export type CourseModule = {
  week_label: string;
  title: string;
  description: string;
};

export type CourseResponse = {
  overview: CourseOverview;
  highlights: CourseHighlight[];
  modules: CourseModule[];
  outcomes: CourseItem[];
};

export type CourseListItem = {
  slug: string;
  title: string;
  subtitle: string;
  duration_weeks: number;
  schedule: string;
  level: string;
};

type CourseListResponse = {
  courses: CourseListItem[];
};

export const fallbackCourse: CourseResponse = {
  overview: {
    slug: "devops-expert-bootcamp",
    title: "데브옵스 전문가 부트캠프",
    subtitle:
      "Docker, CI/CD, 클라우드 자동화, 관측성을 실무 중심으로 익히는 데브옵스 전문가 양성 과정입니다.",
    summary:
      "이 프론트엔드는 Docker 실습용으로 구성된 예제입니다. 실제 완성 형태에서는 PostgreSQL 데이터를 Node.js 백엔드가 제공하고, Next.js가 이를 화면에 렌더링합니다.",
    duration_weeks: 12,
    schedule: "평일 저녁 라이브 세션 + 주말 실습",
    level: "중급",
  },
  highlights: [
    { label: "진행 방식", value: "실습 중심 랩과 가이드형 배포 미션" },
    { label: "핵심 스택", value: "Next.js, Node.js, PostgreSQL, Docker" },
    { label: "최종 결과", value: "배포 가능한 포트폴리오형 DevOps 프로젝트" },
  ],
  modules: [
    {
      week_label: "1-4주차",
      title: "컨테이너와 플랫폼 기초",
      description: "리눅스 기본기, Docker 이미지, Compose, 반복 가능한 로컬 환경 구성을 학습합니다.",
    },
    {
      week_label: "5-8주차",
      title: "배포 자동화",
      description: "CI/CD 파이프라인, 아티팩트 버저닝, 테스트 게이트, 배포 워크플로를 다룹니다.",
    },
    {
      week_label: "9-12주차",
      title: "운영과 캡스톤",
      description: "모니터링, 장애 대응, 풀스택 서비스의 엔드투엔드 배포 경험을 쌓습니다.",
    },
  ],
  outcomes: [
    {
      title: "실전형 Docker 워크플로",
      description: "프론트엔드, 백엔드, 데이터베이스 서비스 이미지를 직접 빌드하고 실행할 수 있습니다.",
    },
    {
      title: "실무형 DevOps 감각",
      description: "배포 파이프라인, 서비스 연결, 운영 관점의 트러블슈팅 흐름을 익힙니다.",
    },
  ],
};

const labelTranslations: Record<string, string> = {
  Format: "진행 방식",
  Focus: "학습 초점",
  Mentoring: "멘토링",
  Capstone: "캡스톤",
  Outcome: "최종 결과",
  "Core stack": "핵심 스택",
};

const valueTranslations: Record<string, string> = {
  "Next.js frontend + Node.js API + PostgreSQL labs":
    "Next.js 프론트엔드 + Node.js API + PostgreSQL 실습",
  "Docker images, Compose, CI/CD, IaC, monitoring":
    "Docker 이미지, Compose, CI/CD, IaC, 모니터링",
  "Weekly code reviews and architecture feedback":
    "주간 코드 리뷰와 아키텍처 피드백",
  "Deploy a production-style service stack": "실무형 서비스 스택 배포 프로젝트",
  "Monitoring labs and incident simulation exercises": "모니터링 랩과 장애 대응 시뮬레이션 실습",
  "SLI/SLO, alerting, tracing, dashboards, postmortems":
    "SLI/SLO, 알림 설계, 트레이싱, 대시보드, 포스트모템",
  "Operational reviews with scenario-based feedback": "시나리오 기반 운영 리뷰와 피드백",
  "Pipeline hardening labs and secure deployment reviews": "파이프라인 보안 강화 랩과 안전한 배포 리뷰",
  "Secrets management, image scanning, policy as code, supply chain":
    "시크릿 관리, 이미지 스캔, 정책형 코드, 공급망 보안",
  "Ship a security-gated deployment pipeline": "보안 게이트가 포함된 배포 파이프라인 완성",
  "Hands-on labs and guided deployments": "실습 중심 랩과 가이드형 배포 미션",
  "A deployable portfolio-ready DevOps project": "배포 가능한 포트폴리오형 DevOps 프로젝트",
  Intermediate: "중급",
  Advanced: "고급",
  "Weekday evening live sessions + weekend labs": "평일 저녁 라이브 세션 + 주말 실습",
  "Weeknight workshops + on-call simulation labs": "평일 저녁 워크숍 + 온콜 시뮬레이션 랩",
  "Weekend project sessions + weekday review clinics": "주말 프로젝트 세션 + 평일 리뷰 클리닉",
  "Weekend intensive labs": "주말 집중 실습",
};

const moduleTitleTranslations: Record<string, string> = {
  "Linux and networking foundations": "리눅스와 네트워크 기초",
  "Docker and image workflows": "Docker와 이미지 워크플로",
  "CI/CD automation": "CI/CD 자동화",
  "Infrastructure as code": "코드형 인프라",
  "Observability and incident response": "관측성과 장애 대응",
  "Capstone deployment": "캡스톤 배포 프로젝트",
  "Container and platform fundamentals": "컨테이너와 플랫폼 기초",
  "Delivery automation": "배포 자동화",
  "Operations and capstone": "운영과 캡스톤",
  "Service reliability foundations": "서비스 신뢰성 기초",
  "Observability engineering": "관측성 엔지니어링",
  "Incident response and review": "장애 대응과 리뷰",
  "Secure development pipeline": "보안형 개발 파이프라인",
  "Container and runtime security": "컨테이너와 런타임 보안",
  "Governance and incident readiness": "거버넌스와 대응 준비",
};

const moduleDescriptionTranslations: Record<string, string> = {
  "Refresh shell skills, process management, TCP/IP basics, reverse proxies, and service troubleshooting.":
    "셸 사용법, 프로세스 관리, TCP/IP 기초, 리버스 프록시, 서비스 트러블슈팅을 복습합니다.",
  "Build clean images, understand layers, optimize Dockerfiles, and run multi-container environments.":
    "깔끔한 이미지 빌드, 레이어 이해, Dockerfile 최적화, 멀티 컨테이너 환경 구성을 익힙니다.",
  "Create pipelines for linting, testing, image publishing, and delivery approvals using Git-based workflows.":
    "Git 기반 워크플로로 lint, 테스트, 이미지 배포, 승인 절차를 자동화합니다.",
  "Provision repeatable environments and manage secrets, configuration, and infrastructure drift.":
    "반복 가능한 환경을 만들고 시크릿, 설정, 인프라 변경 차이를 관리합니다.",
  "Add logs, metrics, alerts, dashboards, and operational runbooks to services.":
    "로그, 메트릭, 알림, 대시보드, 운영 런북을 서비스에 적용합니다.",
  "Package a full-stack service, connect data stores, and present an end-to-end deployment flow.":
    "풀스택 서비스를 패키징하고 데이터 스토어를 연결해 엔드투엔드 배포 흐름을 완성합니다.",
  "Define reliability goals, error budgets, and healthy operational boundaries.":
    "신뢰성 목표, 에러 버짓, 운영 경계선을 정의합니다.",
  "Design metrics, logs, traces, dashboards, and actionable alerts for production systems.":
    "운영 환경에 맞는 메트릭, 로그, 트레이스, 대시보드, 실행 가능한 알림을 설계합니다.",
  "Practice incident command, communication, rollback strategy, and postmortem culture.":
    "장애 지휘 체계, 커뮤니케이션, 롤백 전략, 포스트모템 문화를 실습합니다.",
  "Add dependency checks, secrets scanning, and approval gates to delivery workflows.":
    "배포 워크플로에 의존성 점검, 시크릿 스캔, 승인 게이트를 추가합니다.",
  "Harden Docker images, manage runtime policies, and reduce attack surface in deployments.":
    "Docker 이미지를 강화하고 런타임 정책을 관리하며 배포 공격면을 줄입니다.",
  "Apply policy as code, audit trails, and response playbooks for secure operations.":
    "정책형 코드, 감사 추적, 대응 플레이북으로 안전한 운영 체계를 구성합니다.",
};

const outcomeTitleTranslations: Record<string, string> = {
  "Container proficiency": "컨테이너 활용 역량",
  "Pipeline literacy": "파이프라인 설계 역량",
  "Operational confidence": "운영 대응 역량",
  "Portfolio project": "포트폴리오 프로젝트",
  "Reliable service mindset": "신뢰성 중심 운영 사고",
  "Production visibility skills": "운영 가시성 설계 역량",
  "Secure CI/CD workflow": "보안형 CI/CD 워크플로",
  "Policy-driven delivery": "정책 기반 배포 역량",
};

const outcomeDescriptionTranslations: Record<string, string> = {
  "Build, run, and debug Docker images and containers for both frontend and backend services.":
    "프론트엔드와 백엔드 서비스를 위한 Docker 이미지와 컨테이너를 직접 빌드, 실행, 디버깅할 수 있습니다.",
  "Create CI/CD steps that validate, package, and ship code safely.":
    "코드를 안전하게 검증, 패키징, 배포하는 CI/CD 단계를 구성할 수 있습니다.",
  "Trace issues across application, database, and infrastructure boundaries.":
    "애플리케이션, 데이터베이스, 인프라 전반에서 발생하는 문제를 추적하고 분석할 수 있습니다.",
  "Finish with a demonstrable full-stack DevOps project suitable for interviews or team onboarding.":
    "면접이나 팀 온보딩에 활용할 수 있는 시연 가능한 풀스택 DevOps 프로젝트를 완성합니다.",
  "Measure what matters and respond to failures with clear operational priorities.":
    "중요한 지표를 정의하고 명확한 운영 우선순위로 장애에 대응할 수 있습니다.",
  "Create dashboards and alerting flows that teams can trust during incidents.":
    "장애 상황에서도 팀이 신뢰할 수 있는 대시보드와 알림 흐름을 설계할 수 있습니다.",
  "Build pipelines that include practical security checks without excessive friction.":
    "과도한 마찰 없이 실용적인 보안 검사를 포함한 배포 파이프라인을 만들 수 있습니다.",
  "Apply repeatable security guardrails across infrastructure, images, and deployments.":
    "인프라, 이미지, 배포 전반에 반복 가능한 보안 가드레일을 적용할 수 있습니다.",
};

const weekLabelTranslations: Record<string, string> = {
  "Weeks 1-2": "1-2주차",
  "Weeks 3-4": "3-4주차",
  "Weeks 5-6": "5-6주차",
  "Weeks 7-8": "7-8주차",
  "Weeks 9-10": "9-10주차",
  "Weeks 11-12": "11-12주차",
  "Weeks 1-4": "1-4주차",
  "Weeks 5-8": "5-8주차",
  "Weeks 9-12": "9-12주차",
  "Weeks 3-5": "3-5주차",
  "Weeks 6-8": "6-8주차",
  "Weeks 1-3": "1-3주차",
  "Weeks 4-6": "4-6주차",
  "Weeks 7-9": "7-9주차",
};

const titleTranslations: Record<string, string> = {
  "DevOps Expert Bootcamp": "데브옵스 전문가 부트캠프",
  "Cloud Platform Engineering": "클라우드 플랫폼 엔지니어링",
  "SRE & Observability Track": "SRE & Observability 트랙",
  "DevSecOps Practitioner": "DevSecOps 실무 과정",
};

const subtitleTranslations: Record<string, string> = {
  "A practical course for engineers building CI/CD, containers, cloud automation, and observability skills.":
    "CI/CD, 컨테이너, 클라우드 자동화, 관측성 역량을 실무형으로 익히는 엔지니어 대상 과정입니다.",
  "A backend-focused course for Kubernetes, cloud infrastructure, and platform operations.":
    "쿠버네티스, 클라우드 인프라, 플랫폼 운영 역량에 초점을 둔 백엔드 중심 과정입니다.",
  "A reliability-focused course covering monitoring design, incident response, and service-level thinking.":
    "모니터링 설계, 장애 대응, 서비스 수준 목표를 중심으로 구성한 신뢰성 특화 과정입니다.",
  "A practical security-in-delivery course for engineers embedding scanning, secrets hygiene, and policy checks into CI/CD.":
    "스캔, 시크릿 관리, 정책 검사를 CI/CD에 녹여내는 실전형 보안 배포 과정입니다.",
};

const summaryTranslations: Record<string, string> = {
  "This curriculum is designed for hands-on DevOps practice. Students build delivery pipelines, package applications into Docker images, connect services with Compose, and learn the operational habits needed for modern platform teams.":
    "이 커리큘럼은 실전형 DevOps 실습을 위해 설계되었습니다. 수강생은 배포 파이프라인을 만들고, 애플리케이션을 Docker 이미지로 패키징하며, Compose로 서비스를 연결하고, 현대적인 플랫폼 팀에 필요한 운영 습관을 익히게 됩니다.",
  "This course helps engineers build strong production habits with logging, metrics, tracing, alert design, and incident communication workflows.":
    "로그, 메트릭, 트레이싱, 알림 설계, 장애 커뮤니케이션 흐름을 중심으로 운영 역량을 강화하는 과정입니다.",
  "Learners secure build pipelines, container images, runtime configurations, and team workflows without blocking delivery speed.":
    "배포 속도를 크게 늦추지 않으면서 빌드 파이프라인, 컨테이너 이미지, 런타임 설정, 팀 운영 흐름까지 안전하게 다루는 방법을 학습합니다.",
};

function translateText(value: string, dictionary: Record<string, string>) {
  return dictionary[value] ?? value;
}

function getApiBaseUrl() {
  return (
    process.env.INTERNAL_API_BASE_URL ??
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    "http://localhost:4000"
  );
}

export async function getCourseData(slug?: string) {
  const baseUrl = getApiBaseUrl();
  const path = slug ? `/api/courses/${slug}` : "/api/course";

  try {
    const response = await fetch(`${baseUrl}${path}`, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Backend responded with ${response.status}`);
    }

    const course = (await response.json()) as CourseResponse;
    return { course, error: null as string | null };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to load backend course data.";

    return { course: null as CourseResponse | null, error: message };
  }
}

export async function getCourseList() {
  const baseUrl = getApiBaseUrl();

  try {
    const response = await fetch(`${baseUrl}/api/courses`, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Backend responded with ${response.status}`);
    }

    const data = (await response.json()) as CourseListResponse;
    return data.courses;
  } catch {
    return [] as CourseListItem[];
  }
}

export function translateCourse(course: CourseResponse): CourseResponse {
  return {
    overview: {
      ...course.overview,
      title: translateText(course.overview.title, titleTranslations),
      subtitle: translateText(course.overview.subtitle, subtitleTranslations),
      summary: translateText(course.overview.summary, summaryTranslations),
      schedule: translateText(course.overview.schedule, valueTranslations),
      level: translateText(course.overview.level, valueTranslations),
    },
    highlights: course.highlights.map((item) => ({
      label: translateText(item.label, labelTranslations),
      value: translateText(item.value, valueTranslations),
    })),
    modules: course.modules.map((item) => ({
      week_label: translateText(item.week_label, weekLabelTranslations),
      title: translateText(item.title, moduleTitleTranslations),
      description: translateText(item.description, moduleDescriptionTranslations),
    })),
    outcomes: course.outcomes.map((item) => ({
      title: translateText(item.title, outcomeTitleTranslations),
      description: translateText(item.description, outcomeDescriptionTranslations),
    })),
  };
}

export function translateCourseList(items: CourseListItem[]) {
  return items.map((item) => ({
    ...item,
    title: translateText(item.title, titleTranslations),
    subtitle: translateText(item.subtitle, subtitleTranslations),
    schedule: translateText(item.schedule, valueTranslations),
    level: translateText(item.level, valueTranslations),
  }));
}
