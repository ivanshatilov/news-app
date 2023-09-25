import styles from './article.module.scss'

interface ItemPageProps {
    params: {id: string[]}
}

async function GetArticle(id: string) {
    const response = await fetch(`https://content.guardianapis.com/${id}?api-key=${process.env.NEXT_PUBLIC_GUARDIAN_API_KEY}&show-blocks=all`, {

    });

    return response.json()
}

const ItemPage: React.FC<ItemPageProps> = async ({params}) => {
    const fullId = params.id.join('/');
    const article = await GetArticle(fullId);
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h1 className={styles.title}>{article.response.content.webTitle}</h1>
                <div className={styles.headerInfo}>
                    <span>{article.response.content.webPublicationDate}</span>
                    <a href={article.response.content.webUrl}>read on Guardian</a>
                </div>
                {article.response.content.blocks?.main?.elements[0].assets[0]?.file && (
                    <div className={styles.mainImage}>
                        <img src={article.response.content.blocks?.main?.elements[0].assets[0]?.file} alt="Article" />
                    </div>
                )}
                
                <main className={styles.main} dangerouslySetInnerHTML={{ __html: article.response.content.blocks.body[0].bodyHtml }}>
                </main>
            </div>
        </div>
    )
}

export default ItemPage