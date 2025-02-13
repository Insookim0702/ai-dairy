# AI - 일기장

# 1. ChatGPT 프롬프트

```
아래의 요구사항을 바탕으로 일기장 서비스를 개발할 PRD(Product Requirement Document)를 작성해주세요:

- 일기장 서비스는 웹 애플리케이션으로 구현되어야 합니다.
- 일기장 서비스는 사용자가 일기를 작성할 수 있어야 합니다.
- 일기장 서비스는 사용자가 일기를 리스트뷰로 볼 수 있어야 합니다.
- 일기장 서비스는 사용자가 일기를 수정할 수 있어야 합니다.
- 일기장 서비스는 사용자가 일기를 삭제할 수 있어야 합니다.
- 필수적인 기술 스택으로 Next.js App router, TailwindCSS, ShadCN를 사용하고, 요구사항에 따른 추가적인 기술스택 업데이트
- 기능 구현에 필요한 라이브러리는 최대한 활용
- MVP(Minimum Viable Product) 개발에 집중하고, 복잡한 기능보다는 핵심기능 완성도에 초점.

PRD에는 다음 내용이 포함되어야 합니다:

- 서비스 소개
- 유저 플로우
- 핵심 기능
- 기술 스택
- MVP 기능 개발 이후에 추가 개선 사항
```

# 2. ChatGPT 응답

```
AI - 일기장 PRD (Product Requirement Document)

1. 서비스 소개

AI 일기장은 사용자가 손쉽게 일기를 작성, 수정, 삭제할 수 있는 웹 애플리케이션입니다. Next.js App Router, TailwindCSS, ShadCN을 활용하여 직관적인 UI/UX를 제공하며, 기본적인 CRUD(생성, 읽기, 수정, 삭제) 기능을 지원하는 최소 기능 제품(MVP) 개발에 집중합니다.

2. 유저 플로우

회원가입/로그인 (선택적 MVP 범위 밖 기능)

사용자가 메인 페이지에서 일기 목록을 확인

"새 일기 작성" 버튼을 눌러 일기를 작성

작성된 일기는 리스트에 자동 추가

사용자가 특정 일기를 선택하여 상세보기

수정이 필요한 경우 "수정" 버튼을 눌러 일기 내용 변경

삭제를 원하는 경우 "삭제" 버튼을 눌러 해당 일기 삭제

3. 핵심 기능

일기 작성: 사용자가 텍스트 기반의 일기를 작성 가능

일기 리스트뷰: 작성된 일기를 목록 형태로 확인 가능

일기 상세 보기: 개별 일기의 전체 내용을 확인 가능

일기 수정: 기존 일기 내용을 편집 가능

일기 삭제: 불필요한 일기를 삭제 가능

4. 기술 스택

프레임워크: Next.js (App Router)

스타일링: TailwindCSS

UI 컴포넌트: ShadCN

데이터 관리: Zustand 또는 Context API (MVP 기준)

데이터베이스: Supabase 또는 Firebase (MVP 범위에서 결정)

인증: NextAuth.js (추후 기능 추가 시 고려)

5. MVP 기능 개발 이후 추가 개선 사항

AI 기반 감정 분석: 일기 내용을 분석하여 감정 태그 자동 부여

태그 및 카테고리 분류: 일기를 주제별로 정리하는 기능

검색 및 필터링: 특정 키워드나 날짜 기준으로 일기 검색 가능

음성 입력 지원: 음성으로 일기 작성

다크 모드 지원: 사용자 환경에 맞춘 테마 제공

데이터 백업 및 복원 기능: 클라우드 연동을 통한 데이터 보호

MVP를 먼저 완성하고 사용자 피드백을 받아 점진적으로 기능을 확장할 예정입니다.
```

# 3. 두 번째 프롬프트로 PRD 업데이트

```
회원가입/로그인 (선택적 MVP 범위 밖 기능)과 인증 기능은 MVP 개발 이후에 추가 개선 사항으로 고려해주세요. 기술 스택에는 Typescript를 추가해 주세요. DB는 localstorage를 사용해 주세요.
```

# 4. ChatGPT 응답

```
AI - 일기장 PRD (Product Requirement Document)

1. 서비스 소개

AI 일기장은 사용자가 손쉽게 일기를 작성, 수정, 삭제할 수 있는 웹 애플리케이션입니다. Next.js App Router, TailwindCSS, ShadCN을 활용하여 직관적인 UI/UX를 제공하며, 기본적인 CRUD(생성, 읽기, 수정, 삭제) 기능을 지원하는 최소 기능 제품(MVP) 개발에 집중합니다.

2. 유저 플로우

사용자가 메인 페이지에서 일기 목록을 확인

"새 일기 작성" 버튼을 눌러 일기를 작성

작성된 일기는 리스트에 자동 추가

사용자가 특정 일기를 선택하여 상세보기

수정이 필요한 경우 "수정" 버튼을 눌러 일기 내용 변경

삭제를 원하는 경우 "삭제" 버튼을 눌러 해당 일기 삭제

3. 핵심 기능

일기 작성: 사용자가 텍스트 기반의 일기를 작성 가능

일기 리스트뷰: 작성된 일기를 목록 형태로 확인 가능

일기 상세 보기: 개별 일기의 전체 내용을 확인 가능

일기 수정: 기존 일기 내용을 편집 가능

일기 삭제: 불필요한 일기를 삭제 가능

4. 기술 스택

프레임워크: Next.js (App Router)

언어: TypeScript

스타일링: TailwindCSS

UI 컴포넌트: ShadCN

데이터 관리: 기술 스택에서 데이터 관리는 React hooks 및 Context API로 구현(MVP 기준)

데이터베이스: localStorage

5. MVP 기능 개발 이후 추가 개선 사항

회원가입/로그인 및 인증 기능 추가

AI 기반 감정 분석: 일기 내용을 분석하여 감정 태그 자동 부여

태그 및 카테고리 분류: 일기를 주제별로 정리하는 기능

검색 및 필터링: 특정 키워드나 날짜 기준으로 일기 검색 가능

음성 입력 지원: 음성으로 일기 작성

다크 모드 지원: 사용자 환경에 맞춘 테마 제공

데이터 백업 및 복원 기능: 클라우드 연동을 통한 데이터 보호

MVP를 먼저 완성하고 사용자 피드백을 받아 점진적으로 기능을 확장할 예정입니다.
```

# 5. 프롬프트 업데이트

```
PRD에 핵심 기능으로 추가하고 싶은게 있습니다.
일기를 생성할 때, 키워드를 입력하는 input Field를 추가하고 싶습니다.
그래서 이 키워드를 기반으로 자동으로 일기를 생성해주는 기능을 추가하고 싶습니다.
이 기능을 위한 기술 스택도 추가해주세요.
```

# 6. PRD.md 파일 생성

# 7. .cursorrules 파일 생성

# 8. 디렉터리 구조 생성

```
> tree /F | findstr /V "node_modules"

```

# 9. Cursor에 COMPOSER에 요청

```
@PRD.md , @디렉터리 구조 를 참고해서 "A. 일기 작성 및 관리" 기능을 개발해줘.

```
