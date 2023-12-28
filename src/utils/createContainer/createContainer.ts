interface Props {
	mountNode?: HTMLElement
	id: string
}

const createContainer = ({ mountNode = document.body, id }: Props) => {
	if (!mountNode) return

	if (document.getElementById(id)) return

	const portalContainer = document.createElement('div')

	portalContainer.setAttribute('id', id)
	mountNode.appendChild(portalContainer)
}

export default createContainer
