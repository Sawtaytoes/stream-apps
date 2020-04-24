import React, { useEffect, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import { addSeconds, format, set } from 'date-fns/fp'

const StyledContainer = styled.div`
	align-items: center;
	background-color: rgba(51, 51, 51, 0.85);
	color: #ccc;
	display: flex;
	flex-direction: column;
	font-family: 'Baloo Bhaina 2', cursive;
	font-size: 180px;
	height: 100vh;
	justify-content: center;
	overflow: hidden;
	width: 100vw;
`

const StyledTimeRemaining = styled.div`
	font-size: 700px;
	line-height: 1;
`

const isBrowser = (
	!Object.is(
		typeof(window),
		'undefined',
	)
)

const Countdown = () => {
	const startingSeconds = (
		useMemo(
			() => (
				isBrowser
				? (
					Number(
						// eslint-disable-next-line compat/compat
						new URLSearchParams(
							document
							.location
							.search
							.substring(1)
						)
						.get('minutesFromNow')
					)
					* 60
				)
				: 0
			),
			[],
		)
	)

	const [
		secondsRemaining,
		setSecondsRemaining,
	] = useState(startingSeconds)

	useEffect(
		() => {
			if (
				Object.is(
					secondsRemaining,
					0,
				)
			) {
				return
			}

			setTimeout(
				() => {
					setSecondsRemaining(
						secondsRemaining - 1
					)
				},
				1000,
			)
		},
		[secondsRemaining],
	)

	const countdownDate = (
		useMemo(
			() => (
				set({
					minutes: 0,
					seconds: 0,
				})(
					new Date()
				)
			),
			[],
		)
	)

	const timeRemaining = (
		format(
			'm:ss'
		)(
			addSeconds(
				secondsRemaining
			)(
				countdownDate
			)
		)
	)

	return (
		<StyledContainer>
			<div>
				Stream starts in...
			</div>

			<StyledTimeRemaining suppressHydrationWarning>
				{timeRemaining}
			</StyledTimeRemaining>
		</StyledContainer>
	)
}

export default Countdown
