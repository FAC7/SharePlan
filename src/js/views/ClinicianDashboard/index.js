import React from 'react'
import ClientList from '../../components/ClinicianDashboard/ClientList/index.js'
import AddClientForm from '../../components/AddClient/index.js'

export default class ClinicianDashboard extends React.Component {
  constructor () {
      super()
    this.state = {
      clients: [],
      showModal: false
    }
  }
  
  componentDidMount () {
    this.setState({
      clients: this.getClients()
    })
    this.toggleModal = this.toggleModal.bind(this)
  }
  
  // getClients() will be an axios request to access all previous clients this clinician has dealth with?
  getClients () {
    return this.props.clients
  }

  toggleModal () {
    this.setState({ showModal: !this.state.showModal })
  }


  render () {
    return (
      <div>
        <AddClientForm toggleModal={this.toggleModal} showModal={this.state.showModal}/>
        <ClientList {...this.props} clients={this.state.clients}/>
      </div>
    )
  }
}


ClinicianDashboard.propTypes = {
  currentUser: React.PropTypes.string
}


ClinicianDashboard.defaultProps = {
  currentUser: 'katbow',
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
