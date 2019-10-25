import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngRedux from 'ng-redux';
import 'ngreact';
import 'angular-material/angular-material.css';

// common styles applied to both react and angular
import './common/less/main.less';
// React Entry
import ReactLoader from './components/loader';
// Route Configurations
import Config from './config/route.config';
// import Common
import NavigationComponent from './components/navigation/navigation.component';
// import Layout
import LayoutComponent from './components/layout/layout.component';
// import setup for angualr views
import EnboarderView from './components/view/view.component';
// import legacy items
import legacyLocation from './legacy/modules/location/location.controller';
// Create Factory
const ReactFactory = () => ReactLoader;
// React Directive Creator
const CreateReactDirective = (reactCreator, reactDirective) =>
	reactDirective(reactCreator, ['loaderState', 'conceptName']);
CreateReactDirective.$inject = ['reactCreator', 'reactDirective'];

// Angular Dependencies
const dependencies = [
	ngRedux,
	ngAnimate,
	ngMaterial,
	uiRouter,
	legacyLocation,
	'react'
];

// Define Angular Application
const app = angular.module('EnboarderApp', dependencies);
app.config(Config);
app.component('enboarderView', EnboarderView);
app.component('navigation', NavigationComponent);
app.component('layout', LayoutComponent);
app.factory('reactCreator', ReactFactory);
app.directive('reactLoader', CreateReactDirective);

// library links
const $ = require('jquery');
window.$ = $;
window.jQuery = $;
