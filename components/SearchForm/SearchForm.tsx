import { useAppDispatch, useAppSelector } from '@/hooks'
import styles from './SearchForm.module.scss'
import {searchSlice} from '@/store/reducers/searchSlice';
import { useState } from 'react';

const SearchForm = () => {
    const {searchValue, pageSize, sortBy} = useAppSelector(state => state.searchState)
    const {setPageSize, setSearchValue, setSortBy} = searchSlice.actions;
    const dispatch = useAppDispatch()

    const [_sortBy, _setSortBy] = useState("relevance")
    const [_searchValue, _setSearchValue] = useState("")
    const [_pageSize, _setPageSize] = useState("10")

    const handleSubmitForm = (e: SubmitEvent) => {
        e.preventDefault();
        dispatch(setPageSize(_pageSize));
        dispatch(setSearchValue(_searchValue));
        dispatch(setSortBy(_sortBy));
    }

    return (
        <div className={styles.body}>
            <form action="submit">
                <div className={styles.searchBox}>
                    <input id='searchInput' type="text" className={styles.search} value={_searchValue} onChange={(e) => _setSearchValue(e.target.value)} placeholder="Search"/>
                    <button onClick={(e: any) => handleSubmitForm(e)} type='submit' className={styles.button}>Find</button>
                </div>
                <div className={styles.selectBox}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <select defaultValue={_sortBy} onChange={(e) => _setSortBy(e.target.value)} className={styles.sort} name="sort" id="sort">
                            <option value="newest">sort by newest</option>
                            <option value="oldest">sort by oldest</option>
                            <option value="relevance">sort by relevance</option>
                        </select>
                    </div>
                    <div style={{display: "flex", alignItems: "center", position: "relative"}}>
                        <label className={styles.labelForSort} htmlFor="itemsOnPage">items on page:</label>
                        <select defaultValue={_pageSize} onChange={(e) => _setPageSize(e.target.value)} className={styles.countSort} name="itemsOnPage" id="itemsOnPage">
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