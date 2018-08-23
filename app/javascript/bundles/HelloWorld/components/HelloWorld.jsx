import PropTypes from 'prop-types';
import React from 'react';

export default  class HelloWorld extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      name: props.name
    }

    this.updateName = this.updateName.bind(this)
  }

  updateName(event){
    this.setState({name: event.target.value})
  }

  render(){
    return(
      <div>
        <h3>Hello, {this.state.name}!</h3><hr />
        <form>
          <label htmlFor="name"> Say hello to: </label>
          <input className="form-control" type="text" placeholder={this.state.name} onChange={this.updateName}/>
        </form>
      </div>)
  }
}
