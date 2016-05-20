import React from 'react'
import ClientLetterTable from '../../components/ClientDashboard/ClientLetterTable/index.js'


export default class ClientDashboard extends React.Component {
    constructor () {
        super()
        this.state = {
            filterActiveLetters: this.filterActiveLetters.bind(this),
            filterSentLetters: this.filterSentLetters.bind(this),
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
            <ClientLetterTable sentLetters={this.filterSentLetters('Sent')} activeLetters={this.filterActiveLetters()} />
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
            }
            
        ]
}