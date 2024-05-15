import styled from "styled-components";

function decideButtonBackground(state) {
	switch (state) {
		case "reset":
			return "lightgreen"
		case "remove":
			return "red"
		default:
			return "darkblue"
	}
}

function decideButtonColor(state) {
	switch (state) {
		case "reset":
			return "black"
		default:
			return "white"
	}
}

export const Button = styled.button`
	font-size: 18px;
	border: 0;
	cursor: pointer;
	margin-left: 10px;
	padding: 5px 10px;
	background: ${props => decideButtonBackground(props.state)};
	color: ${props => decideButtonColor(props.state)};
`
