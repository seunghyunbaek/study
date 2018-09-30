var myFriend = {
    key: "value", 
    addition: [
        {name:'codesquad'}, 
        {age:2}
    ]
};

console.log(myFriend.key);
console.log(myFriend["key"]);
console.log(myFriend.addition); // addition 은 배열을 가지고
console.log(myFriend.addition[0].name);  // addition 배열안에 객체들은 인덱스를 맞춰서 찾는다.
console.log(myFriend.addition[1].age);
console.log(myFriend["addition"]);


console.log("========================");


// 객체를 루프로 찾을 때 for-in을 많이 사용합니다
for(value in myFriend) {
    console.log("forin1: " + value); //이러면 어떤 결과를 얻을 수 있을까요?
}
console.log("========================")
for(value in myFriend) {
    console.log("forin2: "+ value)
    console.log("forin2: " + myFriend[value]);
}
// for-in을 배열에서 사용할 수도 있지만 for-in문은 오브젝트 키 값이 있는 것을 탐색하기 위한 목적이라는 것을 알아두자.
// 배열을 탐색하는 법, 객체를 탐색하는법을 찾아보자
console.log("========================");


//Object.keys(); // 배열 형태로 반환한다.
console.log(Object.keys(myFriend));
Object.keys(myFriend).forEach(function(v) {
    console.log(myFriend[v]);
});
console.log("========================");



console.log("========================");
console.log("========================");
// 실습1 데이터
const widget = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
};

// 실습 1. 숫자 타입으로만 구성된 요소를 뽑아 배열을 만들어 보세요.
// 실행결과 : ["width", "height", "hOffset", "vOffset", "size", "hOffset", "vOffset"]
var list = [];
Object.keys(widget).forEach((v) => {
    if(typeof(widget[v]) == "object") {
        
        Object.keys(widget[v]).forEach((w) => {
            if(typeof(widget[v][w]) === "number") {
                list.push(w);
            }
        });

    } else {
        if(typeof(widget[v]) === "number") {
            list.push(v);
        }
    }
});
console.log(list);



// 실습2 데이터
var data = [{
	"id": 1,
	"name": "Yong",
	"phone": "010-0000-0000",
	"type": "sk",
	"childnode": [{
		"id": 11,
		"name": "echo",
		"phone": "010-0000-1111",
		"type": "kt",
		"childnode": [{
				"id": 115,
				"name": "hary",
				"phone": "211-1111-0000",
				"type": "sk",
				"childnode": [{
					"id": 1159,
					"name": "pobi",
					"phone": "010-444-000",
					"type": "kt",
					"childnode": [{
							"id": 11592,
							"name": "cherry",
							"phone": "111-222-0000",
							"type": "lg",
							"childnode": []
						},
						{
							"id": 11595,
							"name": "solvin",
							"phone": "010-000-3333",
							"type": "sk",
							"childnode": []
						}
					]
				}]
			},
			{
				"id": 116,
				"name": "kim",
				"phone": "444-111-0200",
				"type": "kt",
				"childnode": [{
					"id": 1168,
					"name": "hani",
					"phone": "010-222-0000",
					"type": "sk",
					"childnode": [{
						"id": 11689,
						"name": "ho",
						"phone": "010-000-0000",
						"type": "kt",
						"childnode": [{
								"id": 116890,
								"name": "wonsuk",
								"phone": "010-000-0000",
								"type": "kt",
								"childnode": []
							},
							{
								"id": 1168901,
								"name": "chulsu",
								"phone": "010-0000-0000",
								"type": "sk",
								"childnode": []
							}
						]
					}]
				}]
			},
			{
				"id": 117,
				"name": "hong",
				"phone": "010-0000-0000",
				"type": "lg",
				"childnode": []
			}
		]
	}]
}]

// 실습2 type이 sk인, name으로 구성된 배열만 출력합니다.
// 실행결과 : ["Yong", "hary", "solvin", "hani", "chulsu"]
var list2 = [];

function findSk(arr, dt) {
    Object.keys(dt).forEach((k)=> {
        console.log(k);
        if(dt[k] === "sk") {
            arr.push(dt["name"]);
        } else if (typeof(dt[k]) === "object") {
            findSk(arr, dt[k]);
        }
    });
};

findSk(list2, data);
console.log(list2);