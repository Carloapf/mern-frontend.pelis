import React, { Component } from 'react';
import axios from 'axios';

class AddReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imdbid: '',
      userName: '',
      rating: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { userName, value } = event.target;

    this.setState({
      [userName]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { imdbid, userName, rating } = this.state;
    //http://localhost:4000/api/reviews
    await axios.post('http://localhost:4000/api/reviews/', {
      imdbid,
      userName,
      rating
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { imdbid, userName, rating } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          imdbid:
          <input type="text" name="imdbid" value={imdbid} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          name:
          <input type="text" name="userName" value={userName} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          rating:
          <input type="number" name="rating" value={rating} onChange={this.handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddReview;