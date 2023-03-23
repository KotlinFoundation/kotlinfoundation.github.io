import {FC, ReactNode, useCallback, useMemo, useRef, useState} from 'react';
import cn from 'classnames';

import {ArrowLeftIcon, ArrowRightIcon, RightIcon} from '@rescui/icons';

import Button from '@rescui/button';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';

import Popup from '@jetbrains/kotlin-web-site-ui/out/components/popup';
import '@jetbrains/kotlin-web-site-ui/out/components/popup/index.css';

import YoutubePlayer from '@jetbrains/kotlin-web-site-ui/out/components/youtube-player';
import '@jetbrains/kotlin-web-site-ui/out/components/youtube-player/index.css';

import * as styles from './index.module.css';

export interface VideoGalleryProps {
    videos: {
        title: string;
        url: string;
    }[],
    children: ReactNode
}

export const VideoGallery: FC<VideoGalleryProps> = ({videos, children}) => {
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
        <>
            <h2 className="ktl-h2 ktl-layout ktl-layout--center ktl-offset-top-xxl">{children}</h2>
            <div className={styles.wrapper}>
                <Slider ref={sliderRef} {...settings} className={'ktl-offset-top-l'}>
                    {videos.map((video, i) => (
                        <div key={video.url} className={styles.item}>
                            <div className={styles.media}>
                                <img src={preview(video.url)} alt={video.title} className={styles.image}/>
                                <Button icon={<RightIcon/>} className={styles.btn} onClick={() => clickHandle(i)}
                                        mode="rock" size="l" theme="dark"/>
                            </div>
                            <span className={cn(styles.title, 'ktl-text-2')}>{video.title}</span>
                        </div>
                    ))}
                </Slider>

                <div className={cn(styles.navigation, 'ktl-layout ktl-layout--center')}>
                    <Button icon={<ArrowLeftIcon />} className={cn(styles.arrow, styles.prev)} size='xs' mode='clear' onClick={handlePrev} />
                    <Button icon={<ArrowRightIcon />} className={cn(styles.arrow, styles.next)} size='xs' mode='clear' onClick={handleNext} />
                </div>

                <Popup
                    isOpen={isOpen}
                    onRequestClose={handleClick}
                    showOuterCloseButton
                >
                    <YoutubePlayer id={currentId} autoplay className={styles.player}/>
                </Popup>
            </div>
        </>
    );
};

function preview(url: string): string {
    return `https://img.youtube.com/vi/${getVideoId(url)}/maxresdefault.jpg`;
}

function getVideoId(url: string): string {
    return url.match(/\?v=([^=&]+)/)[1];
}
