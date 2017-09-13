import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Home extends Component {
  addToStore = () => {
    this.props.store.setData('a', '0123456789');
  };
  render() {
    console.log(this.props);
    return (
      <section>
        <h1>{this.props.store.items.a}</h1>
        <p><button onClick={this.addToStore}>Change Me!</button></p>
      </section>
    );
  }
}

export default Home;
