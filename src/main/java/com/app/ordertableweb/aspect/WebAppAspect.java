
package com.app.ordertableweb.aspect;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.*;
import org.aspectj.lang.annotation.After;
@Aspect
@Component
public class WebAppAspect {
    @Before("execution(* com.app.ordertableweb.controllers.*.*(..))")
    public void beforeControllerMethods() {
        // Write here the logic to be executed before the target method is executed
        System.out.println("Before executing controller methods...");
    }
    /*
    @Before("execution(public void com.app.ordertableweb.domain.models.repositories.AccountDao.get(..))")
    public void beforeAddAccountAdvice() {
        System.out.println("=======>>> Executing @Before advice on public void com.app.ordertableweb.domain.models.sessions.repositories.AccountDao.get(..)");
    }
    
    @Before("execution(public * com.app.ordertableweb.domain.*.*.get*(..))")
    public void beforeGetAdvice() {
        System.out.println("=======>>> Executing @Before advice on public * com.app.ordertableweb.domain.*.*.get*(..)");
    }
    @Before("execution(public * com.app.ordertableweb.domain.*.*.save*(..))")
    public void beforeSaveAdvice() {
        System.out.println("=======>>> Executing @Before advice on public * com.app.ordertableweb.domain.*.*.save*(..)");
    }
    @Before("execution(public * com.app.ordertableweb.domain.*.*.delete*(..))")
    public void beforeDeleteAdvice() {
        System.out.println("=======>>> Executing @Before advice on public * com.app.ordertableweb.domain.*.*.delete*(..)");
    }
    
    @After("execution(public * com.app.ordertableweb.domain.*.*.get*(..))")
    public void afterGetAdvice() {
        System.out.println("=======>>> Executing @After advice on public * com.app.ordertableweb.domain.*.*.get*(..)");
    }
    @After("execution(public * com.app.ordertableweb.domain.*.*.save*(..))")
    public void afterSaveAdvice() {
        System.out.println("=======>>> Executing @After advice on public * com.app.ordertableweb.domain.*.*.save*(..)");
    }
    @After("execution(public * com.app.ordertableweb.domain.*.*.delete*(..))")
    public void afterDeleteAdvice() {
        System.out.println("=======>>> Executing @After advice on public * com.app.ordertableweb.domain.*.*.delete*(..)");
    }
    */
}

