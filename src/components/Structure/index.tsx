import { HTMLAttributes } from "react";
import cn from "classnames";
import * as style from "./structure.module.css";
import { Department } from "./Department";

export const Structure = ({className, ...props} : HTMLAttributes<HTMLDivElement>) => <section
    {...props}
    className={cn(style.root, className)}
/>;

Structure.Department = Department;
