import styles from './SearchForm.module.scss'

const SearchForm = () => {

    return (
        <div className={styles.body}>
            <form action="submit">
                <div className={styles.searchBox}>
                    <input id='searchInput' type="text" className={styles.search} placeholder="Search"/>
                    <button type='submit' className={styles.button}>Find</button>
                </div>
                <div className={styles.selectBox}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <select className={styles.sort} name="sort" id="sort">
                            <option value="newest">sort by newest</option>
                            <option value="relevance">sort by relevance</option>
                        </select>
                    </div>
                    <div style={{display: "flex", alignItems: "center", position: "relative"}}>
                        <label className={styles.labelForSort} htmlFor="itemsOnPage">items on page:</label>
                        <select className={styles.countSort} name="itemsOnPage" id="itemsOnPage">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;