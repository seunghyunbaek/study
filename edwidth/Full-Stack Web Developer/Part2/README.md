## Full-Stack Web Developer - Part 2 [Training]

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

