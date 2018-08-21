import template from './home.html';

const bookmarksComponent = {
  bindings: {
    // todo: '<',
    // onAddTodo: '&'
  },
  template,
  // controllerAs: 'homeCtrl',
  controller: class HomeController {
    constructor($scope) {
      'ngInject';

      this.$scope = $scope;
    }

    $onInit() {
      this.name = 'World!';
    }
  },
};

export default bookmarksComponent;
