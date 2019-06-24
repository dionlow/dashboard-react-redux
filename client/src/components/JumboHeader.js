import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

const jumboHeader = () => (
    <Jumbotron>
        <h1>Breinify Challenge</h1>
        <p>
        1. Use React to create a dashboard.
        2, Have to use react-redux.
        3, Implement a node server and store data.
        4, After user loaded the dashboard completely, fire an Ajax call to node server to get data. After you get response from your node server, render data as cards (For 	example the cards in bootstrap) in dashboard.
        5, Users will have capability to add, delete, and search single card by title in dashboard.
        6, When user click card, change background of card to gray.
        </p>           
     </Jumbotron>
)

export default jumboHeader