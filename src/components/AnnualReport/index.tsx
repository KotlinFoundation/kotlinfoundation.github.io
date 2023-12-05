import Button from "@rescui/button";
import cn from "classnames";
import * as styles from "./annualReport.module.css";
import report1KotlinResults from "./assets/1-kotlin-results.png";
import report2MissionRecap from "./assets/2-mission-recap.png";
import report3FoundationResults from "./assets/3-foundation-results.png";

export function AnnualReport() {
  const renderButton = (className: string) => (
    <Button
      className={className}
      mode="outline"
      size="l"
      // TODO: upload actual pdf file with the report
      href="/annual-report-2023.pdf"
      target="_blank"
    >
      View annual report
    </Button>
  );
  return (
    <div className={styles.report}>
      <section className={cn("ktl-layout ktl-layout--center", styles.slides)}>
        <div className={styles.imageContainer}>
          <img
            src={report3FoundationResults}
            alt="Foundation results"
            className={styles.image}
            width={320}
            height={180}
          />
          <img
            src={report2MissionRecap}
            alt="Misson recap"
            className={styles.image}
            width={320}
            height={180}
          />
          <img
            src={report1KotlinResults}
            alt="Kotlin results"
            className={styles.image}
            width={320}
            height={180}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className="ktf-h2 ktf-h3--tl">
            Explore Kotlin Foundation <br />
            highlights from 2023
          </h2>
          {renderButton(styles.button)}
        </div>
        {renderButton(styles.buttonMobile)}
      </section>
    </div>
  );
}
