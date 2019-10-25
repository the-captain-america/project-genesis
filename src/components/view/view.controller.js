class ViewController {
	constructor($ngRedux) {
		this.state = {};
		this.unsubscribe = $ngRedux.connect(this.mapStateToThis, {})(this);
	}
	$onInit() {
		console.log('running ViewController...');
	}

	$onDestroy() {
		this.unsubscribe();
	}

	mapStateToThis(state) {
		return {
			state: state
		};
	}
}

ViewController.$inject = ['$ngRedux'];

export default ViewController;
