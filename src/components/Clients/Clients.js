import React, {Component} from 'react'
import axios from '../../axios.clients';


class ClientsList extends Component {
    state = {
        clients: []
    }

    componentDidMount() {
        axios.get('/clients.json')
            .then(res => {
                const fetchedClients = [];
                for (let key in res.data) {
                    fetchedClients.push({
                        ...res.data[key],
                    })
                }
            })
    }
    render () {
        return (
            <div>
                
            </div>
        )
    }
}
 
export default ClientsList;