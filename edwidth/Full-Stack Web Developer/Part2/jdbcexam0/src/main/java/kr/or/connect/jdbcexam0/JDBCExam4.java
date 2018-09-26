package kr.or.connect.jdbcexam0;

import java.util.List;

import kr.or.connect.jdbcexam0.dao.RoleDao;
import kr.or.connect.jdbcexam0.dto.Role;

public class JDBCExam4 {

	public static void main(String[] args) {
		RoleDao dao = new RoleDao();
		
		List<Role> list= dao.getRoles();
		
		for(Role role : list) {
			System.out.println(role);
		}
	}

}
