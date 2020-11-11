import styled from 'styled-components';

export const Container = styled.div`
	width: 70%;
	height: 100%;
	padding: 2rem 0;
`;

export const Header = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
`;

export const HeaderItem = styled.div`
	display: flex;
	align-items: center;

	svg {
		font-size: 3.5rem;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;

	p:nth-child(1) {
		font-size: 7rem;
	}

	p:nth-child(2) {
		font-size: 1.7rem;
	}

	p:nth-child(3) {
		font-size: 1.5rem;
	}
`;
