FROM openjdk:8

COPY ./spring-example-project /usr/src/app
WORKDIR /usr/src/app
RUN ./mvnw package

EXPOSE 8080
ENTRYPOINT ["/bin/sh", "-c"]
CMD ["java -jar ./target/docker-example-1.1.3.jar"]