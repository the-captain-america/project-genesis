import template from './view.html';
import controller from './view.controller';
import './view.scss';

let viewComponent = {
	template,
	controller,
	controllerAs: '$view'
};

export default viewComponent;
