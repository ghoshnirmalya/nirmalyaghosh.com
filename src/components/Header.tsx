import React, { FC } from 'react'

interface Props {
  banner?: string
}

const Header: FC<Props> = ({ banner }) => {
  if (!banner) {
    return <div className="h-64 bg-gray-300" />
  }

  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
      }}
      className="h-64 opacity-75 bg-center bg-cover"
    />
  )
}

export default Header
