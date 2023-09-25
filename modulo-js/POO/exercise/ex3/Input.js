import { Component } from "./Component.js";

export class Input extends Component {
  constructor(parent, options) {
    super('input', parent, options)
  }
}

export class InputDate extends Component {
  constructor(parent, options){
    super('input', parent, Object.assign({}, options, {type: 'date'}))
  }
}