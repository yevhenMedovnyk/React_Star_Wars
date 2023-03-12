import React from 'react'
import s from './Layout.module.scss'

export const Layout = ({children}) => {
  return (
	<div className={s.wrapper}>
	  {children}
	</div>
  )
}

