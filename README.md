# 💳 react-payments

## 배포

[🌟스토리북 페이지 바로가기](https://6620c65c99e8a4a3cde004a4-yvosnpvxth.chromatic.com/)

[🌟배포 페이지 바로가기](https://badahertz52.github.io/react-payments/dist/)

## 구현

### step1

#### 구현 모습

<img  src="./readmeImages/step1.gif" height="400px" alt="step1 구현 모습"/>

#### 레이아웃 with 컴포넌트

<img src="./readmeImages/step1_layout.png"  height="400px"  alt="step1 레이아웃">

## 빌드 및 스토리북 테스트

### 빌드

```dash
npm run build
```

### 로컬 서버로 열기

```dash
npm run dev
```

### 스토리북 테스트

```dash
npm run storybook
```

## 기능 구현 목록

 <details>
  <summary> ✏️ 1단계 기능 구현 목록</summary>
  <div markdown="1">
  
### 카드 번호

- [x] 입력란에 카드 번호 입력
- [x] 입력값에 대한 유효성 검사
  - 유효성 검사
    - 16자리 (하나의 input에 4개의 숫자)
    - type: 0-9 정수
- [x] 유효성 검사 fail 시, 오류 메세지 보여줌
- [x] 유효성 검사 통과 시 카드 구별
  - 4로 시작 visa, 51~55로 시작하면 마스터카드, 그 외는 기타
- [x] 카드 상태 업데이트

### 유효기간

- [x] 입력란에 월/연도 번호 입력
- [x] 입력란에 대한 유효성 검사
  - 유효성 검사
    - 월에 대한 입력값: 01-12
    - 연도에 대한 입력값: 정수 2자리
    - 사용 가능한 카드 유효 기간 : 이번달부터 인것만 유효하게
- [x] 유효성 검사 fail 시, 오류 메세지 보여줌
- [x] 유효성 검사 통과 시 카드 상태 업데이트

### 소유자 이름

- [x] 입력란에 이름 입력
- [x] 입력란에 대한 유효성 검사
  - 유효성 검사
    - 영어 소문자/대문자, 공백
    - 최소 1자 최대 100자
- [x] 유효성 검사 fail 시, 오류 메세지 보여줌
- [x] 유효성 통과 시, 소문자는 대문자로 변경 후 카드 상태 업데이트
  </div>
</details>

## 폴더 및 파일 구조

| 폴더       | 설명                                                     |
| ---------- | -------------------------------------------------------- |
| assets     | 사진등 관리                                              |
| components | 컴포넌트 (해당 컴포넌트와 이에 대한 스타일, hook을 관리) |
| constants  | 주요 상수 관리                                           |
| modules    | 전역 상태 관리                                           |
| styles     | 컴포넌트외의 스타일 관리                                 |

<br/>
<details>
  <summary> 🗂️ 컴포넌트  파일 구조 보기</summary>
  <div markdown="1">
```
📦components
 ┣ 📂CardExpirationPeriodInput
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜style.module.css
 ┣ 📂CardInput
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜style.module.css
 ┣ 📂CardInputContainer
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜style.module.css
 ┣ 📂CardNumbersInput
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜style.module.css
 ┣ 📂CardPreview
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜style.module.css
 ┣ 📂CardUserNameInput
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜style.module.css
 ┣ 📂FormErrorMessage
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜style.module.css
 ┣ 📂Input
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜style.module.css
 ┃ ┗ 📜useInput.ts
 ┗ 📜index.ts
```
  
  </div>
</details>
