package kr.or.connect.jdbcexam0;
import kr.or.connect.jdbcexam0.dao.RoleDao;
import kr.or.connect.jdbcexam0.dto.Role;

public class JDBCExam3 {

	public static void main(String[] args) {
		int roleId = 500;
		
		RoleDao dao = new RoleDao();
		
		int deletetCount = dao.deleteRole(roleId);
		
		System.out.println("delete:" + deletetCount);
		
	}

}
