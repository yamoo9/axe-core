# axe-core가 지원하지 않는 ARIA 역할(role) 및 속성(aria-*)

각 플랫폼과 스크린 리더 및 기타 보조 기술을 통해 접근 할 수 있는 웹 테크놀로지 기능은 모두 파악하는 것은 어렵습니다. 
axe-core는 문제를 일으키는 것으로 알려진 접근성 기능을 사용할 때 문제를 제기하여 이 작업 중 일부를 수행합니다.

이 문서는 axe-core가 지원하지 않는 ARIA 1.1 기능 목록이 포함되어 있습니다. 자세한 내용은 
["axe의 접근성 지원에 대해"](https://www.deque.com/blog/weve-got-your-back-with-accessibility-supported-in-axe/ "We’ve got your back with “Accessibility Supported” in axe") 문서를 참고하세요.

접근성 지원을 결정하는 방법에 대한 자세한 내용은 ["규칙 지원 결정 방법"](accessibility-supported.md "How we make decisions on rules") 문서를 참고하세요.

## 속성

| `aria-*` 속성   | axe-core 지원 |
| ---------------- | ---------------- |
| `aria-describedat` | No               |
| `aria-details`     | No               |
