import { NewsType } from '@/types'
import styles from './NewsItem.module.scss'
import {FaArrowRight} from 'react-icons/fa'
import Link from 'next/link'

interface NewsItemProps {
    item: NewsType
}

const NewsItem: React.FC<NewsItemProps> = ({item}) => {

    return (
       <div className={styles.body}>
        <div className={styles.bgImage}>
            <img src={item.blocks?.main?.elements[0].assets[0]?.file ??
            'https://markhamrealty.com/wp-content/uploads/2023/01/no-image.jpg'} alt="image" />
        </div>
        <div className={styles.date}>
            {/* 24 July 2023, 11:07:40 AM */}
            {item.webPublicationDate}
        </div>
        <div className={styles.content}>
            {item.webTitle}
        </div>
        <div className={styles.footer}>
            <Link href={`/articles/${item.id}`} className={styles.button}>
                Details <FaArrowRight />
            </Link>
        </div>
    
       </div>
    )
}

export default NewsItem;