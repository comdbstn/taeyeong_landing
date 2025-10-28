# 태영개발공사 랜딩페이지 개발 가이드

## 프로젝트 개요

태영개발공사의 공식 랜딩페이지입니다. 회사 소개, 기술 역량, 시공 실적, 협력 업체, 상담 문의 등을 제공하는 원페이지 웹사이트입니다.

## 기술 스택

### 프론트엔드
- **React 18** - UI 라이브러리
- **Vite** - 빌드 도구 및 개발 서버
- **Tailwind CSS v4** - 스타일링 프레임워크
- **Framer Motion** - 애니메이션 라이브러리
- **React Hook Form** - 폼 관리
- **React Icons** - 아이콘 라이브러리
- **Swiper** - 슬라이더/캐러셀

### 배포
- **Vercel** - 프로덕션 배포
- **GitHub** - 버전 관리

## 디자인 시스템

### 색상 팔레트

#### Primary Colors (Navy Blue)
- `primary-50`: `#eef6fc` - 매우 밝은 배경
- `primary-100`: `#d5e7f5` - 밝은 배경
- `primary-200`: `#acd0eb` - 연한 강조
- `primary-300`: `#7eb4e0` - 중간 강조
- `primary-400`: `#5598d4` - 기본 강조
- `primary-500`: `#3d7ec2` - 진한 강조
- `primary-600`: `#2c5282` - 주요 브랜드 색상 ⭐
- `primary-700`: `#1e3a5f` - 어두운 강조
- `primary-800`: `#152a47` - 매우 어두운 배경
- `primary-900`: `#0a1628` - 가장 어두운 배경

#### Accent Colors (Orange)
- `accent-50`: `#fff7ed` - 매우 밝은 배경
- `accent-100`: `#ffedd5` - 밝은 배경
- `accent-200`: `#fed7aa` - 연한 강조
- `accent-300`: `#fdba74` - 중간 강조
- `accent-400`: `#fb923c` - 기본 강조
- `accent-500`: `#f97316` - 주요 액센트 색상 ⭐
- `accent-600`: `#ea580c` - 진한 강조
- `accent-700`: `#c2410c` - 어두운 강조
- `accent-800`: `#9a3412` - 매우 어두운 배경
- `accent-900`: `#7c2d12` - 가장 어두운 배경

#### Neutral Colors
- `gray-50` ~ `gray-900` - 기본 회색 팔레트
- `white` / `black` - 기본 색상

### 타이포그래피
- **폰트 패밀리**: Noto Sans KR (Google Fonts)
- **폰트 크기**:
  - 섹션 제목: `text-4xl md:text-5xl` (36px ~ 48px+)
  - 서브 제목: `text-2xl md:text-3xl` (24px ~ 30px)
  - 본문: `text-base md:text-lg` (16px ~ 18px)
  - 소형 텍스트: `text-sm` (14px)

### 레이아웃
- **컨테이너**: `container mx-auto` - 최대 너비 1280px, 좌우 자동 여백
- **섹션 패딩**: `section-padding` (py-20) - 상하 80px
- **그리드**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - 반응형 그리드

### 컴포넌트 스타일

#### 카드
```jsx
// 기본 카드
className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"

// 강조 카드 (Primary)
className="bg-primary-600 text-white rounded-lg p-8"

// 강조 카드 (Accent)
className="bg-accent-500 text-white rounded-lg p-8"
```

#### 버튼
```jsx
// Primary 버튼
className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded transition-colors"

// Accent 버튼
className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded transition-colors"

// 아웃라인 버튼
className="px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded transition-colors"
```

#### 입력 필드
```jsx
className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
```

## 프로젝트 구조

```
taeyeong-landing/
├── public/              # 정적 파일
├── src/
│   ├── components/      # React 컴포넌트
│   │   ├── layout/      # 레이아웃 컴포넌트
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/    # 섹션 컴포넌트
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── CapabilitiesSection.jsx
│   │   │   ├── PortfolioSection.jsx
│   │   │   ├── PartnersSection.jsx
│   │   │   └── ContactSection.jsx
│   │   └── common/      # 공통 컴포넌트
│   │       ├── Button.jsx
│   │       └── Counter.jsx
│   ├── data/            # 데이터 파일
│   │   ├── companyInfo.js
│   │   ├── portfolio.js
│   │   └── partners.js
│   ├── App.jsx          # 메인 앱 컴포넌트
│   ├── main.jsx         # 엔트리 포인트
│   └── index.css        # 글로벌 스타일 (Tailwind CSS)
├── index.html
├── vite.config.js       # Vite 설정
├── postcss.config.js    # PostCSS 설정
├── package.json
└── README.md
```

