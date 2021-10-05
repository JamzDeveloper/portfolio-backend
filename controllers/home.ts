import { Request, Response } from "express";
import Home from "../models/home";
import Project from "../models/project";
import Technology from "../models/technology";
import technologiesHasProjects from "../models/technologiesHasProjects";

export const getdescription = async (req: Request, res: Response) => {
  const home = await Home.findAll({
    where: {
      status: 1,
    },
  });
  // console.log(home);
  // TODO: falta pedir los datos de proyectos, articulos y retos
  await technologiesHasProjects.findAll();
  const projects = await Project.findAll({
    include: [
      {
        model: Technology,
      },
    ],
  });
  console.log(projects);
  if (home) {
    res.json({
      description: home,
      project: projects,
      article: "",
      challenge: "",
    });
  } else {
    res.status(404).json({
      desc: "No description found",
    });
  }
};
