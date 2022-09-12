import * as styles from "./notFound.module.css";
import {Link} from "gatsby";
import Button from "@rescui/button";
import {ArrowRightIcon} from "@rescui/icons";
import * as React from "react";

export const NotFound = ({children}) => (
    <div className={styles.notFound}>
        <div className={styles.content}>
            {children}
            <Link to="/" className={styles.link}>
                <Button mode="outline" className={styles.btn} icon={<ArrowRightIcon/>} iconPosition="right">Homepage</Button>
            </Link>
        </div>
    </div>
);
