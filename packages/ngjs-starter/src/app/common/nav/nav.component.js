import template from './nav.html';

const NavComponent = {
  template,
  controller: class NavController {
    constructor(NavService) {
      'ngInject';

      this.NavService = NavService;
    }

    $onInit() {
      this.appName = this.NavService.getAppName();
    }
  },
};

export default NavComponent;
