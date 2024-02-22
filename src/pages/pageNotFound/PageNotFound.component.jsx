import SectionLayout from "../../components/Layout/SectionLayout/SectionLayout.component";
import { GrInProgress } from "react-icons/gr";
import styles from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <SectionLayout>
      <section className={styles.notFoundSection}>
        <h1 className={styles.notFoundSection__heading}>
          <GrInProgress className={styles.notFoundSection__flipIcon} />
          Coming Soon
          <GrInProgress className={styles.notFoundSection__flipIcon} />
        </h1>
      </section>
    </SectionLayout>
  );
};

export default PageNotFound;
