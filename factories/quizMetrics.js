(function()
{
    'use strict';

    angular.module('countryFacts')
           .factory('quizMetrics',quizMetrics);

    function quizMetrics()
    {
        var factory = {
                        quizActive : false,
                        changeState : function changeState(state)
                                       {
                                                factory.quizActive = state;
                                       }
                      };
        return factory;
    }

})();