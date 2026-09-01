create database clinica0109;

create table medico(
crm_medico varchar(15) primary key,
nome_medico varchar(50));

insert into medico values("123","Murillo de Souza");
insert into medico values("1234","Julia Rocha");


create table paciente( 
id_paciente int primary key,
nome_paciente varchar(50));

insert into paciente values(1, "Guilherme Vilela");
insert into paciente values(2, "Otavio Pacheco");



create table consulta(
id_consulta int primary key,
data_consulta varchar(15),
crm_medico varchar(15),
id_paciente int,
foreign key(crm_medico) references medico(crm_medico),
foreign key(id_paciente) references paciente(id_paciente));


insert into consulta values(286, "08/09/2025","1234",2);
  

select * from paciente;

select nome_paciente from paciente where id_paciente = 1;

Se eu quero saber:
QUAL O NOME DO PACIENTE?
QUAL O NOME DO MÉDICO?
DATA QUE ESSE PACIENTE FOI CONSULTADO?????

-----------------------------------------------------

SELECT nome_medico,nome_paciente, data_consulta from medico, paciente, consulta;
  

select nome_medico,nome_paciente, data_consulta 
from medico, paciente, consulta where 
medico.crm_medico = consulta.crm_medico and
paciente.id_paciente = consulta.id_paciente;
  
select m.nome_medico,p.nome_paciente, data_consulta 
from medico m, paciente p, consulta c where 
m.crm_medico = c.crm_medico and
p.id_paciente = c.id_paciente;


Delete from paciente where id_paciente = 1;

NÃO EXISTE DELETE SEM WHERE!!!!!!





select nome_paciente, nome_medico, data_consulta from paciente, medico, consulta where paciente.id_paciente=consulta.id_paciente and medico.crm_medico= consulta.crm_medico;
   
alias = apelido!!!

select nome paciente, nome_medico, data_consulta from paciente p, medico m , consulta c where p.id_paciente=c.id_paciente and m.crm_medico= c.crm_medico;


delete from paciente where id_paciente=1;
