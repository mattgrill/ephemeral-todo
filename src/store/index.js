import { observable, action } from 'mobx';

export default class AppState {
  @observable items;

  constructor() {
    this.items = { a: 'bbbb' };
  }

  @action setData(key, data) {
    this.items[key] = data;
  }

  @action clearItems() {
    this.items = {};
  }
}
