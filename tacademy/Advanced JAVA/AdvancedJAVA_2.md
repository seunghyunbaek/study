# Advanced JAVA - Java의 이해
### 용어정리
Class(클래스) : 실행 시 오브젝트에 관한 소스 코드 즉, 청사진이라 할 수 있다  
Object(객체) : 클래스의 실체. instance  
Attribute(속성) : 객체의 데이터, Data Field, Data memeber, instance variable  
Method(메서드) : 객체의 행위를 나타내는 요소, algorithm, function, procedure  
Constructor(생성자) : 메서드와 비슷한 생성자는 새로운 객체를 초기화 하는데 사용한다  
Package(패키지) : 클래스 또는 하위 패키지를 그룹화 한 것  

### Source File Layout
Java Source File의 기본 문법  
package_declaration (패키지 선언)  
import_declaration (임포트 선언)  
class_declaration (클래스 선언)  

### Software Package
패키지는 큰 규모의 소프트웨어 시스템 관리를 용이하게 한다  
패키지는 클래스와 하부 패키지를 포함 할 수 있다  

### The package Statement (패키지 선언문)
패키지 선언 기본 문법
```
package top_pkg_name.sub_pkg_name *;
ex) package shipping.reports.Web;

소스 파일의 가장 첫 줄에 패키지 선언을 해주어야 한다
하나의 소스 파일당 하나의 패키지 선언을 한다
패키지 명은 계층적이며 "."에 의해 구분되어야 한다
별다른 패키지 선언이 없으면, 해당 클래스는 디폴트 패키지에 속하게 된다
```

### The import Statement ( 임포트 선언문 )
import문의 기본 문법
```
import pkg_name.sub_pkg_name.class_name;
  OR
import pkg_name.sub_pkg_name.*;

모든 클래스 선언 앞 부분에 쓴다
컴파일러에게 사용하는 클래스를 어디에서 찾을 것인지 말해준다
```

### Java Naming Conventions
* Classes : 클래스 이름은 UpperCamelCase의 형태로 표기(모든 단어의 첫 글자는 대문자)한다.
* Methods : 메서드 이름은 lowerCamelCase의 형태로 표기(맨 앞글자를 소문자로 표기하고 뒤에 따라붙는 단어의 앞글자는 모두 대문자)한다.
* Variables : 로컬 변수, 인스턴스 변수 및 클래스 변수도 lowerCamelCase로 작성. 변수명은 밑줄(_),$문자로 시작하지 않아야 한다. 임시 변수의 일반 이름은 정수의 경우 i, j, k, m, n이고 e는 문자를 나타냅니다.
* Constants : 상수는 밑줄로 구분된 대문자로 작성한다.


### Object, Variable, Type
Object : 객체, 실제로 존재하는 사물,  new keyword를 통해 생성  
Variable : 객체를 가리키는 이름. 예) 객체가 홍길동이라는 사람이라면 그 사람을 가리키는 이름이 변수에 해당한다  
Type : class를 나타낸다


### Java의 Class선언 : 객체를 만들기 위한 템플릿 역할
Class 선언의 기본 문법
```
접근 제한자          클래스 명
<modifiers> class <clas_name>
{
  <attribute_declarations> : 속성 선언
  <constructor_declarations> : 생성자 선언
  <method_declarations> : 메서드 선언
}
```


#### Interfaces ( 인터페이스 )
클래스의 "public interface"란 "client code"와 서비스를 제공하는 클래스 사이에서의 계약이다  
자바의 interface는 이러한 계약에 대한 메소드 구현은 없고, 형식적인 선언만 되어 있다  
아무 관계각 없는 많은 클래스들이 같은 인터페이스를 구현할 수 있다  
하나의 클래스는 여러 가지 인터페이스를 구현할 수 있다 ( 다중 상속은 불가능 : The diamond problem )


### Uses of Interface ( 인터페이스의 용도 )
클래스의 실제 내용을 보이지 않고, 프로그래밍 인터페이스만 공개하고자 할 때 사용한다  
억지로 두 클래스간에 관계를 강요할 필요 없이 관련없는 두개의 클래스에 공통점을 잡을 때 사용한다  
몇 개의 인터페이스를 구현한 클래스를 선언함으로써 다중 상속의 효과를 거두고자 할 때 사용한다


