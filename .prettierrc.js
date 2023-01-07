module.exports = {
  singleQuote: true, // ' '(작은 따옴표) 사용
  semi: true, // 코드의 끝에 세미콜론 사용
  useTabs: false, // 스페이스 대신 탭 사용
  tabWidth: 2, // 들여쓰기 공백 수
  trailingComma: 'all', // 모든 문법 끝에 ,(콤마) 사용
  printWidth: 100, // 한줄 최대 글자수
  arrowParens: 'always', // 화살표함수 () => 괄호 항상 사용    화살표 함수 단일 인자 시, 괄호 생략(avoid)
  bracketSpacing: true, //중괄호 내 공백 사용
  proseWrap: 'never', //마크다운 포맷팅 제외
  endOfLine: 'auto', //개행문자 유지 (혼합일 경우, 첫 줄 개행문자로 통일)
};

// https://prettier.io/docs/en/options.html  << 프리티어 속성 설명 링크
