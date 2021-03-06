//@flow
import React, {Component} from 'react'
import {Relax} from 'iflux2'
import {textQL} from '../ql'

@Relax
export default class Message extends Component {
  static defaultProps = {
    text: '',
    textQL,
  };

  render() {
    const {text, textQL} = this.props

    return (
      <div>
        <div>{ text }</div>
        <div>{ textQL }</div>
      </div>
    )
  }
}
