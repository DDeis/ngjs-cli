class NavService {
  appName = 'My App';

  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  getAppName = () => this.appName;

  getTodos() {
    return this.$http.get('/api/todos').then(response => response.data);
  }
}

export default NavService;
