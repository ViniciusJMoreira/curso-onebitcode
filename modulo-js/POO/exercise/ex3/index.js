import { Component } from "./Component.js";
import { Input, InputDate } from "./Input.js";
import { Label } from "./Label.js";
import { Form } from "./Form.js";

const h1 = new Component('h1', 'body', {textContent: 'Create Component With JS'})
h1.render()

document.querySelector('.createForm').addEventListener('click', () => {

  const newForm = new Form('body')

  newForm.render()
  
  newForm.addChildren(
    new Component('br'),
    new Label('New Input: ', newForm),
    new Input(newForm, {id: 'idInput', placeholder: 'Write anything'}),
    new Component('br'),
    new Component('br'),
    new Label('New Date: ', newForm),
    new InputDate(newForm, {name: 'nameInput'})
  )
})