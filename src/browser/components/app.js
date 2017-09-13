import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { isObservableObject } from 'mobx';

import DevTool, { configureDevtool } from 'mobx-react-devtools';

configureDevtool({
  logEnabled: true,
  updatesEnabled: true,
});

@inject('store')
@observer
export default class Home extends Component {
  addToStore = () => {
    this.props.store.setAge(11);
  };
  render() {
    return (
      <section>
        <h1>{this.props.store.name} - {this.props.store.age}</h1>
        <p><button onClick={this.addToStore}>Change Age.</button></p>
        <DevTool />
      </section>
    );
  }
}
