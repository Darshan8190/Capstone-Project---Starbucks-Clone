import React from 'react';
import { withRouter, Route } from 'react-router-dom'
import classes from './ItemDescription.module.css'

const itemDescription = (props) => (
    <main className={classes.main}>
        <section className={classes.productNameSectionWRapper}>
            <div>
                Link
            </div>
            <h1>Coffe misto</h1>
            <p>A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink remarkably mixed</p>
            <p>Select a store to view availability</p>
        </section>
        <section>
            right side
        </section>
    </main>
)

export default withRouter(itemDescription);

