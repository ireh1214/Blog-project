<h2> 공부를 위해 블로그 프로젝트를 개설했습니다. </h2>

Issues에 들어가면 하루마다 진행된 프로젝트의 내역이 적혀있습니다. 
Node.js 하나만으로 백엔드와 프론트엔드 두 가지를 실행할 수 있는게 흥미롭네요...

<h3>주의사항 목록</h3>
* yarn, npm 중에서는 가급적 하나만 쓸 것. 서로 부딪힐 가능성이 있기 때문에 가급적이면 플러그인이나 라이브러리 설치는 하나만 진행한다.

* 어떤 라이브러리를 어떻게 사용하는지 알아보기 위해서는 공식 사이트를 들어가는 것이 가장 좋다.

* 만약에 다시 깃 클론으로 얘를 내려받았을 때는 <code>npm install</code>  로 노드모듈을 생성해주어야만 한다!

* git commit 혹은 pull에서 에러가 났다면 <code>git stash</code>를 사용하기. 

* 처음 git push를 할 때에 뭔가 문제가 생겼다면 처음에 만들었던 저장소와 부딪히는 경우가 있을 수 있으므로 싹 지우고 새로 레포지토리를 만들면 잘 되는 경우가 있음!! 처음엔 git과 연동이 잘 되는지 첫날에 push를 해보면서 확인해보는 것이 좋겠습니다.

* 모든 라이브러리들은 package.json에 저장됩니다. 이 안에서 -D. 그러니까, 개발용으로만 사용하겠다고 환경변수를 따로 지정한 것들은 dependencies 디렉터리 안에 저장됩니다.


---------------------------------------


<h3>라이브러리</h3>
설치한 라이브러리들을 공부 목적으로 정리해봅니다.
hpp, helmet - 말 그대로 헬멧입니다. 서버의 보안을 조금 더 단단하게 해주는 목적입니다.

jsonwebtoken - json형식으로 웹 토큰을 만들어주는 형식입니다. 
이 토큰으로 로그인을 인증하고, 이 토큰이 없을 시에는 인증이 거부되었다는 메시지와 함께 로그인을 허용하지 않게 됩니다. 
JWT라고도 하는데요, JWT시스템에서 발급된 토큰은, 토큰에 대한 기본정보, 전달할 정보(로그인 시스템에서는 유저 정보 등…), 
그리고 토큰이 검증되었다는 것을 증명해주는 signature를 포함합니다.
다른 목적에서도 사용될 수는 있지만, 이 프로젝트에서는 회원 인증의 용도로 사용할 예정입니다. 

서치해보니 조금 더 자세한 정보도 나와있는 것 같은데 일단 이 정도로만 알아두겠습니다.



--------------------------------------

<h3>어떻게 하면 돼?</h3>
최상위폴더로 이동 -> <code>npm run dev</code>를 통해서 서버를 실행시킵니다. 이 때, MongoDB에 함께 연결됩니다. (그럼 postman 같은 곳에서 테스트도 해볼 수 있겠죠)
+) <code>  "scripts": {"dev": "nodemon ./server/server.js --exec babel-node"} </code> 환경변수 추가하는것도 잊지 말기

그 다음, <code>cd client</code> 로 클라이언트 폴더 (그쪽에 프론트엔드 담당하는 파일들을 몰아넣었음)들어간 담에, <code> npm run start </code> 으로 화면 켜기!!! 


--------------------------------------

<h3>공부 내용 - 리덕스(Redux)</h3>

리액트에 리덕스가 있어야 하는 이유가 뭘까? 
먼저 리덕스에 대해서는… 리덕스는! 상태를 효율적으로 관리할 수 있게 해주는 도구다.
복잡한 상태관리가 이루어지는 SPA(싱글페이지 애플리케이션) 에서 유용하게 사용된다.


모든 컴퓨터 프로그램은 일종의 상태머신이다. 초기 상태가 있고, 그것이 인간의 조작에 의해서
변경이 되는 과정을 프로그래밍이라고 한다. 어떻게 상태를 변화시키고, 어떻게 그에 따른 출력을 하는지.
어떻게 그것을 제어할 것인지, 그런 것을 하는 작업의 연속인 것. 당연히 웹 애플리케이션도 마찬가지다.

리덕스가 있는 덕분에 리액트 컴포넌트와 별개로 애플리케이션의 상태를 관리할 수가 있게 되었다.
리액트 컴포넌트와 별개로 애플리케이션의 상태를 관리할 수가 있게 되었다.
리액트 컴포넌트와 별개로… … 음? 나는… 뭔가 리덕스를 이해하려면 이 단어에서 실마리를 찾을 수 있지 않을까 하는 생각이 들었다.

리액트는 페이지 단위로 이동되는 것이 아닌, 원 페이지에 각각의 컴포넌트를 끼워넣는 방식의 SPA다.
그러니까, 화면에 뭐가 어떻게 들어가는지에 따라서 상관없이! 그런 건 상관 없이! 범위를 정할 수 있다는 거다.

예를 들면, A컴포넌트 -> B컴포넌트 -> C컴포넌트 -> D컴포넌트… 이렇게 A부터 D까지 컴포넌트를
이동하고, D에 주어야 하는 상태값이 있다고 가정해보자. 그렇다면 무조건 여러 번 클릭을 해서 D까지
넘어가야 하기에 무척 번거로울 것이다. 하지만 리덕스가 있다면, 컴포넌트는 신경쓰지 않고 상태관리가 가능하다.

컴포넌트를 신경쓰지 않고, 별개로 상태관리가 가능하다는 것은 바로 이럴 때 쓰는 말인 것 같다. 


리덕스는 주로 리듀서와 사가, 이 둘과 친구다. 셋이서 함께라면 상태 관리에 대해서는 웬만한 일이 없고서야
제대로 관리할 수가 있는 것이다. 근데 리듀서랑 사가가 왜 필요한지, 정확히 무슨 일을 하는지는 잘 이해가 되지 않아서 
내가 이해가 되고 난 다음에 다시 글을 써서 외워야겠다 ㄱ- 갱신될 예정..... 


<h3>공부 내용 - Context API</h3>

Context와 API는 따로 봐도 좋은 단어다. 원래는 따로 찢어져 있으니까…
context는 리액트 컴포넌트 트리 안에서, 전역적이라고 볼 수 있는 데이터들을 공유할 수 있도록 고안되었다. 
뭘 어떻게 하는 건지는 모르지만 API는 항상 우리가 편하게 기능을 쓸 수 있도록 도와줬으니 
이 Context를 쓸 수 있는 API를 사용한다면? 우리는 편하게 전역관리가 가능하다고 봐도 좋겠지?
 라고 대충 이해 중

