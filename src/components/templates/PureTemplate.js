import React from 'react'
import Header from '../header'
import './style.css'

class TemplateN1 extends React.Component {
  render() {
    return (
      <div className='template-wrapper'>
        <Header />
        <div className='template'>
          <div className='template1_content'>{this.props.children}</div>
        </div>
      </div>
    )
  }
}

export default TemplateN1