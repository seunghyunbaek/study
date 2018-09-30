// 배열의 선언방법에는 [], new Array()와 같은 방법이 있지만 똑같은 동작을하며 성능차이도 없기에 []를 주로 사용합니다
// 배열안에 뭐든 들어갈 수 있으며, 중첩된 형태도 가능하다
var a = [1,2,3, "hello", null, true, [[{1:0}]]];
console.log(a.length);


var a = [4];
a[1000] = 3; // 이렇게 만들면 결과가 어떨까요?
console.log(a.length); 
console.log(a[500]);


a.push(5); // push 메소드를 통해 뒤로 순차적으로 값을 추가할 수 있다.
console.log(a.indexOf(3)); // 배열내에 특정원소를 포함하고 있는지 확인 할 수 있다.


var origin = [1,2,3,4];
var result = origin.concat(2,3);  // 배열을 합칩니다. 
console.log(origin, result); // concat을 사용해도 origin은 변하지 않는다.


var result2 = [...origin, 2,3]; //  스프레드 오퍼레이터 - 열거 가능한 오브젝트를 하나씩 전개합니다 
console.log(origin, result2);       // 변수 앞에 '...' 찍어서 선언합니다.
                                    // ES2015에 있다. 참고로 알고 있자

    // 배열의 메소드 중에는 새로운 배열을 반환하는 것도 있으니 주의하자


// origin과 changed는 같은원소를 가지는데 아래의 결과는 어떻게 될까?
var changed = origin.concat();  // 새로운 배열을 반환하거나, 원래 배열의 값을 변경시키는 메서드들이 있으니 주의
console.log(origin == changed); // concat은 원래 배열은 그대로 있고 합쳐진 새로운 배열을 반환합니다.


// function으로 arrow 함수라는것도 ES6에 있다.
// 그전에 신택스(Syntax:문법)인 이 방법도 있다.
// 구형함수, 레거시 라고도 할 수 있으나 이런 모습이 아직은 쓰이고 있으니 알아두자
changed.forEach(function(v,i,o) { // v : value, i: index, o:object  
    console.log(v);
}); //forEach()는 함수를 동작하는 함수이다
console.log();

// ES6 의 arrow로 표현한 식
changed.forEach((v, i, o) => {
    console.log(v);
});


// map
var newArr = ["apple","tomato"].map(function(value,index){
    return index + "번째 과일은" + value + "입니다";
});
console.log(newArr);

var mapped = changed.map(function(v) {
    return v *2; // changed의 원소를 돌면서, 값을 변경시킨 후에 새로운 배열로 만들어서 반환한다. 
});
console.log(mapped, changed);
// forEach, map은 function을 인자로 받는 함수이고, map은 새로운 배열을 반환한다.
// 데이터 조작시 많이 사용되고 있습니다.
// 가독성도 좋고, for문과 같이 실수도 줄이기 때문에.
// for나 while문보다 많이 쓰이니 기억하면 좋습니다. 
// forEach, map, filter메서드는 반드시 이해해야 합니다