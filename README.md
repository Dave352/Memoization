# React-boilerplate

프로젝트에 공통적으로 사용될 수 있는 초기 구성까지 구현되어 있어 새 프로젝트 작업시 템플릿처럼 사용할 수 있습니다.

Emotion (css prop 사용), mobx, 'src' 절대경로 사용 등 주로 사용하는 라이브러리 및 옵션이 설정 되있습니다

## 에러

"ERR_PNPM_PEER_DEP_ISSUES  Unmet peer dependencies" 에러가 뜨는 경우(<u>선택사항</u>)

프로젝트 루트 디렉토리 내에 .npmrc 파일을 만듭니다
.ci.npmrc파일의 내용을 복사, 붙여넣기 한 뒤 ${NPM_TOKEN}을 자신의 npm 토큰으로 수정합니다(또는 사용자 pc내 전역 .npmrc 파일을 수정합니다)

## React Testing Library를 이용해 유닛 테스트를 하고 싶다면

#### 참고자료

- https://codingwithmanny.medium.com/quick-vitest-setup-with-vitejs-react-typescript-bea9d3a01b07

- https://github.com/testing-library/jest-dom/issues/442#issuecomment-1163011282

1. vitest(vite 기반 유닛 테스트 프레임워크) 설치

   ```
   pnpm add -D vitest @testing-library/react jsdom @testing-library/user-event @testing-library/jest-dom @types/testing-library__jest-dom

   ```

2. 루트 디렉토리에 'vitest.setup.ts' 파일 추가, 아래 코드 복사
   ```
   // jest-dom adds custom jest matchers for asserting on DOM nodes.
   // allows you to do things like:
   // expect(element).toHaveTextContent(/react/i)
   // learn more: https://github.com/testing-library/jest-dom
   import '@testing-library/jest-dom'
   ```
3. `vite.config.ts` 파일 수정

   ```
   // BEFORE
   import { defineConfig } from 'vite'

   // AFTER
   import { defineConfig } from 'vitest/config'
   import react from '@vitejs/plugin-react'

   // https://vitejs.dev/config/
   export default defineConfig({
   // 생략...
   test: {
       globals: true,
       environment: 'jsdom',
       setupFiles: ['./vitest.setup.ts'],
       coverage: {
       provider: 'c8',
       },
   },
   })
   ```

4. package.json에 script추가

   ```
   "test": "vitest",
   "coverage": "vitest run --coverage"

   ```
