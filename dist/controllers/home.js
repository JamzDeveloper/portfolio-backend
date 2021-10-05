"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getdescription = void 0;
const home_1 = __importDefault(require("../models/home"));
const project_1 = __importDefault(require("../models/project"));
const technology_1 = __importDefault(require("../models/technology"));
const technologiesHasProjects_1 = __importDefault(require("../models/technologiesHasProjects"));
const getdescription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const home = yield home_1.default.findAll({
        where: {
            status: 1,
        },
    });
    // console.log(home);
    // TODO: falta pedir los datos de proyectos, articulos y retos
    yield technologiesHasProjects_1.default.findAll();
    const projects = yield project_1.default.findAll({
        include: [
            {
                model: technology_1.default,
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
    }
    else {
        res.status(404).json({
            desc: "No description found",
        });
    }
});
exports.getdescription = getdescription;
//# sourceMappingURL=home.js.map