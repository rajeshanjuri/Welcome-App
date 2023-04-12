// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  // initialize the state object
  state = {isSubscribed: false}

  // button change function
  clickButton = () => {
    this.setState(prevState => {
      console.log(`the btn clicked is ${prevState.isSubscribed}`)
      return {isSubscribed: !prevState.isSubscribed}
    })
  }

  // change text subscribe to subscribed
  getChangeText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    // assign the getChangeText fun  to button
    const changeText = this.getChangeText()

    return (
      <div className="bg-container">
        <h1 className="title">Welcome</h1>
        <p className="description">Thank you! happy Learning</p>
        <button type="button" className="btn" onClick={this.clickButton}>
          {changeText}
        </button>
      </div>
    )
  }
}
export default Welcome