## 주요 섹션 설명

### 1. Hero Section
- 전체 화면 히어로 섹션
- 배경: 건물 이미지 + 그라데이션 오버레이
- 주요 내용: 회사 슬로건, 통계 카드 (100+ 프로젝트, 13년 경험, 300억+ 시공금액)
- CTA 버튼: "시공 상담 문의", "회사소개 보기"
- 스크롤 인디케이터

### 2. About Section (회사 소개)
- 3개 정보 카드: 법인명, 본사 위치, 등록면허
- 연혁 타임라인 (2012년 ~ 2024년)
- 좌우 교대 레이아웃

### 3. Capabilities Section (기술 역량)
- 통계 카드: 시공 프로젝트, 협력사, 누적 시공금액 (카운터 애니메이션)
- 보유 기술인력 그리드 (8명)
- 4열 그리드 레이아웃

### 4. Portfolio Section (주요 시공 실적)
- 카테고리 필터 (전체, 산업시설, 상업시설, 종교시설, 공공시설)
- 프로젝트 카드 그리드 (3열)
- 프로젝트 상세 모달
- 각 카드: 카테고리, 제목, 발주처, 위치, 기간, 공사금액, 설명

### 5. Partners Section (협력 업체)
- Swiper 슬라이더로 협력 업체 표시
- 고객 후기 카드 (2개)

### 6. Contact Section (상담 문의)
- 좌측: 연락처 정보 (본사, 지사, 이메일, 회사소개서 다운로드, 지도)
- 우측: 문의 폼 (이름, 연락처, 이메일, 문의내용)
- React Hook Form으로 폼 검증

### 7. Footer
- 회사 정보, 본사/지사 정보, 저작권

## 애니메이션

### Framer Motion 사용
모든 섹션에 스크롤 기반 애니메이션 적용:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* 컨텐츠 */}
</motion.div>
```

- **initial**: 초기 상태 (투명, 아래로 20px 이동)
- **whileInView**: 화면에 보일 때 상태 (불투명, 원래 위치)
- **transition**: 애니메이션 지속 시간
- **viewport**: 한 번만 실행

## 개발 가이드

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```
개발 서버: http://localhost:5173

### 빌드
```bash
npm run build
```
빌드 결과물: `dist/` 폴더

### 미리보기
```bash
npm run preview
```

## 배포

### Vercel 배포 설정
1. GitHub 저장소 연결
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Install Command: `npm install`

### 환경 변수
현재 환경 변수 없음 (정적 사이트)

## 데이터 관리

모든 데이터는 `src/data/` 폴더의 JavaScript 파일에서 관리:

### companyInfo.js
- 회사 기본 정보
- 본사/지사 주소
- 연혁 정보
- 보유 기술인력
- 통계 정보

### portfolio.js
- 시공 실적 목록
- 카테고리 정보

### partners.js
- 협력 업체 목록
- 고객 후기

## 반응형 디자인

### 브레이크포인트
- **모바일**: < 640px
- **태블릿**: 640px ~ 1024px
- **데스크탑**: > 1024px

### 주요 반응형 패턴
```jsx
// 그리드
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

// 텍스트 크기
text-4xl md:text-5xl

// 패딩
px-4 md:px-8

// 숨김/표시
hidden lg:block
```

## 성능 최적화

### 이미지 최적화
- Hero 섹션 배경: Unsplash 최적화 이미지 (q=80&w=2070)

### 코드 분할
- React.lazy() 사용 가능 (필요시)

### 애니메이션 최적화
- Framer Motion의 `viewport={{ once: true }}` 사용으로 재실행 방지

## 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 라이선스

© 2025 Taeyoung Development Construction Co., Ltd. All rights reserved.

## 개발자 노트

### Tailwind CSS v4 주의사항
- `@import "tailwindcss"` 사용
- `@theme` 블록으로 커스텀 색상 정의
- `tailwind.config.js` 불필요
- `@tailwindcss/postcss` 플러그인 사용

### 폼 처리
- 현재는 alert()로 표시
- 추후 백엔드 API 연동 필요 (예: contact form API)

### 지도 통합
- 현재는 플레이스홀더
- 추후 Kakao Map 또는 Google Maps API 통합 가능

### 회사소개서 다운로드
- 현재는 버튼만 존재
- 추후 PDF 파일 업로드 및 다운로드 기능 구현 필요
