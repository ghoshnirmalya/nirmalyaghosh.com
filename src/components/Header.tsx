import React, { FC } from 'react'

import config from '../../config/SiteConfig'

interface Props {
  children: any
  banner?: string
}

const Header: FC<Props> = ({ banner, children }) => {
  return (
    <div>
      <img src={banner || config.defaultBg} />
      <div>{children}</div>
    </div>
  )
}

export default Header
