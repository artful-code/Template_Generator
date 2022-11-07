import styles from "../styles/card.module.css";
import Data from "../data/templateData.json";
import { useRouter } from "next/router";

const IndvCard = (props) => {
  const str = `${props.case}.${props.paper}`;

  const router = useRouter();

  return (
    <div className={styles.rowFlex}>
      {Data[`${props.case}`][`${props.paper}`].map((template,id) => {
        return (
          <div key={id} onClick={()=>{router.push(`${template.url}`)}}>
            <button
              className={styles.forButton}
              style={{ backgroundColor: "white" }}
            >
              <div className={styles.colFlex2}>
                <img
                  className={styles.forImage}
                  src={template.photo}
                />
                <div className={styles.headPtext}></div>
                <p className={styles.pText}>{template.desc}</p>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default IndvCard;
