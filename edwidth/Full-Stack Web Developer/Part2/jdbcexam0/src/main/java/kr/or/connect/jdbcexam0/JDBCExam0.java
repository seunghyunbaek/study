package kr.or.connect.jdbcexam0;
import kr.or.connect.jdbcexam0.dao.RoleDao;
import kr.or.connect.jdbcexam0.dto.Role;

public class JDBCExam0 {

	public static void main(String[] args) {
		RoleDao dao = new RoleDao();
		Role role = dao.getRole(100);
		System.out.println(role);
	}
}
