import React from 'react'
import './style.css'
import { Icon, Button } from 'antd'

class Header extends React.Component {
  render () {
    return (
      <div style={{ marginTop: 40, display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <span className='logo'>Food for health ❤<br/></span>
          <span>Your healthy is our success</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <Button><Icon type='user' /> Login</Button>
        </div>
      </div>
    )
  }
}

export default Header
