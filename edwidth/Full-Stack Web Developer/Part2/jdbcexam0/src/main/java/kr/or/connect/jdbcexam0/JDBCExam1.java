package kr.or.connect.jdbcexam0;

import kr.or.connect.jdbcexam0.dao.RoleDao;
import kr.or.connect.jdbcexam0.dto.Role;

public class JDBCExam1 {
	public static void main(String[] args) {
		int roleId = 500;
		String description = "CTO";
		
		Role role = new Role(roleId, description);
		RoleDao dao = new RoleDao();
		
		int insertCount = dao.addRole(role);
		
		System.out.println(insertCount);
	}	
}
