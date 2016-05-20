import React from 'react'
import ClientLetterTable from '../../components/ClientDashboard/ClientLetterTable/index.js'


export default class ClientDashboard extends React.Component {
    render () {
        return (
            <ClientLetterTable letters={this.props.letters}/>
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
                status: 'pending',
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