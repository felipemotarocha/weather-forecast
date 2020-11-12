import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
`;

export const Text = styled.div``;

export const Icons = styled.div`
	display: flex;
`;

export const Icon = styled.div`
	display: flex;
	align-items: center;

	&:nth-child(1) {
		margin-right: 0.7rem;
	}

	svg {
		font-size: 2rem;
	}

	p {
		font-size: 1.7rem;
	}
`;
