## Full-Stack Web Developer - Part 2 [Training]

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

