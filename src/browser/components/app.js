import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Home extends Component {
  store = this.props.store;
  addToStore = () => {
    this.store.setData('a', '0123456789');
  };
  render() {
    return (
      <section>
        <h1>{this.store.items.a}</h1>
        <p><button onClick={this.addToStore}>Change Me!</button></p>
      </section>
    );
  }
}

export default Home;
