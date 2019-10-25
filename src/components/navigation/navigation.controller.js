export default class NavigationController {
	constructor($location) {
		this.$location = $location;
	}
	$onInit() {
		console.log('running navigation controller...');
	}
	handleDashboard() {
		this.$location.url('/dashboard');
	}
	handleLocation() {
		this.$location.url('/location');
	}
}

NavigationController.$inject = ['$location'];
