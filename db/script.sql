create database if not exists portfolio;
use portfolio; 

create table if not exists home_description(
    description_id int not null auto_increment,
    title varchar(100) not null,
    description varchar(300) ,
    avatar varchar(100) not null,
    link_cv varchar(100) not null,
    primary key(id)
);