### Java의 Interface 선언
Interface 선언의 기본 문법
```
<modifers> interface <interface_name>
{
  <method_declarations>
}
```


### Interface 정의 및 사용
```
interface Bictycle {
  // wheel revolutions per minute
  void changeCadence(int newValue);
  void changeGear(int newValue);
  void speedUp(int increment);
  void applyBrakes(int decrement);
}

clas ACMEBicycle implements Bicycle {  // implements 키워드를 이용하여 인터페이스를 상속합니다
  // remainder of this class 
  // implemented as before
}
```


### Annotation 
Annotation의 용도
* 코드를 작성하고 제대로 잘 작성이 되었는지, 잘못 작성이 되었는지 컴파일러에게 검사할 수 있도록 정보를 제공해주는 역할이다.
* 소프트웨어 개발 툴이 빌드나 배치시 코드를 자동으로 생성할 수 있도록 정보를 제공한다
* 실행시(런타임시) 특정 기능을 실행하도록 정보를 제공한다

Built-in Annotation
* @Override : 메서드가 오버라이드 됐는지 검증한다
* @Deprecated : 메서드를 사용하지 말도록 유도한다
* @SuppressWarnings : 컴파일 경고를 무시하도록 한다
* @SafeVarargs : 제너릭 같은 가변인자 매개변수를 사용할 때 경고를 무시한다 (자바 7이상)
* @FunctionalInterface : 람다 함수등을 위한 인터페이스를 지정한다 (자바 8이상)

Meta Annotations
* @Retention : Annotation의 LifeTime입니다
* @Documented : 문서에도 Annotation의 정보가 표현됩니다
* @Inherited : 자식클래스가 Annotation을 상속 받을 수 있다.
* @Repeatable : 반복적으로 어노테이션을 선언할 수 있다
* @Target : 적용할 위치를 결정
  * @Target 적용 대상 : TYPE, ANNOTATION_TYPE, FIELD, CONSTRUCTOR, METHOD, LOCAL_VARIABLE, PACKAGE, PARAMETER


### Java의 Attribute 선언(객체의 상태를 나타냄)
Attribute 선언의 기본 문법
```
<modifiers> <type> <name>
```
### Java의 Method 선언(객체의 행위를 나타냄)
```
<modifiers> <return_type> <name> (<argument_list>)
{
  <statements>
}
```
### Java의 Constructor 선언
```
<modifiers> <class_name> (<argument_list>)
{
  <statements>
}
```


### Modifier : 범위 제한자
private : 같은 Class에서만 사용가능  
protected : 같은 class 또는 상속받은 class에서 사용가능  
public : 모든 class에서 사용가능  
없음 : packaged로 동일한 package에서만 사용가능  

abstract : class내부에 정의만 있고 구현이 없는 method를 정의하거나 이 메소드를 가진 Class  
native : JNI를 이용해 C로 구현한 코드를 호출하는 method  
synchronized : 동시 접근 제어  
transient : 메모리에만 존재함. Serializable시 값을 포함하지 않음  
volatile : 메모리에서 직접 값을 읽거나 씀. multi thread시에 synchronization 이슈 없이 변수를 사용  
strictfp : JVM에 관계없이 동일한 방식으로 부동소수점 연산을 실시하게 해줌  


### The Default Constructor ( 기본 생성자 )
하나의 클래스에는 반드시 적어도 하나 이상의 Constructor가 존재한다  
별도의 Constructor가 정의되면 Default Constructor는 사용할 수 없다  
Default Constructor는 constructor를 기술하지 않아도 new Xxx()해서 객체를 생성할 수 있게 한다  
프로그래머가 Constructor를 기술하지 않으면 Default Constructor가 자동적으로 생긴다  
* Default Constructor는 인수가 없다
* Default Constructor는 구현부가 없다  


[Tacademy Advanced JAVA]를 참고하여 공부한 내용을 정리하였습니다(https://tacademy.sktechx.com/live/player/onlineLectureDetail.action?seq=52)
