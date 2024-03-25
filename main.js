const clock = document.querySelector(".clock")

function Darkmode() {
    var element = document.body
    element.classList.toggle("dark-mode")
}

function showHtml() {
    document.getElementById("fig").src = "img/html.png"
    document.getElementById("desc").innerHTML =
        "<b>HTML</b>는 하이퍼 텍스트 마크업 언어는 웹 페이지 표시를 위해 개발된 지배적인 마크업 언어다. 또한, HTML은 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라 링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공한다. 참고영상 : https://www.youtube.com/watch?v=X_4I12isbS4&list=PL-eeIUD86IjQuP9iDbQn_1eMHlPB_qdgY&index=3 "
}

function showCss() {
    document.getElementById("fig").src = "img/css.png"
    document.getElementById("desc").innerHTML =
        "<b>HTML</b>는 하이퍼 텍스트 마크업 언어는 웹 페이지 표시를 위해 개발된 지배적인 마크업 언어다. 또한, HTML은 제목, 단락, 목록 등과 같은 본문을 위한 구조적 의미를 나타내는 것뿐만 아니라 링크, 인용과 그 밖의 항목으로 구조적 문서를 만들 수 있는 방법을 제공한다. 참고영상 : https://www.youtube.com/watch?v=X_4I12isbS4&list=PL-eeIUD86IjQuP9iDbQn_1eMHlPB_qdgY&index=3 "
}

function showJs() {
    document.getElementById("fig").src = "img/js.jpg"
    document.getElementById("desc").innerHTML =
        "<b>JavaScript</b>는 자바스크립트는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용되며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다. 참고영상 : https://www.youtube.com/watch?v=X_4I12isbS4&list=PL-eeIUD86IjQuP9iDbQn_1eMHlPB_qdgY&index=3 "
}

function showReact() {
    document.getElementById("fig").src = "img/React.png"
    document.getElementById("desc").innerHTML =
        "<b>React</b>는 리액트는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다. 페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수된다. 리액트는 싱글 페이지 애플리케이션이나 모바일 애플리케이션 개발에 사용될 수 있다."
}

function hide() {
    document.getElementById("fig").src = ""
    document.getElementById("desc").innerHTML = ""
}

function getClock() {
    const date = new Date()
    const hours = String(date.getHours())
    const minutes = String(date.getMinutes())
    const seconds = String(date.getSeconds())

    clock.innerText = `${hours}:${minutes}:${seconds} `
}

getClock()
setInterval(getClock, 1000)
