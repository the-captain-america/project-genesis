import template from './navigation.template.html';
import NavigationController from './navigation.controller';
import './navigation.scss';

const bindings = {};

let NavigationComponent = {
	bindings,
	template,
	templateAs: '$ctrl',
	controller: NavigationController
};

export default NavigationComponent;
