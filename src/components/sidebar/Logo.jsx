import React from 'react'
import { FireFilled } from '@ant-design/icons'
import logo from '../../assets/logo-elite.png'

const Logo = () => {
  return (
    <div className="logo">
        <div className="logo-icon">
            <img src={logo} height={120} />
        </div>
    </div>
  )
}

export default Logo