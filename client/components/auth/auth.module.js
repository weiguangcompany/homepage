'use strict';

angular.module('homepageApp.auth', [
  'homepageApp.constants',
  'homepageApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
