Advanced JAVA - Java keyword
---
### Modifier
modifier|Explanation
--------|-----------|
abstract|class내부에 정의만 있고 구현이 없는 method를 정의하거나 이 메소드를 가진 class (추상화)
final|클래스: 더이상 상속되지 않음, 메소드: 오버라이딩 불가능, 변수: 값이 변경되지 않는 상수
native|JNI를 이용해 C로 구현한 코드를 호출하는 method
private|같은 class에서만 사용가능
protected|같은 class 또는 상속받은 class에서 사용가능
public|모든 class에서 사용가능
없음|packaged로 동일한 package에서만 사용가능
static|변수와 메소드, 내부 클래스에 쓸 수있다, static이 붙은 변수와 메소드는 객체에 속하지 않고 클래스에 속한다
synchronized|동시 접근 제어
transient|메모리에만 존재함. Serializable시 값을 포함하지 않음
volatile|메모리에서 직접 값을 읽거나 씀. multi thread시에 synchronization이슈 없이 변수를 사용
stricfp|JVM에 관계없이 동일한 방식으로 부동소수점 연산을 실시하게 해줌

### The Default Constructor
* 하나의 클래스에는 반드시 적어도 하나 이상의 Constructor가 존재한다
* 별도의 Constructor가 정의되면 Default Constructor는 사용할 수 없다
* 프로그래머가 Constructo를 기술하지 않으면 Default Constructor가 자동적으로 생긴다
* Default Constructor는 constructor를 기술하지 않아도 new Xxx() 해서 객체를 생성할 수 있게 한다.

### Class Attribute ( static변수 == 클래스 변수 )
> static변수는 클래스의 모든 객체들 사이에서 공유된다

### Single Inheritance ( 단일 상속 )
* 클래스가 오직 하나의 클래스로부터 상속을 받는 것을 단일 상속이라고 부른다
* 단일 상속은 프로그램 코드를 더욱 확실하게 한다
* 인터페이스는 다중 상속의 이점을 제공해준다
```
Java 클래스의 기본 
<modifier> class <name> [extends <superclass>] {
  <declarations>
}
```
