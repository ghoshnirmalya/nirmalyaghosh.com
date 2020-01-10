import React, { FC } from 'react'

import config from '../../config/SiteConfig'

interface Props {
  banner?: string
}

const Header: FC<Props> = ({ banner }) => {
  return <img src={banner || config.defaultBg} />
}

export default Header
