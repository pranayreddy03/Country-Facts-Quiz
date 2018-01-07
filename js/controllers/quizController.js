(function()
{
    'use strict';

    angular.module('countryFacts')
           .controller('quizController',quizController);

    quizController.$inject = ['quizMetrics', 'dataService'];
    function quizController(quizMetrics, dataService)
    {
        var quiz = this;
        quiz.quizMetrics = quizMetrics;
        quiz.dataService = dataService;
        quiz.activeQuestion = 0;

        var numOfQuestionsAnswered = 0;

        quiz.questionAnswered = function()
                                {
                                    console.log('one');
                                    var quizLength = dataService.quizQuestions.length;
                                    if(dataService.quizQuestions[quiz.activeQuestion].selected !== null)
                                    {
                                        numOfQuestionsAnswered++;

                                        if(numOfQuestionsAnswered >= quizLength)
                                        {
                                            //finalize the quiz
                                        }
                                    }
                                    quiz.setActiveQuestion();
                                };

        quiz.setActiveQuestion = function(index)
        {
            if(index === undefined)
            {
                console.log('two');
                var breakOut = false;
                var quizLength = dataService.quizQuestions.length - 1;

                while(!breakOut)
                {
                    quiz.activeQuestion = quiz.activeQuestion < quizLength ? ++quiz.activeQuestion : 0;

                    if(dataService.quizQuestions[quiz.activeQuestion].selected === null)
                    {
                        breakOut = true;
                    }
                }
            }
            else
            {
                quiz.activeQuestion = index;
            }

        };

        quiz.selectAnswer = function(index)
        {
            dataService.quizQuestions[quiz.activeQuestion].selected = index;
        }
    }

})();