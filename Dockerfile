FROM eclipse-temurin:17

LABEL maintainer="timothyfuapple@gmail.com"

WORKDIR /app


EXPOSE 8080

COPY target/ordertableweb.war /app/ordertableweb.war

ENTRYPOINT ["java", "-jar", "ordertableweb.war"]