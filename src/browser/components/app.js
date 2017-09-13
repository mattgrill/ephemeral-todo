import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class Home extends Component {
  addToStore = () => {
    this.props.store.setAge(Math.floor(Math.random() * 90 + 10));
  };
  render() {
    return (
      <section>
        <h1>{this.props.store.name} - {this.props.store.age}</h1>
        <p><button onClick={this.addToStore}>Change Age.</button></p>
      </section>
    );
  }
}
