
package com.app.ordertableweb.domain.repositories;
import java.util.List;
import com.app.ordertableweb.domain.models.data.TableField;

public interface TableRepository {
    List<TableField> getTableFields(String tablename);
}

