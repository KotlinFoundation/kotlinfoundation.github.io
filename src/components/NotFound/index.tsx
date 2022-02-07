import * as styles from "./notFound.module.css";
import Mascot404 from "../../images/404.png";
import cn from "classnames";
import {Link} from "gatsby";
import Button from "@rescui/button";
import {ArrowRightIcon} from "@rescui/icons";
import * as React from "react";

export const NotFound = ({children}) => (
    <div className={styles.notFound}>
        <img className={styles.image} src={Mascot404} alt="Page not found image"/>
        <div className={styles.content}>
            {children}

            <Link to="/" className={styles.link}>
                <Button mode="outline" className={styles.btn} icon={<ArrowRightIcon/>} iconPosition="right">Homepage</Button>
            </Link>
        </div>
    </div>
);