// List of templates
import LegacyTemplate from '../legacy/modules/location/location.template.html';

// List out imports here:
import NavigationController from '../components/navigation/navigation.controller';
import NavigationTemplate from '../components/navigation/navigation.template.html';
import DashboardController from '../components/dashboard/dashboard.controller';
import DashboardTemplate from '../components/dashboard/dashboard.html';
import { configureStore } from '../store/middlewares';

const RouterConfig = (
	$stateProvider,
	$urlRouterProvider,
	$ngReduxProvider,
	$locationProvider
) => {
	$locationProvider.hashPrefix('');
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('dashboard', {
		url: '/dashboard',
		controllerAs: '$ctrl',
		template: DashboardTemplate,
		controller: DashboardController
	});

	$stateProvider.state('location', {
		url: '/location',
		template: LegacyTemplate,
		controller: 'locationController'
	});

	$ngReduxProvider.provideStore(configureStore());
};

RouterConfig.$inject = [
	'$stateProvider',
	'$urlRouterProvider',
	'$ngReduxProvider',
	'$locationProvider'
];

export default RouterConfig;
