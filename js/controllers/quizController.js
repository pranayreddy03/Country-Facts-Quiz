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
        quiz.error = false;
        quiz.finalize = false;

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
                                            for(var i=0; i< quiz.length;i++)
                                            {
                                                if(dataService.quizQuestions[i].selected === null)
                                                {
                                                    setActiveQuestion(i);
                                                    return;
                                                }
                                            }
                                            quiz.error = false;
                                            quiz.finalize = true;
                                            return;
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

                    if(quiz.activeQuestion === 0)
                    {
                        quiz.error = true;
                    }

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
        };

        quiz.finalizeAnswers = function()
        {
            quiz.finalize = false;
            numOfQuestionsAnswered = 0;
            quiz.activeQuestion = 0;
            quizMetrics.markQuiz();
            quizMetrics.changeState("quiz", false);
            quizMetrics.changeState("results", true);
        }
    }

})();