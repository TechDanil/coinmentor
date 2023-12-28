import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

const PORTAL_ERROR_MSG = 'Данного элемента на странице, не существует.'

interface Props {
	children: ReactNode
	element: Element
}

const Portal = ({ children, element }: Props) => {
	if (!element) throw Error(PORTAL_ERROR_MSG)
	return createPortal(children, element)
}

export default Portal
