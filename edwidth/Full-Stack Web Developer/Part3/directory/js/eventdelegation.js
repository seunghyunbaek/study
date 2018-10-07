var log = document.querySelector(".log");

// var lists = document.querySelectorAll("ul > li");
// for(var i = 0, len = lists.length; i < len; i++) {
//     lists[i].addEventListener("click", function(evt) {
//         log.innerHTML = "IMG URL IS" + evt.currentTarget.firstElementChild.src;
//     });
// }
// 데이터가 늘어남에 따라 등록해야하는 이벤트가 늘어나게되므로 효율적인 방법은 아니다. 
// 그렇다면 어떤 방식으로 개선을 할 수 있을까?

var ul = document.querySelector("ul");
ul.addEventListener("click", function(evt) {
    // console.log(evt.target, evt.currentTarget); // target은 클릭되는 애, evt.currentTarget은 evt객체
    // console.log(evt.target.tagName, evt.currentTarget.tagName); 

    //target이 image이면 src를 추출해서 출력하는 코드를 만들어보시오.
    var target = evt.target; //객체를 캐시한다 그러는데 저장해두는게 중요합니다.
    if(target.tagName === "IMG") {
        console.log(target.src);
        log.innerHTML = "IMG URL은 " + target.src;
    } else if (target.tagName === "LI") {
        log.innerHTML = "LI 밑의 IMG URL은 " + target.firstElementChild.src;
    }
});

var a = document.createElement("li");
var b = document.createElement("img");
b.src = "https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/mobile_landing/DURM-344348087A67751S._V529853275_.jpg";
a.appendChild(b);

ul.appendChild(a);
