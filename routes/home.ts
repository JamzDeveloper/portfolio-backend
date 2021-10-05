import { Router } from "express";
import {getdescription} from "../controllers/home";

const router = Router();

router.get('/',getdescription);


export default router;