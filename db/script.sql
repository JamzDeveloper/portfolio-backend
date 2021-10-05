create database if not exists portfolio;
use portfolio; 

create table if not exists home_description(
    description_id int not null auto_increment,
    title varchar(100) not null,
    description varchar(300) ,
    avatar varchar(100) not null,
    link_cv varchar(100) not null,
    status boolean not null,
    createdAt timestamp ,
    updatedAt timestamp ,
    primary key( description_id)
);
create table if not exists projects(
    project_id int not null auto_increment,
    title varchar(45) not null,
    image varchar(100) not null,
    description varchar(300) not null,
    link_repository varchar(100) not null,
    link_project varchar(100) not null,
    featured boolean not null,
    createdAt timestamp ,
    updatedAt timestamp ,
    primary key(project_id)
);
create table if not exists technologies(
    technology_id int not null auto_increment,
    name varchar(45) not null,
    icon varchar(100) not null,
    skill boolean not null,
    createdAt timestamp ,
    updatedAt timestamp ,
    primary key(technology_id)
);
create table if not exists technologies_has_projects(
    project_id int not null,
    technology_id int not null,
    createdAt timestamp ,
    updatedAt timestamp ,
    foreign key(technology_id) references technologies(technology_id),
    foreign key(project_id) references projects(project_id)
);





