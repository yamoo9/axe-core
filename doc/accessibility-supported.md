# 우리가 규칙을 결정하는 방법

선언문(manifesto)을 준수하고 개발자와 콘텐츠 제작자에게 유용하도록, 엄격하게 WCAG 2의 모든 규칙을 평가합니다. 
또한 [접근성 지원](https://www.w3.org/TR/WCAG20/#accessibility-supporteddef "accessibility supported")으로 알려진 WCAG 2의 규범적인 부분에 매우 관심을 가지고 있습니다.

## 접근성 지원 (Accessibility supported)

접근성 지원이란? 기술이 올바르게 널리 사용되며 자유롭게 이용할 수 있도록, 
모든 보조 기술(<abbr title="Assistive Technology">AT</abbr>)에 대해 모든 실행 가능한 플랫폼에서 작동되도록 해야 한다는 것을 말합니다.

axe는 현재 다음의 보조 기술 조합을 테스트 하여 지원합니다.

1. Mac OS X의 VoiceOver와 Safari 브라우저
1. iOS의 VoiceOver와 Safari 브라우저
1. Windows의 JAWS와 IE
1. Windows의 NVDA와 Firefox
1. Android의 Talkback과 Chrome 브라우저
1. Windows의 Dragon과 Firefox 브라우저

## ARIA에 미치는 영향

ARIA와 같은 일부 기술의 경우, 사양(spec)이 지원되기 전에 승인된 것과 사양에 부합하지만 아직 작동하지 않는 것 중에서 문제를 측정해야 한다는 [딜레마(dilemma)](https://ko.wikipedia.org/wiki/%EB%94%9C%EB%A0%88%EB%A7%88)가 있습니다. 이 작업을 수행 할 때 우리는 사양보다 접근성 지원 원칙을 선호하지만, 지원되지 않는 기능을 사용할 때의 영향을 받아 이 문제를 완화합니다. 아래는 우리가 수행하는 방법을 정리한 것입니다.

1. 모든 플랫폼에서 지원되는 경우: 허용(allow), 허용하지 않거나(else)
1. 접근성에 부정적인 영향을 미치지 않는 경우: 허용(allow), 허용하지 않거나(else)
1. 대체 수단(Fallback)이 있는 경우: 허용(allow), 허용하지 않거나(else)
1. 지원될 때까지 기능의 사용을 허용하지 않음.

또한 올바르지 않은 `aria-*` 속성 또는 속성 값은 접근성에 부정적인 영향을 미칠 가능성이 높으므로 허용하지 않습니다.
(이는 개발자에게 유용한 검수 도구가 됩니다)

## 모범 사례 (Best practices)

WCAG 2를 준수하기 위해 꼭 필요한 것은 아니지만, 애플리케이션의 사용성을 크게 향상시키는 모범 사례가 있음을 알고 있습니다. 
콘텐츠 개발자가 이를 식별하고 준수하는 데 도움이 되는 모범 사례 규칙을 개발합니다.

우리는 이 주제가 다소 논란의 여지가 있으며 우리가 가진 규칙은 모범 사례를 구성하는 것에 대한 Deque의 의견을 나타냅니다.