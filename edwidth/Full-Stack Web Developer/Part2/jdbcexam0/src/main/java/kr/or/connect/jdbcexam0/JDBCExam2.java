package kr.or.connect.jdbcexam0;

import kr.or.connect.jdbcexam0.dao.RoleDao;
import kr.or.connect.jdbcexam0.dto.Role;

public class JDBCExam2 {

	public static void main(String[] args) {
		int roleId = 500;
		String description = "CEO";
		
		Role role = new Role(roleId, description);
		
		RoleDao dao = new RoleDao();
		
		int updateCount = dao.updateRole(role);
		
		System.out.print(updateCount);
	}
}
