package LoanSharks.LoanSharks.Bank.App.Repository;

import LoanSharks.LoanSharks.Bank.App.Domain.Statement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface StatementRepository extends JpaRepository<Statement, Integer> {

    public List<Statement> findByName(String name);

    @Query(
            value = "SELECT * FROM STATEMENT WHERE USER_ID = ?1 AND (DATE < ?2 && ?3 <= DATE) ORDER BY DATE",
            nativeQuery = true
    )
    public List<Statement> findInDateRange(int user_id, Date start, Date end);

    @Query(
            value = "SELECT * FROM STATEMENT WHERE USER_ID = ?1 LIMIT ?2 OFFSET ?3",
            nativeQuery = true
    )
    public List<Statement> getAll(int user_id, int limit, int offset);

    public default List<Statement> getAll(int user_id) {
        return this.getAll(user_id, 1000, 0);
    }
}
