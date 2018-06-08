
public class Person {
	private String name;
	private String number;
	
	public Person() {}
	public Person(String name, String number) {
		this.name = name;
		this.number = number;
	}
	
	public String getName() { //이름 알려주기
		return this.name;
	}
	public String getNumber() {//번호 알려주기
		return this.number;
	}
	public void setName() {} //이름 수정하기
	public void setNumber() {}//번호 수정하기
}
