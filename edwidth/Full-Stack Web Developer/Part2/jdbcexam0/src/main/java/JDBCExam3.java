import kr.or.connect.jdbcexam0.dao.RoleDao;
import kr.or.connect.jdbcexam0.dto.Role;

public class JDBCExam3 {

	public static void main(String[] args) {
		int insertCount = 0;
		
		Role role = null;
		RoleDao dao = new RoleDao();
		role = dao.getRole(300);
		
		insertCount = dao.deleteRole(role);
		
		System.out.println("delete:" + insertCount);
		
	}

}
