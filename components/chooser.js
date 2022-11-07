import styles from "../styles/choose.module.css";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Paper from "../public/paper.svg";
import Image from "next/image";
import IndvCard from "../components/indvCard";

const Chooser = ({ props }) => {
  const [caseType, setCaseType] = useState("");
  const [paperType, setPaperType] = useState("");
  const [tempType, setTempType] = useState("");

  const router = useRouter();

  return (
    <div className={styles.rowFlex}>
      <div className={styles.colFlex}>
        <Image src={Paper} />
        <div className={styles.forHead}>paper</div>
      </div>

      <div className={styles.forHead2}>Let&apos;s make a paper!</div>

      <div className={styles.colFlex2}>
        <div className={styles.forCase}>
          <div className={styles.forHead2}>Type of Case</div>
          <form>
            <input
              id="insurance"
              name="case"
              type="radio"
              onClick={() => {
                setCaseType("insurance");
              }}
            />
            <label htmlFor="insurance" className={styles.innerB}>
              Insurance
            </label>
            <input
              id="consumer"
              name="case"
              type="radio"
              onClick={() => {
                setCaseType("consumer");
              }}
            />
            <label htmlFor="consumer" className={styles.innerB}>
              Consumer
            </label>
          </form>
        </div>

        <div className={styles.forCase}>
          <div className={styles.forHead2}>Type of Paper</div>
          <form>
            <input
              id="notice"
              name="papers"
              type="radio"
              onClick={() => {
                setPaperType("notice");
              }}
            />
            <label htmlFor="notice" className={styles.innerB}>
              Notice
            </label>
            <input
              id="Legnotice"
              name="papers"
              type="radio"
              onClick={() => {
                setPaperType("legalnotice");
              }}
            />
            <label htmlFor="Legnotice" className={styles.innerB}>
              Legal Notice
            </label>
          </form>
        </div>
      </div>

      {/* Card starts here */}

      {caseType && paperType ? <IndvCard case={caseType} paper={paperType}/>: <></>}
    </div>
  );
};

export default Chooser;
