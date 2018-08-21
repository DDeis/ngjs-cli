import 'normalize.css';
import 'bootstrap/scss/bootstrap.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import CommonModule from '@common/common.module';
import ComponentsModule from '@components/components.module';
import AppComponent from './app.component';

import './app.scss';

const AppModule = angular
  .module('app', [CommonModule, ComponentsModule, uiRouter])
  .component('app', AppComponent).name;

export default AppModule;
