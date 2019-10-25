import TodoActions from '../../store/actions/todo.actions';

export default class DashboardController {
  constructor($ngRedux) {
    this.todo = '';
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TodoActions)(this);
  }
  $onInit() {
    console.log('running dashboard controller...');
  }

  submitTodo() {
    this.addTodo(this.todo);
    this.todo = '';
  }

  $onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    console.log('state:::', state);
    return {
      todos: state.todos
    };
  }
}

DashboardController.$inject = ['$ngRedux'];
