

package com.app.ordertableweb.infrastructure.persistence.hibernate;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.app.ordertableweb.domain.models.data.TableField;
import com.app.ordertableweb.domain.models.data.TableFieldCollection;
import com.app.ordertableweb.domain.repositories.TableRepository;

import java.util.*;

@Repository
public class HibernateTableRepository implements TableRepository {
	@Autowired
	private SessionFactory sessionFactory;

    @Override
    public List<TableField> getTableFields(String tablename) {
        String hql = "SELECT column_name, data_type " +
                     "FROM information_schema.columns " +
                     "WHERE table_name = :tablename";
        
        Session currentSession = sessionFactory.getCurrentSession();
        Query<Object[]> query = currentSession.createNativeQuery(hql);
        query.setParameter("tablename", tablename);

        List<Object[]> results = query.getResultList();

        List<TableField> tableFields = new ArrayList<>();
        for (Object[] result : results) {
            String columnName = (String) result[0];
            String dataType = (String) result[1];
            TableField field = new TableField(columnName, dataType);
            tableFields.add(field);
        }
        
        return tableFields;
    }
    public TableFieldCollection getTableFieldCollection(String tablename) {
    	TableFieldCollection tableFieldCollection = new TableFieldCollection();
    	
        try (Session currentSession = sessionFactory.getCurrentSession()) {
            currentSession.beginTransaction();

            // 使用HQL查询字段和数据类型
            String hql = "SELECT c.name, c.type FROM " + tablename + " c";
            Query<Object[]> query = currentSession.createQuery(hql, Object[].class);
            List<Object[]> results = query.getResultList();

            for (Object[] result : results) {
                String columnName = (String) result[0];
                String dataType = (String) result[1];

                tableFieldCollection.addField(columnName, dataType);
            }

            currentSession.getTransaction().commit();
        }

        return tableFieldCollection;
    }
}


