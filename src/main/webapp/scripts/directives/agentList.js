'use strict';

pinpointApp.constant('agentListConfig', {
    agentGroupUrl: '/getAgentList.pinpoint'
});

pinpointApp.directive('agentList', [ 'agentListConfig', '$rootScope', function (cfg, $rootScope) {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'views/agentList.html',
        link: function postLink(scope, element, attrs) {

            // define private variables
            var oNavbarDao;

            // define private variables of methods
            var getAgentGroup, showAgentGroup;

            /**
             * get agent group
             * @param query
             * @param cb
             */
            getAgentGroup = function (query, cb) {
                jQuery.ajax({
                    type: 'GET',
                    url: cfg.agentGroupUrl,
                    cache: false,
                    dataType: 'json',
                    data: {
                        application: query.applicationName,
                        from: query.from,
                        to: query.to
                    },
                    success: function (result) {
                        console.log('result', result);
                        cb(result);
                    },
                    error: function (xhr, status, error) {
                        console.log("ERROR", status, error);
                    }
                });
            };

            /**
             * show agent group
             * @param applicationName
             * @param serviceType
             * @param from
             * @param to
             */
            showAgentGroup = function (applicationName, serviceType, from, to) {
                var query = {
                    applicationName: applicationName,
                    from: from,
                    to: to
                };
                getAgentGroup(query, function (result) {
                    scope.agentGroup = result;
                    scope.$digest();
                });
            };

            /**
             * scope select
             * @param agent
             */
            scope.select = function (agent) {
                scope.currentAgent = agent;
                $rootScope.$broadcast('agentList.agentChanged', agent);
            };

            /**
             * scope event on agentList.initialize
             */
            scope.$on('agentList.initialize', function (event, navbarDao) {
                oNavbarDao = navbarDao;
                showAgentGroup(oNavbarDao.getApplicationName(), oNavbarDao.getServiceType(), oNavbarDao.getQueryStartTime(), oNavbarDao.getQueryEndTime());
            });
        }
    };
}]);
