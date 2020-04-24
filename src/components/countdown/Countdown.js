import React, { Fragment, useEffect, useMemo, useState } from 'react'
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
	const urlSearchParams = (
		useMemo(
			() => (
				isBrowser
				&& (
					// eslint-disable-next-line compat/compat
					new URLSearchParams(
						document
						.location
						.search
						.substring(1)
					)
				)
			),
			[],
		)
	)

	const message = (
		useMemo(
			() => (
				urlSearchParams
				? (
					urlSearchParams
					.get('message')
				)
				: ''
			),
			[urlSearchParams],
		)
	)

	const startingSeconds = (
		useMemo(
			() => (
				urlSearchParams
				? (
					Number(
						urlSearchParams
						.get('minutes')
					)
					* 60
				)
				: 0
			),
			[urlSearchParams],
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
			{
				Object.is(
					timeRemaining,
					'0:00',
				)
				? (
					<div>
						Stream starting NOW!
					</div>
				)
				: (
					<Fragment>
						<div>
							{
								message
								|| "Stream starts in..."
							}
						</div>


						<StyledTimeRemaining suppressHydrationWarning>
							{timeRemaining}
						</StyledTimeRemaining>
					</Fragment>
				)
			}

		</StyledContainer>
	)
}

export default Countdown
