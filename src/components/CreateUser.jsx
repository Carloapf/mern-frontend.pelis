import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';

export default class CreateUser extends Component {

  state = {
    users: [],
    name: ''
  }

  async componentDidMount(){
    this.getUsers();
    console.log(this.state.users)
    
  }

  getUsers = async() =>{
    const res = await axios.get('https://carlo-backend-pelis.onrender.com/api/users');
    this.setState({users: res.data});
  }

  onChangeUsername = (e) => {
    this.setState({
        name: e.target.value
    })
  }

  onSubmit = async e =>{
    e.preventDefault();
    await axios.post('https://carlo-backend-pelis.onrender.com/api/users', {
      name: this.state.name
    })
    this.setState({name: ''});
    this.getUsers();
    
  }

  deleteUser = async (id) => {
    const willDelete = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, bórralo',
      cancelButtonText: 'No, cancela'
    })

    if (willDelete.isConfirmed) {
      await axios.delete('http://localhost:4000/api/users/' + id)
      this.getUsers();
      Swal.fire(
        '¡Eliminado!',
        'Tu archivo ha sido eliminado.',
        'success'
      )
    }

    
  }

  render() {
    return (
      <div className='row'>
        <div className="col-md-4">
          <div className="card card-body">
            <h3>
              Create New User
            </h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  className='form-control' 
                  value= {this.state.name}
                  onChange={this.onChangeUsername}
                  />
              </div>
              <button type="submit" className='btn btn-primary'>
                Guardar
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {
              this.state.users.map(user => ( 
                <li 
                  className='list-group-item list-group-item-action' 
                  key={user._id}
                  onDoubleClick={() => this.deleteUser(user._id)}
                  >
                  {user.name}
                </li>)
              )
            }
          </ul>
        </div>
        <div></div>
      </div>
    )
  }
}
