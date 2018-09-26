package kr.or.connect.jdbcexam0;

import kr.or.connect.jdbcexam0.dao.RoleDao;
import kr.or.connect.jdbcexam0.dto.Role;

public class JDBCExam2 {

	public static void main(String[] args) {
		int insertCount = 0;
		
		Role role = new Role(300, "CIO");
		RoleDao dao = new RoleDao();
		insertCount = dao.updateRole(role);
		
		System.out.print(insertCount);
	}

}
