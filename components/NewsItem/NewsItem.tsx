import styles from './NewsItem.module.scss'
import {FaArrowRight} from 'react-icons/fa'

const NewsItem = () => {
    let date = new Date()

    return (
       <div className={styles.body}>
        <div className={styles.bgImage}>
            <img src="https://static.toiimg.com/photo/77630680.cms?imgsize=780095" alt="bg" />
        </div>
        <div className={styles.date}>
            {/* 24 July 2023, 11:07:40 AM */}
            {date.toUTCString()}
        </div>
        <div className={styles.content}>
            Some label: some text
        </div>
        <div className={styles.footer}>
            <button className={styles.button}>
                Details <FaArrowRight />
            </button>
        </div>

       </div>
    )
}

export default NewsItem;