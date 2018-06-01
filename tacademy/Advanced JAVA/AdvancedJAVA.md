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

### Class as Blueprints for Objects ( 오브젝트를 위한 청사진으로서의 클래스 )
제조 분야에서 청사진이란 많은 물리적 디바이스들로부터 만들어진 하나의 디바이스에 대한 자세한 설명을 뜻한다  
소프트웨어에서, 클래스는 객체에 대한 설명이다  
클래스는 객체가 포함하고 있는 Data를 나타낸다  
클래스는 객체가 보여주는 기능을 나타낸다  
자바에서 클래스는 OOP(Object Oriented Programming)의 세가지 특성을 지원한다  
1. 캡슐화(encapsulation)
2. 상속(inheritance)
3. 다형성(polymorphism)

### Field and Method
Field (데이터 멤버 또는 멤버 변수) : 데이터는 클래스 또는 객체 내에 캡슐화됩니다 이 경우 정규 필드(인스턴스 변수)객체의 인스턴스에는 인스턴스변수가 있다  
Method (멤버 함수) : 서브루틴 및 데이터에 액세스 할 수있는 멤버 변수  

### 객체간 관계
객체간의 관계는 두가지로 분류 해 볼수 있습니다  
"IS-a" 와 "Has-a" 관계  
```
class Shape {
  ...
}

class Triangle extends Shape implements Drawable {
  Point points;
  ...
}

Is-a : Triangle은 Shape이다. Triangle은 Drawable이다  "~~은 ~~이다"
       Triangle t = new Triangle();
       Shape s = (Shape)t;
       Drawable d = (Drawable)t;

Has-a : Triangle은 Point를 가지고 있다   "~~은 ~~를 소유하다"
        Triangle t = new Triangle();
        Point p = t.points;
```


### Accessing Object Members ( 객체 멤버에 액세스하기 )
'객체를 가리키는 변수.멤버'  의 형태로 접근할 수 있다
```
thing1.setX(47);
thing1.x = 47; //x가 public 일 때만 속성(attribute)에 직접 접근 가능
```

### Inheritance ( 상속 )
상속은 새로운 클래스가 기존의 클래스의 자료와 이용할 수 있게 하는 기능  
상속을 받은 클래스를 (하위or 자식or 부or 파생)클래스 라고 하며 상속한 클래스를 (기반or 상위or 부모)클래스라고 한다

### Polymorphism ( 다형성 )
다형성은 많은 다른 형태를 가질 수 있는 성질을 말한다

### Overriding Method ( 재정의 )
상위 클래스로부터 상속 받은 메소드를 하위 클래스에서 수정할 수 있다  
하위 클래스는 기능적으로 새롭게 메소드를 만들 수 있다 하지만 아래 3가지는 같아야한다
1. Name
2. Return Type
3. Argument List


