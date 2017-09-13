import { observable, action } from 'mobx';

const state = observable({
  name: 'John',
  age: 42,
  showAge: false,

  get labelText() {
    return this.showAge ? `${this.name} (age: ${this.age})` : this.name;
  },

  setAge: action(function setAge(age) {
    this.age = age;
  }),
});

export default state;
