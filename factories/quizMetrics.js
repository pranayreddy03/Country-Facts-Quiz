(function()
{
    'use strict';

    angular.module('countryFacts')
           .factory('quizMetrics',quizMetrics);

    quizMetrics.$inject = ['dataService'];
    function quizMetrics(dataService)
    {
        var quizMetricsfactory = {
                        quizActive : false,
                        resultsActive : false,
                        changeState : function changeState(metric, state)
                                       {
                                           if(metric === "quiz")
                                           {
                                               quizMetricsfactory.quizActive = state;
                                           }
                                           else if(metric === "results")
                                           {
                                               quizMetricsfactory.resultsActive = state;
                                           }
                                           else
                                           {
                                               return false;
                                           }
                                       },
                        correctAnswers : [],
                        markQuiz: markQuiz,
                        numOfCorrect : 0
                      };
        return quizMetricsfactory;

    }

    function markQuiz()
    {
        quizMetricsfactory.correctAnswers = dataService.correctAnswers;
        for(var i=0; i< dataService.quizQuestions.length;i++)
        {
            if(dataService.quizQuestions[i].selected === dataService.correctAnswers[i])
            {
                dataService.quizQuestions[i].correct = true;
                quizMetricsfactory.numOfCorrect++;
            }
            else
            {
                dataService.quizQuestions[i].correct = true;
            }
        }
    }


})();