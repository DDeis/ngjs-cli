import angular from 'angular';

import HomeComponent from './home.component';
import './home.scss';

const BookmarksModule = angular
  .module('home', [])
  .component('home', HomeComponent).name;

export default BookmarksModule;
