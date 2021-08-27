function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text);
}

function Container() {
  const [count, setCount] = React.useState(0); //count 상태값 추가

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8: "), /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 10
    }
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "\uAC10\uC18C")));
} //만들어둔 div 안에 렌더링을 하기 위한 작업 필요


const domContainer = document.getElementById('root');
ReactDOM.render(React.createElement("div", null, React.createElement(Container)), domContainer); //ReactDOM: html의 react-dom.development.js가 실행될 때 전역변수로 노출됨
//컴포넌트를 렌더링할 때도 리액트 요소로 만들어줌
//domContainer에 렌더링

/*function LikeButton(){
    const [liked, setLiked] = React.useState(false);
    //LikeButton의 liked라는 상태값을 추가했다. 기본값은 false이다.
    //liked: 버튼이 클릭될 때 현재 상태 저장, setLiked: 상태값 변경
    //React: html의 react.development.js가 실행될 때 전역변수로 노출됨
    //useState 함수: 컴포넌트의 상태값을 추가할 때 사용

    const text = liked ? "좋아요 취소" : "좋아요";
    //상태값에 따라서 보여줄 문구 지정

    return React.createElement(
        "button",
        { onClick: () => setLiked(!liked) },
        text
    );
    //createElement(): 리액트 요소를 반환 (리액트 요소: UI를 표현하는 가장 작은 단위)
    //내부에 문자열로 입력하면(ex."button") html에 해당하는 태그가 만들어진다
    //두 번째 매개변수: 속성값 (여기서는 onClick이라는 이벤트 핸들러가 필요하므로 13번째 줄처럼 입력, 클릭하면 상태값을 반전하도록 만듦)
    //세 번째 이후로는 children 입력. (버튼의 children으로 text를 출력)
}*/

/*
function Container(){
    const [count, setCount] = React.useState(0);    //count 상태값 추가
    return React.createElement(
        'div',  //div를 열고 그 안에 LikeButton 렌더링(37번줄)
        null,
        React.createElement(LikeButton),
        React.createElement(
            'div',  //div를 열고 현재 count 렌더링 + 버튼 두 개 추가해서 증가 감소
            {style: {marginTop: 20}},
            React.createElement('span', null, '현재 카운트: '),
            React.createElement('span', {style: {marginRight: 10}}, count),
            React.createElement(
                'button',
                { onClick: () => setCount(count + 1)},
                '증가',
            ),
            React.createElement(
                'button',
                { onClick: () => setCount(count-1) },
                '감소',
            ),
        )
    );
}*/