import React, { FC } from 'react'

interface Props {
  banner?: string
}

const Header: FC<Props> = ({ banner }) => {
  if (!banner) {
    return <div className="h-64 bg-gray-300" />
  }

  return <img src={banner} className="opacity-75" />
}

export default Header
