import Popup from '@jetbrains/kotlin-web-site-ui/out/components/popup';
import { useTextStyles } from '@jetbrains/kotlin-web-site-ui/out/components/typography';
import YoutubePlayer from '@jetbrains/kotlin-web-site-ui/out/components/youtube-player';
import Button from '@rescui/button';
import { ArrowLeftIcon, ArrowRightIcon, RightIcon } from '@rescui/icons';
import cn from 'classnames';
import { useCallback, useMemo, useRef, useState } from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';

import '@jetbrains/kotlin-web-site-ui/out/components/popup/index.css';

import '@jetbrains/kotlin-web-site-ui/out/components/youtube-player/index.css';

import { KtlLayout } from '../KtlLayout';
import * as styles from './index.module.css';

export interface VideoGalleryProps {
  videos: {
    title: string;
    url: string;
  }[];
  title: string;
}

export function VideoGallery({ videos, title }: VideoGalleryProps) {
  const textCn = useTextStyles();
  const [currentId, setCurrentId] = useState('');
  const sliderRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const settings = useMemo(
    () => ({
      infinite: true,
      swipeToSlide: true,
      variableWidth: true,
      adaptiveHeight: true,
      centerMode: true,
    }),
    []
  );

  /**
   * @workaround
   * FocusOnSelect doesn't work with infinite and variableWidth props.
   */
  const clickHandle = useCallback(
    (i) => {
      setCurrentId(getVideoId(videos[i].url));
      setIsOpen(true);
    },
    [videos]
  );

  const handlePrev = useCallback(() => {
    sliderRef.current.slickPrev();
  }, []);

  const handleNext = useCallback(() => {
    sliderRef.current.slickNext();
  }, []);

  return (
    <div className={styles.container}>
      <KtlLayout>
        <h2 className={cn(styles.header, 'ktf-h1--ds ktf-h2--ds-min ktf-h2--tl')}>{title}</h2>
      </KtlLayout>

      <div className={styles.wrapper}>
        <Slider ref={sliderRef} {...settings}>
          {videos.map((video, i) => (
            <div key={video.url} className={styles.item}>
              <div className={styles.media}>
                <img src={preview(video.url)} alt={video.title} className={styles.image} />
                <Button
                  icon={<RightIcon />}
                  className={styles.btn}
                  onClick={() => clickHandle(i)}
                  mode="rock"
                  size="l"
                  theme="dark"
                />
              </div>
              <div className={cn(styles.title, textCn('ktl-text-2'))}>{video.title}</div>
            </div>
          ))}
        </Slider>

        <div className={cn(styles.navigation, 'ktl-layout ktl-layout--center')}>
          <Button
            icon={<ArrowLeftIcon />}
            className={cn(styles.arrow, styles.prev)}
            size="xs"
            mode="clear"
            onClick={handlePrev}
          />
          <Button
            icon={<ArrowRightIcon />}
            className={cn(styles.arrow, styles.next)}
            size="xs"
            mode="clear"
            onClick={handleNext}
          />
        </div>

        <Popup isOpen={isOpen} onRequestClose={handleClick} showOuterCloseButton>
          <YoutubePlayer id={currentId} autoplay className={styles.player} />
        </Popup>
      </div>
    </div>
  );
}

function preview(url: string): string {
  return `https://img.youtube.com/vi/${getVideoId(url)}/maxresdefault.jpg`;
}

function getVideoId(url: string): string {
  return url.match(/\?v=([^=&]+)/)[1];
}
