# axe-core

[![Greenkeeper badge](https://badges.greenkeeper.io/dequelabs/axe-core.svg)](https://greenkeeper.io/) [![CircleCI](https://circleci.com/gh/dequelabs/axe-core.svg?style=svg)](https://circleci.com/gh/dequelabs/axe-core)

[![License](https://img.shields.io/npm/l/axe-core.svg)](LICENSE)
[![Version](https://img.shields.io/npm/v/axe-core.svg)](https://www.npmjs.com/package/axe-core)
[![Total npm downloads](https://img.shields.io/npm/dt/axe-core.svg)](https://www.npmjs.com/package/axe-core)
[![Commits](https://img.shields.io/github/commit-activity/y/dequelabs/axe-core.svg)](https://github.com/dequelabs/axe-core/commits/develop)
[![GitHub contributors](https://img.shields.io/github/contributors/dequelabs/axe-core.svg)](https://github.com/dequelabs/axe-core/graphs/contributors)
[![Join the chat at https://gitter.im/dequelabs/axe-core](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/dequelabs/axe-core?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Package Quality](http://npm.packagequality.com/shield/axe-core.svg)](http://packagequality.com/#?package=axe-core)

Axe는 웹 사이트, 웹 기반 사용자 인터페이스(UI)를 위한 접근성 테스트 엔진으로 가볍고 빠르며 안정적입니다. 
기존의 모든 테스트 환경과 호환(통합)되도록 설계 되어 일반 기능 테스트와 함께 접근성 테스트를 자동화 할 수 있습니다.

[axe 뉴스](https://hubs.ly/H0fsN0b0)에 가입하면 Axe의 기능, 
향후 릴리즈 및 이벤트에 대한 최신 정보를 구독할 수 있습니다.

## 철학

개발자가 접근성을 고려해 개발하고, 개발 과정에서 접근성을 점검(검사)해야, 
웹은 접근 가능(acceible)하고 포괄적인 공간(inclusive space)이 될 수 있습니다.

자동화 된 접근성 도구는 점검 과정에 쏟는 시간을 줄여주며, 접근성에 대한 지식이 부족한 개발자 또는 
팀에 실제 발생한 접근성 이슈에 집중하게 합니다. 안타깝게도 대부분의 접근성 도구는 개발 프로세스 
마무리 시점에 점검하도록 되어 있으며 명확하고 일관된 결과를 제공하지 않아, 서비스 배포에 
앞서 야기된 접근성 이슈로 좌절하게 하거나 서비스 배포를 지연시킵니다.

Axe는 웹 개발이 실제로 어떻게 작동하는지 반영하기 위해 만들어졌습니다. 개발자 또는 팀 모두가 사용하는 
최신 브라우저, 도구, 테스트 환경에서 작동합니다. Axe를 사용하면 단위(unit), 통합(integration), 브라우저(browser) 테스트 등
테스트의 일부로 접근성을 점검 할 수 있습니다. 개발 프로세스 초기부터 접근성 테스트 환경을 구축하면 시간과 비용을 아낄 수 있고, 
무엇보다 배포 전 오는 좌절감에서 해방될 수 있습니다.

## Axe 소개

- Axe는 오픈 소스입니다.
- Axe는 버그가 없습니다.
- Axe는 최신 브라우저, 오늘날 사용되는 모든 도구, 프레임 워크, 라이브러리 환경에서 작동되도록 설계되었습니다.
- Axe는 메이저 접근성 벤더인 [Deque Systems](https://www.deque.com)에서 적극적으로 후원합니다.
- Axe는 기존의 자동화 테스트 도구와 통합해 사용할 수 있습니다.
- Axe는 평가 콘텍스트(evaluation context)에 따라 실행할 규칙(rules)을 자동으로 결정합니다.
- Axe는 인-메모리 픽스처(in-memory fixtures), 정적(static) 픽스처, 통합 테스트와 무한(infinite depth) iframe을 지원합니다.
- Axe는 구성이 매우 용이(highly configurable) 합니다.

## Axe 시작하기

Axe를 사용하기 위한 첫번째 단계는 `axe-core` 패키지를 다운로드 하는 것입니다.

```console
npm install axe-core --save-dev
```

접근성 검사가 필요한 iframe 또는 픽스처, 테스트 시스템에 `axe.min.js` 파일 호출 코드를 추가합니다.

```html
<script src="node_modules/axe-core/axe.min.js"></script>
```

테스트의 각 포인트에 새롭게 그려질 UI의 부분이 보이거나 노출되도록 호출 코드를 추가합니다.

```js
axe.run((err, results) => {
  if (err) throw err
    ok(results.violations.length === 0, '접근성 문제가 발생하지 않아야 합니다.')
    // 비동기 호출 완료
    // ...
})
```

## 브라우저 호환성

[axe-core API](doc/API.md)는 다음의 브라우저를 지원합니다.

- Microsoft Edge v40+
- Google Chrome v42+
- Mozilla Firefox v38+
- Apple Safari v7+
- Internet Explorer(이하 IE) v9-11

지원(support)이란? 버그를 수정하고 각 브라우저를 정기적으로 테스트 시도하는 것을 말합니다.
모든 풀 리퀘스트(pull request) 요청마다 Firefox, Chrome, IE 11만 테스트 됩니다.

[JSDOM](https://github.com/jsdom/jsdom)에 대한 지원은 제한됩니다. 
JSDOM과 호환 문제가 발생할 경우, 해당 규칙을 제외하고 테스트 하는 것이 좋습니다.
예를 들어 `color-contrast` 규칙은 JSDOM에서 작동하지 않는 것으로 알려져 있습니다.
그리고 더 이상 사용되지 않는 Shadow DOM v0 구현은 지원하지 않습니다.

## 접근성 규칙

axe-core에서 실행 가능한 전체 규칙 목록은 [doc/rule-descriptions.md](./doc/rule-descriptions.md)을 참고하세요.

## API 패키지 콘텐츠

[axe-core API](doc/API.md) 패키지 구성

- `axe.js` - 테스트 중인 웹 사이트에 포함되어야 하는 JavaScript 파일
- `axe.min.js` - 위 파일을 최적화 한 압축 파일

## 다국어 지원

 <langcode>.json.. 기본 설정 대신이 로케일을 사용하여 ax를 빌드하려면 다음과 같이 --lang플래그로 ax를 실행하십시오 .

Axe는 다국어를 지원합니다. `./locales` 디렉토리에 언어 로케일 파일을 추가해 사용할 수 있습니다. 
이 파일은 `<langcode>.json` 방식으로 이름이 지정 되어야 합니다. 기본 언어(en) 설정 대신 
특정 언어를 사용해 Axe로 빌드하려면 `--lang` 플래그를 추가합니다.

```sh
$ grunt build --lang=ko
```

빌드 명령을 수행하면 `axe.<lang>.js`, `axe.<lang>.min.js` 파일이 생성됩니다. 
로컬라이즈 된 버전을 빌드 하려면 `--all-lang` 플래그를 사용합니다.

새 번역 파일을 만들려면 `grunt translate --lang=<langcode>` 명령을 실행합니다. 
그러면 `./locales` 디렉토리에 번역 할 기본 영어 텍스트가 있는 json 파일이 생성됩니다. 
axe-core는 다국어 지원을 환영합니다. 기고 방법에 대한 자세한 내용은 아래 기고 섹션을 참조하세요.

기존 번역 파일을 업데이트하려면 `grunt translate --lang=<langcode>` 명령을 다시 실행하세요. 
영어로 사용 된 새 메시지가 추가되고 영어로 사용되지 않은 메시지는 제거됩니다.

또는 `axe.configure()` 설정에 `locale` 객체를 설정해 런타임에 적용할 수 있습니다.
`locale` 객체는 `./locales` 디렉토리에 있는 json 파일과 형식이 같아야 합니다.

```js
axe.configure({
	locale: {
		lang: 'ko',
		rules: {
			accesskeys: {
				help: "accesskey 속성 값은 고유해야 합니다.",
				description: "모든 accesskey 속성 값이 고유한지 확인합니다."
			},
			// ...
		},
		checks: {
			abstractrole: {
				pass: "추상 역할은 직접 사용하지 않습니다.",
				fail: "추상 역할은 직접 사용할 수 없습니다."
			},
			'aria-errormessage': {
				// 참고: doT(https://github.com/olado/dot) 템플릿을 지원합니다.
				pass: "지원되고 있는 aria-errormessage 기술을 사용하고 있습니다.",
				fail: "aria-errormessage 값{{~it.data:value}} {=value}{{~}}는 메시지를 공지하는 방법을 사용해야 합니다.(예를 들어, aria-live, aria-describedby,role=alert 등)"
			}
			// ...
		}
	}
});
```

## ARIA 역할 및 속성

axe가 지원하는 ARIA 역할, 속성 전체 목록은 [axe-core ARIA 지원](./doc/aria-supported.md)을 참고하세요.

## 기여

[Axe-core 규칙 제안 가이드](./doc/rule-proposal.md)를 참고하세요.

[아키텍처 문서](./doc/developer-guide.md)를 참고하세요.

[기여 문서](CONTRIBUTING.md)를 참고하세요.

## axe-core를 사용한 프로젝트

[axe-core를 사용한 프로젝트 리스트](doc/projects.md)

## 감사의 말

shadow DOM 지원을 위해 포함 된 [css-selector-parser](https://www.npmjs.com/package/css-selector-parser)를 구현한 Dulin Marat에게 감사드립니다.

[Slick Parser](https://github.com/mootools/slick/blob/master/Source/Slick.Parser.js)의 기여 덕분에 Shadow DOM 지원 코드에서 일부 알고리즘을 구현하여 사용할 수 있었습니다.