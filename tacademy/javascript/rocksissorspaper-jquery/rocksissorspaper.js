//생성자 함수 Player
function Player(p) {
    if (!p) {
        p = 0;
    }
    this.point = p;
}

Player.prototype.toString = function() {
    switch(this.point) {
        case 0:
            return "가위";
        case 1:
            return "바위";
        case 2:
            return "보";
    }
};

//가위바위보버튼클릭시 실행
function playRockScissorsPaper(evt) {
    //어떤 버튼에서 이벤트가 발생했는지 확인하기
    var source = getEventSource(evt);
    //Player객체 생성
    var player = new Player();
    //이벤트가 발생한 target의 아이디에 따라 point에 값 부여
    switch(source.id) {
        case 'btnScissors':
            player.point = 0;
            break;
        case 'btnRock':
            player.point = 1;
            break;
        case 'btnPaper':
            player.point = 2;
            break;
        default:
            return;
    }

    //0~2사이의 랜덤한 값을 가지는 Player객체 생성
    var computer = new Player(Math.floor(Math.random() * 3));
    var resultElement = document.getElementById('result');
    //player와 computer값을 비교
    if (player.point == computer.point) { //같은 값일경우
        resultElement.innerHTML = '플레이어: ' + player + ' vs 컴퓨터: ' + computer + ' => 비겼습니다!!!';
    } else {
        if ((player.point + 1) % 3 == computer.point) {
            resultElement.innerHTML = '플레이어: ' + player + ' vs 컴퓨터: ' + computer + ' => 졌습니다!!!';
        } else {
            resultElement.innerHTML = '플레이어: ' + player + ' vs 컴퓨터: ' + computer + ' => 이겼습니다!!!';
        }
    };
}

//초기화 함수
function init() {
  //ID가 game인 엘리먼트를 찾아서 'click'이벤트발생시 playRockScissorsPaper이벤트핸들러 등록
    var gameElement = document.getElementById('game');
    addListener(gameElement, 'click', playRockScissorsPaper);
}

//크로스브라우징에따른 이벤트 리스너등록
function addListener(el, ev, handler) {
    if (el.addEventListener) {
        el.addEventListener(ev, handler, false);
    } else {
        el.attachEvent('on' + ev, handler);
    }
}

function getEventSource(evt) {
    if (evt.target)
        return evt.target;
    else
        return window.event.srcElement;
}

addListener(window, 'load', init);
