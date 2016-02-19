'use strict';

const ui = angular.module('ui',[]);

import cmNavigationDirective from './layout/cm-navigation/cmNavigationDirective';

ui.directive('cmNavigation',cmNavigationDirective);

export default ui;