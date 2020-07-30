import React from 'react';
import Aux from '../../Auxiliary/Auxiliary'
import classes from './StoreLocator.module.css'

const storeLocator = (props) => (
    <Aux>
        <main className={classes.mainWrapper}>

            <div className={classes.storeLocatorWrapper} >
                <div>search bar</div>
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
                    <div className={classes.findStoreFooterWrapper}>
                        <div>
                            <a href="/" className={classes.commonLinkStyle}>Privacy Statement</a>
                            <a href="/" className={[classes.commonLinkStyle, classes.termsOfUseLink].join(" ")}>Terms of Use</a>
                        </div>
                    </div>
                </section>
            </div>
            <div className={classes.mapWrapper}>Map</div>
        </main>
    </Aux>
)

export default storeLocator;