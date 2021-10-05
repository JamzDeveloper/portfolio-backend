--- get projects with technologies
select p.title,t.name from projects p
inner join technologies_has_projects pt
on p.project_id = pt.project_id
inner join technologies t
on pt.technology_id = t.technology_id
order by p.title;
