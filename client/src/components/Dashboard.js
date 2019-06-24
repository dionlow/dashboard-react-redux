import React from 'react'

import Container from 'react-bootstrap/Container'
import JumboHeader from './JumboHeader'
import DashCard from './DashCard'

import Row from 'react-bootstrap/Row'

const dashboard = (props) => {
    const cards = props.cards
    console.log(cards)

    return (
        <Container>
            <JumboHeader/>        
        <Row>
            {cards.map(card => <DashCard title={card.title} description={card.description} />)}            
        </Row>
    
    </Container>
    )
}

export default dashboard