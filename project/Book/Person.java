
public class Person {
	private String name;
	private String number;
	
	public Person() {}
	public Person(String name, String number) {
		this.name = name;
		this.number = number;
	}
	
	public String getName() { //�̸� �˷��ֱ�
		return this.name;
	}
	public String getNumber() {//��ȣ �˷��ֱ�
		return this.number;
	}
	public void setName() {} //�̸� �����ϱ�
	public void setNumber() {}//��ȣ �����ϱ�
}
