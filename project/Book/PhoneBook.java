
public class PhoneBook extends Book { //상속 Book
	Person[] phoneBook;
	
	public void PrintBook() {} //상속받은 메소드
	public void AddPerson() {} //사람 추가하기
	public void DeletePerson() {} //사람 삭제하기
	public void FindPerson() {} //사람 찾기 ( 이름 or 번호 )
	public void EditPerson() {} //사람 수정하기
}
