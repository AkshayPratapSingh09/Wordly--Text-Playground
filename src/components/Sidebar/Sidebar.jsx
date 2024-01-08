import React from 'react'
import {useState} from 'react'
import'./Sidebar.css'
import Logo from '../../assets/logo.png'

import { SidebarData } from '../../Data/Data.js'
import {UilSignOutAlt} from '@iconscout/react-unicons'

const Sidebar = () => {

  const [selected,setSelected] = useState(0)

  return (
    <div className="Siderbar">
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
                Sh<span>o</span>ps
            </span>
        </div>

        <div className="menu">
            {SidebarData.map((item,index) =>{
              return (
                <div className={selected===index?'menuItem active': "menuItem"} key={index}
                onClick={()=>setSelected(index)}
                >
                  <item.icon/>
                  <span>
                    {item.heading}
                  </span>
                </div>
              )
            })}

            <div className="menuItem">
              <UilSignOutAlt/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar