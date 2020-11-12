import styled from "styled-components";

type ContainerProps = {
	isDay: number;
};

export const Container = styled.div<ContainerProps>`
	height: 100%;
	display: flex;
	background: url(${({ isDay }) => isDay === 1 ? "https://imgur.com/F3QB06u.png" : "https://imgur.com/L91Twfy.png"}) center center/cover;

	background-color: rgba(0, 0, 0, 0.3);
	background-blend-mode: color;

	color: #eee;
`;
