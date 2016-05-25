import React from 'react'
import ClientLetterTable from '../../components/ClientDashboard/ClientLetterTable/index.js'
import {Row, Col, Grid} from 'react-bootstrap'
import { browserHistory } from 'react-router'
import axios from 'axios'
import cookie from 'react-cookie'

export default class ClientDashboard extends React.Component {

    constructor () {
        super()
        this.state = {
            filterActiveLetters: this.filterActiveLetters.bind(this),
            filterSentLetters: this.filterSentLetters.bind(this),
        }
    }

    componentWillMount () {
        if(cookie.load('patient_id')) {
            this.setState({patient_id: cookie.load('patient_id')})
            // get patient letters request here
        } else {
            browserHistory.push('/')
        }
    }
    
    filterActiveLetters () {
        return  this.props.letters.filter((letter) => {
            console.log(letter.status)
            return letter.status !== 'Sent'
        })
    }
    filterSentLetters (status) {
        return this.props.letters.filter((letter) => {
            return letter.status === 'Sent'
        })
    }
        
    render () {
        return (
        	<Grid>
        		<Row>
        			<Col xs={10} xsOffset={1}>
            		<ClientLetterTable sentLetters={this.filterSentLetters('Sent')} activeLetters={this.filterActiveLetters()} />
           		</Col>
           	</Row>
          </Grid>
            )
    }
}

ClientDashboard.defaultProps = {
    letters: 
        [
            {
                topic: 'Assessment results',
                recipients: [
                    'School'
                ] ,
                 correspondence: [
                    'patient', 'patient\'s mum', 'school'
                ] , 
                status: 'Waiting review',
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
                status: 'In preparation',
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
                status: 'Sent',
                due: '10/11/16' 
            }, {
                topic: 'Assessment results',
                recipients: [
                    'School'
                ] ,
                 correspondence: [
                    'patient', 'patient\'s mum', 'school'
                ] , 
                status: 'Sent',
                due: '10/11/16' 
            }, {
                topic: 'Assessment results',
                recipients: [
                    'School'
                ] ,
                 correspondence: [
                    'patient', 'patient\'s mum', 'school'
                ] , 
                status: 'In preparation',
                due: '10/11/16' 
            }
            
        ]
}