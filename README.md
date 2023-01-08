# Repo 소개

본 repo는 JENFRA 홈페이지를 서비스 중입니다.

- 도메인
  - https://

## 목차

1. [프로젝트 빌드](#how-to-use)
2. [개발 규칙](#dev-rules)
   1. [모니터링](#monitoring)
   2. [브랜치](#branch)
   3. [커밋 메시지 형식](#commit)
   4. [반응형 기준](#responsive)
3. [쓰지 않는 packages 찾기](#npm-devcheck)

## 프로젝트 빌드 <a name="how-to-use"></a>

**프로젝트 version**

- node: v16.18.0
- npm: 8.15.0

**프로젝트 clone**

```
$ git clone git@github.com:ohcho-dev/jenfra-web.git
$ cd jenfra-web
$ git checkout dev
```

**npm 설치**

```
npm install
```

**개발 환경 실행**

```
npm run dev
```

**배포용 생성**

```
npm run build
```

**CI/CD**

## 개발 규칙 <a name="dev-rules"></a>

### 모니터링 <a name="monitoring"></a>

### 브랜치 <a name="branch"></a>

- product
  - 정의: 현재 라이브 서비스 코드와 동일 버전
  - 직접 커밋 no!
  - release branch 통해서 merge
- release
  - 정의 : 운영 서버 배포 이전 최종 테스트를 위해 사용하는 버전
  - 직접 커밋 no!
  - develop branch 통해서 merge
- dev
  - 정의 : 이 브랜치에서 feature or fix branch 따고 개발해서 pr/merge 진행
  - 직접 커밋 no!
- feature/_ , fix/_
  - 정의 : 협업을 위해 dev브랜치로부터 상황(feature, fix, chore 등)에 맞게 개개인의 브랜치를 생성하여 개발 진행

### 커밋 메시지 형식 <a name="commit"></a>

깃 커밋 메시지 앞에 어떤 유형의 커밋인지 정의를 권장합니다.

- feat: 기능 개발
- fix: 버그 픽스
- refact: 리팩토링
- typo: 문구 수정
- test: 테스링 관련
- docs: 문서 작업
- chore: 기타 todo
- rese: 조사 할 것들

### 반응형 기준 <a name="responsive"></a>

- 반응형 레이아웃은 768px을 기준으로 mobile/pc를 구분합니다.
- fontsize, width, height, margin, padding, lineheight 값은 css 2벌 코딩 방지를 위해 rem 단위 사용을 원칙으로 합니다.
- 디자인 파일은 768px을 기준으로 작업 요청하였습니다.
- 1rem = 10px
- globals.css 파일 참고!
