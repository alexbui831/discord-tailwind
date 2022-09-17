import React from 'react'

import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'
import { GiBowlOfRice, GiCookie} from 'react-icons/gi'

const SideBar = () => {

  return (
    <div className=" h-screen w-16 m-0 bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<GiCookie size="30" />} text="Direct Messages" />
      <SideBarIcon icon={<FaFire size="28" />} text="Gaming Server"/>
      <SideBarIcon icon={<FaPoo size="20" />} text="Poo Server"/>
      <SideBarIcon icon={<GiBowlOfRice size="20" />} text="Rice Squad"/>
      <SideBarIcon icon={<BsPlus size="32" />} text="Add a Server"/>
      <SideBarIcon icon={<BsFillLightningFill size="20" />} text="Discord Nitro"/>
      <SideBarIcon icon={<BsGearFill size="20" />} text="Settings"/>
    </div>
  )
}
//  takes icon component as input prop
const SideBarIcon = ({icon, text}) => (
  <button className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </button>
);

export default SideBar