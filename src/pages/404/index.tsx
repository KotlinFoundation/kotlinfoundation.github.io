import * as React from 'react';
import cn from 'classnames';
import { Link } from "gatsby";
import Button from '@rescui/button';
import {ArrowRightIcon} from '@rescui/icons';
import Layout from '../../components/Layout';
import Mascot404 from '../../images/404.png';
import * as styles from './style.module.css';

const NotFoundPage = () => {
    return (
        <Layout title={'404 Not Found'} withoutCta>
            <div className={styles.notFound}>
                <img className={styles.image} src={Mascot404} alt="Page not found image"/>
                <div className={styles.content}>
                    <h1 className="ktl-h1">Page Not Found</h1>
                    <div className={cn(styles.text, 'ktl-text-2', 'ktl-offset-top-m')}>
                        The page has another address or doesn't exist at all. Check that it’s written correctly or just
                        try to start from the homepage.
                    </div>
                    <Link to="/">
                        <Button mode="outline" className={styles.btn} icon={<ArrowRightIcon/>} iconPosition="right">Homepage</Button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default NotFoundPage;
