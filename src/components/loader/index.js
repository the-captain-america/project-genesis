import React from 'react';
import styled from 'styled-components';

const ReactMount = styled.div`
	background: white;
	border: 1px solid #e5e5e5;
	border-radius: 6px;
	left: 50%;
	top: 10px;
	padding-left: 8px;
	padding-right: 8px;
	position: fixed;
	padding: 8px;
	transform: translate(-50%, 0);
	color: white;
	text-align: center;
	font-size: 12px;
	display: inline-block;
	font-weight: 300;
	font-family: 'Roboto';
	box-sizing: border-box;
	> span {
		color: grey;
	}
`;

const VersionContainer = styled.div`
	display: flex;
	padding: 8px;
	border-radius: 6px;
	background: white;
	position: fixed;
	flex-direction: column;
	bottom: 16px;
	min-width: 100px;
	border: 1px solid #d5d5d5;
	right: 16px;
	box-sizing: border-box;
	flex-direction: column;
	span {
		color: grey;
		display: inline-block;
		padding-top: 8px;
		font-size: 12px;
		&:first-child {
			padding: 0;
		}
		strong {
			font-size: 12px;
		}
	}
`;

const PathContainer = styled.div`
	background: white;
	border: 1px solid #e5e5e5;
	border-radius: 6px;
	padding: 8px;
	box-sizing: border-box;
	position: fixed;
	bottom: 16px;
	left: 16px;
	span {
		color: grey;
		display: inline-block;
		padding-top: 8px;
		font-size: 12px;
	}
`;

const PathGroup = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	line-height: 16px;
	li {
		display: inline-block;
		font-weight: 600;
		font-size: 12px;
		color: grey;
		&:after {
			content: '/';
			color: grey;
			position: relative;
			padding-left: 4px;
			padding-right: 4px;
			display: inline-block;
		}
	}
`;

const Paths = ({ items = ['home', 'dashboard'] }) => {
	const renderPaths = () => {
		return items.map((item, index) => {
			return <li key={index}>{item}</li>;
		});
	};
	return (
		<PathContainer>
			<PathGroup>{renderPaths()}</PathGroup>
		</PathContainer>
	);
};

const Version = ({ component = '', version = '' }) => {
	return (
		<VersionContainer>
			<span>
				Name: <strong>{component}</strong>
			</span>
			<span>
				Version: <strong>{version}</strong>
			</span>
		</VersionContainer>
	);
};

class ReactLoader extends React.Component {
	componentDidMount() {}
	shouldComponentUpdate(nextProps) {
		if (this.props.loaderState === nextProps.loaderState) {
			return false;
		} else {
			return true;
		}
	}
	renderItems() {
		if (this.props.loaderState.todos) {
			return this.props.loaderState.todos.map((item, index) => {
				return <li key={index}>{item}</li>;
			});
		}
	}
	render() {
		return (
			<React.Fragment>
				<Paths path="/dashboard" />
				<Version version="1.0.0" component="ReactLoader" />
				<ReactMount>
					<span>
						Title: <strong>{this.props.conceptName}</strong>
					</span>
				</ReactMount>
				{this.renderItems()}
			</React.Fragment>
		);
	}
}

export default ReactLoader;
