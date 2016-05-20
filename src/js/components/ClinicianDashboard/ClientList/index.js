import React from 'react'
import {Accordion, Panel} from 'react-bootstrap'
import LetterTable from '../LetterTable/index.js'

export default class ClientList extends React.Component {
    render() {
        return (
            <Accordion>
                {this.props.clients.map( (client, i) => {
                    return (
                        <Panel header={client.id} eventKey={i} key={i}>
                            <LetterTable letters={client.letters}/>
                        </Panel>
                    )
                })}
            </Accordion>
        )
    }
}


ClientList.defaultProps = {
    clients:[
        {
            id: 0,
            letters: [
                    {
                        topic: 'Assessment results',
                        recipients: [
                            'School'
                        ] ,
                         correspondence: [
                            'patient', 'patient\'s mum', 'school'
                        ] , 
                        stage: 'pending',
                        due: '10/11/16' 
                    }, {
                        topic: 'Assessment results',
                        recipients: [
                            'School'
                        ] ,
                         correspondence: [
                            'patient', 'patient\'s mum', 'school'
                        ] , 
                        stage: 'pending',
                        due: '10/11/16' 
                    },
                    {
                        topic: 'Assessment results',
                        recipients: [
                            'School'
                        ] ,
                         correspondence: [
                            'patient', 'patient\'s mum', 'school'
                        ] , 
                        stage: 'pending',
                        due: '10/11/16' 
                    }
                ]
        },
        {
            id: 1,
            letters: [
                    {
                        topic: 'Assessment results',
                        recipients: [
                            'School'
                        ] ,
                         correspondence: [
                            'patient', 'patient\'s mum', 'school'
                        ] , 
                        stage: 'pending',
                        due: '10/11/16' 
                    }, {
                        topic: 'Assessment results',
                        recipients: [
                            'School'
                        ] ,
                         correspondence: [
                            'patient', 'patient\'s mum', 'school'
                        ] , 
                        stage: 'pending',
                        due: '10/11/16' 
                    },
                    {
                        topic: 'Assessment results',
                        recipients: [
                            'School'
                        ] ,
                         correspondence: [
                            'patient', 'patient\'s mum', 'school'
                        ] , 
                        stage: 'pending',
                        due: '10/11/16' 
                    }
                ]    
        },
        {
            id: 2,
            letters: [
                    {
                        topic: 'Assessment results',
                        recipients: [
                            'School'
                        ] ,
                         correspondence: [
                            'patient', 'patient\'s mum', 'school'
                        ] , 
                        stage: 'pending',
                        due: '10/11/16' 
                    }, {
                        topic: 'Assessment results',
                        recipients: [
                            'School'
                        ] ,
                         correspondence: [
                            'patient', 'patient\'s mum', 'school'
                        ] , 
                        stage: 'pending',
                        due: '10/11/16' 
                    },
                    {
                        topic: 'Assessment results',
                        recipients: [
                            'School'
                        ] ,
                         correspondence: [
                            'patient', 'patient\'s mum', 'school'
                        ] , 
                        status: 'pending',
                        due: '10/11/16' 
                    }
                ]
        }
    ]
}