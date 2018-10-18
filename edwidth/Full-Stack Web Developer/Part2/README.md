## Full-Stack Web Developer - Part 2 [Training]

### Javascript 배열 forEach
Array.forEach()메소드는 배열 요소마다 한번씩 주어진 함수를 실행합니다  
연속적이지 않은 배열에 대해서는 호출되지 않습니다
```
arr.forEach(function () {
  logic;
});
```

### Javascript 배열 toString.call() vs typeof
**toString.call()**  
toString을 사용하여 객체 classSection을 탐지할 수 있습니다.  
Object.prototype.toString()을 사용하려면 이 객체에 Function.prototype.call()을 호출하고 검사 할 객체를 첫 번째 매개 변수로 전달합니다.  
toString.call()이 일반적인 모든 자바스크립트 타입을 확인해주는 방법 중에 하나입니다.  
> [MDN 바로가기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)  

**typeof**  
typeof 연산자는 피연산자의 타입을 가리키는 문자열을 반환합니다.
> [MDN 바로가기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof)

아래의 코드를 실행하면 어떤 결과가 나올까요?
```
var result = "ab:cd".split(":");  
console.log(typeof(result));  
console.log(toString.call(result));
```



### scope 4가지
- compile : **컴파일 할 때 필요**. 테스트 및 런타임에도 클래스 패스에 포함. scope설정을 하지 않으면 기본 값으로 설정
- runtime : **런타임에 필요**. JDBC 드라이버 등이 예가 됩니다. 컴파일 시에는 필요하지 않지만, **실행 시에 필요한 경우**
- provided : **컴파일 시에 필요**하지만, 실제 런타임 때에는 컨테이너 같은 것에서 제공되는 모듈. servlet, jsp, api 등이 이에 해당. **배포시 제외**
- test : **테스트** 코드를 **컴파일 할 때** 필요. 테스트 시 클래스 패스에 포함되며, **배포시 제외**

### Maven Java Compiler JDK 1.8 사용하기
- pom.xml 추가
```
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-compiler-plugin</artifactId>
      <version>3.6.1</version>
      <configuration>
        <source>1.8</source>
        <target>1.8</target>
      </coufiguration>
    </plugin>
  </plugins>
</build>
```

### Maven JSTL 라이브러리 추가하기
- pom.xml 추가
```
<dependency>
  <groupId>javax.servlet</groupId>
  <artifactId>jstl</artifactId>
  <version>1.2</version>
</dependency>
```

### Maven WAS(Tomcat)의 서블릿 라이브러리 사용하기
- pom.xml 추가
```
<dependency>
  <groupId>javax.servlet</groupId>
  <artifactId>javax.servlet-api</artifactId>
  <version>3.1.0</version>
  <scope>provided>
</dependency>
```

### Maven JDBC ( MySQL 8.0.12 ) 사용하기 위한 방법
- pom.xml 추가
```
<dependency>
<groupId>mysql</groupId>
<artifactId>mysql-connector-java</artifactId>
<version>8.0.11<version>
<dependency>
```
- MySQL 8 Driver 얻기
```
Class.forName("com.mysql.cj.jdbc.Driver");
```

- MySQL 5 Driver 얻기
```
Class.forName("com.mysql.jdbc.Driver");
```

