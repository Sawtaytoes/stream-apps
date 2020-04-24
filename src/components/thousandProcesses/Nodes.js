import React, { useEffect, useMemo } from 'react'

import Node from './Node'

const numberOfNodes = 12220

const queue = []

const addToQueue = (
	callback
) => {
	queue
	.push(callback)
}

const clearQueue = (
	queue,
) => {
	queue
	.splice(
		0,
		queue.length,
	)
}

const Nodes = () => {
	const nodes = (
		useMemo(
			() => (
				Array(numberOfNodes)
				.fill()
				.map((
					item,
					index,
				) => ({
					id: index,
				}))
			),
			[],
		)
	)

	useEffect(
		() => {
			const intervalId = (
				setInterval(
					() => {
						const processQueue = (
							queue
							.slice()
						)

						clearQueue(queue)

						for (const callback of processQueue) {
							callback()
						}
					},
					40,
				)
			)

			return () => {
				clearInterval(
					intervalId
				)
			}
		},
		[],
	)

	return (
		nodes
		.map(({
			id,
		}) => (
			<Node
				addToQueue={addToQueue}
				key={id}
			/>
		))
	)
}

export default Nodes
