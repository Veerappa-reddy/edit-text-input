import {Component} from 'react'
import './index.css'

class EditableTextInput extends Component {
  state = {inputText: '', edit: false}

  changeInput = event => {
    this.setState({inputText: event.target.value})
  }

  clickSave = () => {
    this.setState(prevState => ({edit: !prevState.edit}))
  }

  renderEditText = () => {
    const {inputText} = this.state

    return (
      <div className="input-container edit">
        <p className="para-text">{inputText}</p>
        <button type="button" className="btn btn-2" onClick={this.clickSave}>
          Edit
        </button>
      </div>
    )
  }

  renderSaveText = () => {
    const {inputText} = this.state

    return (
      <div className="input-container">
        <input
          className="input-element"
          value={inputText}
          onChange={this.changeInput}
        />
        <button type="button" className="btn" onClick={this.clickSave}>
          Save
        </button>
      </div>
    )
  }

  render() {
    const {edit} = this.state
    return (
      <div className="bg-container">
        <div className="editable-text-container">
          <h1 className="heading">Editable Text Input</h1>
          {edit ? this.renderEditText() : this.renderSaveText()}
        </div>
      </div>
    )
  }
}

export default EditableTextInput
