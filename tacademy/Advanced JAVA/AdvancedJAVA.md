# Advanced JAVA - 객체지향 프로그래밍 방법론
### 컴퓨터 프로그래밍
컴퓨터 프로그래밍의 목적 : 특정 작업 수행을 자동화하거나 주어진 문제를 해결할 일련의 지침을 찾는 것 <br/>
추상화(abstraction) : 복잡한 자료, 모듈, 시스템 등으로부터 핵심적인 개념 또는 기능을 간추려 내는 것 <br/>
추상 데이터 유형(ADT) : 유사한 동작을하는 데이터 구조의 특정 클래스에 대한 수학적 모델

### 객체지향과 절차지향
객체 지향 프로그래밍 : 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 여러개의 독립된 단위, 즉 "객체"들의 모임으로 파악하고자 하는 것 <br/>
절차 지향 프로그래밍
* 때때로 명령형 프로그래밍과 동의어로 쓰이기도 하지만, 프로시저 호출의 개념을 바탕으로 하고 있는 프로그래밍 패러다임을 의미하기도 한다 
* 프로그램의 아무위치에서나 프로시저를 호출할 수 있는데, 다른 프로시저에서도 호출 가능하고 심지어는 자기 자신에서도 호출 가능하다

간단히 객체지향과 절차지향의 코드의 차이를 확인하겠습니다<br/>
도형의 넓이 구하기(절차지향)
```
struct { 
  int type;
  point *points;
} Shape; // Shape 구조체 선언

Shape s[100]; //Shpae 배열생성

sum = 0;
for (int i = 0; i < 100; i++) { // 수행되어야 할 연속적인 계산 과정을 포함하고 있음 (절차지향의 특징)
  switch(s[i].type) { //Shape.type으로 실행할 것을 구분
    case TRIANGLE:
      sum += ...
    case RECTANGLE:
      sum += ...
    case CIRCLE:
      sum += ...
}

print sum
```

도형의 넓이 구하기(객체지향)
```
abstract class Shape { //Shape class를 생성(추상화)
  abstact float calArea();
}

class Triangle extends Shape { //Shape를 상속받은 Triangle class 생성
  float calArea() {
    ...
  }
}

class Rectangle extends Shape { //Shapeㄹ르 상속받은 Rectangle 생성
  float calArea() {
    ...
  }
}

class Circle extends Shape { //Shapeㄹ르 상속받은 Circle 생성
  float calArea() {
    ...
  }
}

Shape s[100]; //Shape 배열 선언

for(int i = 0; i < 100; i++)
  sum += s[i].calArea(); //배열에 저장된 객체에 따른 calArea()가 실행
  // 각각의 객체는 메시지를 주고받고, 데이터를 처리할 수 있다
```

### Abstraction ( 추상화 )
객체와 프로시저들의 공통의 특징들을 골라내는 과정 <br/>
기능(Functions) - 알고리즘을 한 번만 작성하고 여러 상황에서 쓰일 수 있도록 한다 <br/>
객체(Objects) - 하나의 클래스에 관련 있는 속성(attribute)과 메서드(behaviors)를 그룹 짓는다 <br/>
프레임워크와 APIs - 복합적 동작을 지원하는 대규모의 객체집단

### Information Hiding ( 정보 은닉 )
문제점 : 클라이언트 코드에서 data에 직접적인 접근이 가능하다<br/>
해결 : 클라이언트 코드에서는 꼭 setter/getter를 통해서 접근하도록 만든다

### Encapsulation ( 캡슐화 )
객체와 기능, 즉 메소드와 데이터 등을 위해 필요한 모든 자원을 프로그램 객체내에 포함시키는 것 <br/>
구현된 클래스의 세부사항을 숨긴다  
사용자가 데이터에 접근하기 위해서는 반드시 인터페이스를 통하도록 한다  
코드 관리를 쉽게 만들어 준다  


### Object와 Class
Object(객체)
* 값을 가지고 식별자에 의해 참조되는 메모리상의 위치이다
* 객체는 변수, 함수 또는 데이터 구조가 될 수 있다
* 메모리에 생성된다
Class(클래스)
* 상태(멤버변수) 및 동작구현(멤버함수, 메서드)에 대한 초기 값을 제공하여 객체를 만드는데 사용할 수 있는 확장 가능한 템플릿
* 메모리에 로딩된다

