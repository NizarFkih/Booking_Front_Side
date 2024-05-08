import styles from './Home.module.scss';
import image from './../../assets/image.png'
const Home = () => {
    return (<div className={styles.container}>
        <div className={styles.container__mainContent}>
            <div className={styles.text}>
                <h1 className={styles.text__primary}><span>Booking</span> <span>All</span> <span>In</span> <span>One</span></h1>
                <p className={styles.text__secondary}>Lorem, ipsum dolor sit amet consectetur adipisiing elit. Are rem, consequatur eum? es dell Minima reprehenderit. consequatur eum? es dell Minima reprehenderit.</p>
            </div>
            <div className={styles.actions}>
                <a href="/register" className={`${styles.btn} ${styles.btn___register}`}>register</a>
                <a href="/login" className={`${styles.btn} ${styles.btn___login}`}>login</a></div>
        </div>
        <div className={styles.container__image}>
            <img className={styles.img} src={image} alt="" />
        </div>
    </div>);
}

export default Home;