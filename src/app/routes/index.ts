import { Router } from "express";
import { BlogRoutes } from "../modules/Blog/blog.route";
import { ContactRoutes } from "../modules/Contact/contact.route";
import { ProjectRoutes } from "../modules/Project/project.route";
import { SkillRoutes } from "../modules/Skill/skill.route";
import { UserRoutes } from "../modules/User/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/projects",
    route: ProjectRoutes,
  },
  {
    path: "/skills",
    route: SkillRoutes,
  },
  {
    path: "/blogs",
    route: BlogRoutes,
  },
  {
    path: "/contacts",
    route: ContactRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
