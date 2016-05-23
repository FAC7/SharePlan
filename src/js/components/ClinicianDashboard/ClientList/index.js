import React from 'react'
import {Accordion, Panel, ProgressBar} from 'react-bootstrap'
import LetterTable from '../LetterTable/index.js'

export default class ClientList extends React.Component {
    render() {
        return (
            <Accordion>
                {this.props.clients.map( (client, i) => {
                    return (
                        <Panel 
                            header={ 
                                <div> 
                                    <p>{client.id}</p>
                                    <ProgressBar active bsStyle='info' now={60}/> 
                                </div>
                            } 
                            eventKey={i} 
                            key={i}
                        >
                            <LetterTable letters={client.letters}/>
                        </Panel>
                    )
                })}
            </Accordion>
        )
    }
}