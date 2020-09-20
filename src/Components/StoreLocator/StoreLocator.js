import React from 'react';
import classes from './StoreLocator.module.css'
import Map from '../Map/Map'

const storeLocator = (props) => (
    <main>
        <div className={classes.mainWrapper}>

            <div className={classes.storeLocatorWrapper} >
                <div className={classes.searchBarWrapper}>
                    <div className={classes.controls}>
                        <form className={classes.form} role="search">
                            <input name="place" type="text" placeholder='Find a store' autoComplete="off" className={classes.inputField} />
                            <div className={classes.buttonConatiner}>
                                <button className={classes.button}>
                                    <svg viewBox="0 0 24 24" className={classes.svgWRapper} preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false"><path d="M15.447 15.043c-1.36 1.435-3.246 2.263-5.27 2.263-3.994 0-7.23-3.216-7.23-7.18 0-3.965 3.236-7.18 7.23-7.18 3.996 0 7.233 3.215 7.233 7.18 0 .47-.046.935-.136 1.39-.084.426.193.84.62.924.425.084.838-.193.922-.62.11-.555.166-1.122.166-1.695 0-4.835-3.943-8.752-8.804-8.752-4.86 0-8.804 3.918-8.804 8.752 0 4.835 3.943 8.753 8.804 8.753 2.46 0 4.758-1.01 6.41-2.754.3-.315.285-.813-.03-1.11-.315-.3-.812-.286-1.11.03zm1.307 2.725l4.506 4.477c.308.306.806.304 1.112-.004.306-.305.304-.802-.004-1.11l-4.506-4.476c-.308-.305-.805-.304-1.11.004-.307.308-.306.806.002 1.112z"></path></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <section className={classes.sectionWrapper}>
                    <h2 className={classes.hiddenVisibility}>Store Search Results</h2>
                    <div className={classes.searchResultDisplayWrapper}>
                        <article className={classes.articalWRapper}>
                            <div className={classes.textCenter}>
                                <h3 className={classes.heading}>No stores were found.</h3>
                                <p>Do you want to look further away?</p>
                                <button type="submit" className={classes.expandSearchButton}>Expand Search</button>
                            </div>
                        </article>
                    </div>

                </section>
            </div>
            <Map className={classes.mapWrapper}/>
        </div>
        <div className={classes.findStoreFooterWrapper}>
            <div>
                <a href="/" className={classes.commonLinkStyle}>Privacy Statement</a>
                <a href="/" className={[classes.commonLinkStyle, classes.termsOfUseLink].join(" ")}>Terms of Use</a>
            </div>
        </div>
    </main>


)

export default storeLocator;