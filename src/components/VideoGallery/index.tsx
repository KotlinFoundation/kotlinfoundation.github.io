import {useCallback, useMemo, useRef, useState} from 'react';

import {ArrowLeftIcon, ArrowRightIcon, RightIcon} from '@rescui/icons';

import Button from '@rescui/button';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';

import Popup from '@jetbrains/kotlin-web-site-ui/dist/popup';
import '@jetbrains/kotlin-web-site-ui/dist/popup.css';

import YoutubePlayer from '@jetbrains/kotlin-web-site-ui/dist/youtubePlayer';
import '@jetbrains/kotlin-web-site-ui/dist/youtubePlayer.css';

import * as styles from './index.module.css';
import classnames from 'classnames';

const videos = [
    {
        title: 'Kotlin Anniversary Documentary',
        url: 'https://www.youtube.com/watch?v=uE-1oF9PyiY'
    },
    {
        title: 'Kotlin 2021 Keynote',
        url: 'https://www.youtube.com/watch?v=3uVUDsoE_5U'
    },
    {
        title: 'Kotlin 2020 Keynote',
        url: 'https://www.youtube.com/watch?v=pD58Dw17CLk'
    },
    {
        title: 'Kotlin 2019 Keynote',
        url: 'https://www.youtube.com/watch?v=0xKTM0A8gdI'
    },
    {
        title: 'Kotlin 2018 Keynote',
        url: 'https://www.youtube.com/watch?v=PsaFVLr8t4E&list=PLQ176FUIyIUbVvFMqDc2jhxS-t562uytr&index=2'
    }
];

export const VideoGallery = () => {
    let [currentId, setCurrentId] = useState('');
    const sliderRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    const settings = useMemo(() => ({
        infinite: true,
        swipeToSlide: true,
        variableWidth: true,
        adaptiveHeight: true,
        centerMode: true
    }), []);

    /**
     * @workaround
     * FocusOnSelect doesn't works with infinite and variableWidth props.
     */
    const clickHandle = useCallback(
        i => {
            setCurrentId(getVideoId(videos[i].url));
            setIsOpen(true);
        },
        []
    );

    const handlePrev = useCallback(() => {
        sliderRef.current.slickPrev();
    }, []);

    const handleNext = useCallback(() => {
        sliderRef.current.slickNext();
    }, []);

    return (
        <div className={classnames(styles.wrapper, 'ktl-offset-top-xxl')}>
            <h2 className="ktl-h2 ktl-container">
                Look How We’ve<br /> Grown Up
            </h2>

            <Slider ref={sliderRef} {...settings} className={'ktl-offset-top-l'}>
                {videos.map((video, i) => (
                    <div key={video.url} className={styles.item}>
                        <div className={styles.media}>
                            <img src={preview(video.url)} alt={video.title} className={styles.image}/>
                            <Button icon={<RightIcon/>} className={styles.btn} onClick={() => clickHandle(i)}
                                    mode="rock" size="l" theme="dark"/>
                        </div>
                        <span className={classnames(styles.title, 'ktl-text-2')}>{video.title}</span>
                    </div>
                ))}
            </Slider>

            <div className={classnames(styles.navigation, 'ktl-container')}>
                <Button icon={<ArrowLeftIcon />} className={classnames(styles.arrow, styles.prev)} size='xs' mode='clear' onClick={handlePrev} />
                <Button icon={<ArrowRightIcon />} className={classnames(styles.arrow, styles.next)} size='xs' mode='clear' onClick={handleNext} />
            </div>

            <Popup
                isOpen={isOpen}
                onRequestClose={handleClick}
                showOuterCloseButton
            >
                <YoutubePlayer id={currentId} autoplay className={styles.player}/>
            </Popup>
        </div>
    );
};

function preview(url: string): string {
    return `https://img.youtube.com/vi/${getVideoId(url)}/maxresdefault.jpg`;
}

function getVideoId(url: string): string {
    return url.match(/\?v=([^=&]+)/)[1];
}
