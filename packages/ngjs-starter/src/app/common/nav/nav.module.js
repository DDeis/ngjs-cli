import angular from 'angular';

import NavComponent from './nav.component';
import NavService from './nav.service';

import './nav.scss';

const NavModule = angular
  .module('nav', [])
  .component('navbar', NavComponent)
  .service('NavService', NavService).name;

export default NavModule;
