var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function() {
    console.log(typeof this.responseText); // string이므로 우리가 사용하기에 제한적이다
    var jsonobj = JSON.parse(this.responseText); // 문자열이던것을 파싱을통해 JSON객체로 바꿀 수 있다.
    console.log(typeof jsonobj);
    console.log(jsonobj);
    console.log(jsonobj.favorites[1]);
    var fruit = jsonobj.favorites[1];
    var outside = document.querySelector("div.outside");
    outside.innerHTML += ("<span>"+fruit+"</span>");
});

oReq.open("GET", "./json.txt");
oReq.send();

// CORS 알아보기 [표준스펙], JSONP [비표준이지만 표준처럼쓰임]알아보기
