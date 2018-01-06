(function()
{
    'use strict';
    angular.module('countryFacts')
           .factory('dataService',dataService);

    function dataService() {
        var dataFactory =
            {
                countriesData: countriesData,
                quizQuestions: quizQuestions
            };
        return dataFactory;
    }

            var quizQuestions = [
                {
                    type : "text",
                    text: "Which country is about 80% the size of Texas?",
                    possibilities:  [
                                        {answer: "India"},
                                        {answer: "Belgium"},
                                        {answer: "France"},
                                        {answer: "Australia"}
                                    ],
                    selected: null,
                    correct: null
                },
                {
                    type : "text",
                    text: "What is the monetary unit of Brazil?",
                    possibilities:  [
                        {answer: "Real"},
                        {answer: "Euro"},
                        {answer: "Brazilian Dollar"},
                        {answer: "Peso"}
                    ],
                    selected: null,
                    correct: null
                },
                {
                    type : "text",
                    text: "To which country Gobi desert lies to the North?",
                    possibilities:  [
                        {answer: "India"},
                        {answer: "Germany"},
                        {answer: "Egypt"},
                        {answer: "China"}
                    ],
                    selected: null,
                    correct: null
                },
                {
                    type : "text",
                    text: "Which country is Berlin in?",
                    possibilities:  [
                        {answer: "Canada"},
                        {answer: "Germany"},
                        {answer: "Switzerland"},
                        {answer: "Russia"}
                    ],
                    selected: null,
                    correct: null
                },
                {
                    type : "text",
                    text: "In which country does the Ganges River flows through? ",
                    possibilities:  [
                        {answer: "Canada"},
                        {answer: "India"},
                        {answer: "Pakistan"},
                        {answer: "France"}
                    ],
                    selected: null,
                    correct: null
                },
                {
                    type : "text",
                    text: "Which one of the following is both a country and a continent?",
                    possibilities:  [
                        {answer: "India"},
                        {answer: "Russia"},
                        {answer: "South Africa"},
                        {answer: "Australia"}
                    ],
                    selected: null,
                    correct: null
                },
                {
                    type : "text",
                    text: "Which one of the following is the capital city of Canada?",
                    possibilities:  [
                        {answer: "Toronto"},
                        {answer: "Moscow"},
                        {answer: "Ottawa"},
                        {answer: "Canberra"}
                    ],
                    selected: null,
                    correct: null
                },
                {
                    type : "text",
                    text: "What is the largest country in the World?",
                    possibilities:  [
                        {answer: "United States of America"},
                        {answer: "Africa"},
                        {answer: "Canada"},
                        {answer: "Russia"}
                    ],
                    selected: null,
                    correct: null
                },
                {
                    type : "text",
                    text: "Which of these is Flag of China",
                    possibilities:  [
                        {answer: "./images/russia.gif"},
                        {answer: "./images/china.gif"},
                        {answer: "./images/safrica.gif"},
                        {answer: "./images/japan.gif"}
                    ],
                    selected: null,
                    correct: null
                },
                {
                    type : "text",
                    text: "Which country borders every nation in South America except Chile and Ecuador?",
                    possibilities:  [
                        {answer: "Argentina"},
                        {answer: "USA"},
                        {answer: "Venezuela"},
                        {answer: "Brazil"}
                    ],
                    selected: null,
                    correct: null
                }
            ];

        var countriesData =
            [
                {
                    "name": "Australia",
                    "image":"../images/australia.gif",
                    "capital":"Canberra",
                    "monetaryUnit":"Australian Dollar",
                    "nationalLanguage":"English",
                    "totalArea":"2,967,893 sq mi",
                    "description":"The continent of Australia, with the island state of Tasmania, is approximately equal in area to the United States (excluding Alaska and Hawaii). Mountain ranges run from north to south along the east coast, reaching their highest point in Mount Kosciusko (7,308 ft; 2,228 m). The western half of the continent is occupied by a desert plateau that rises into barren, rolling hills near the west coast. The Great Barrier Reef, extending about 1,245 mi (2,000 km), lies along the northeast coast. The island of Tasmania (26,178 sq mi; 67,800 sq km) is off the southeast coast."
                },
                {
                    "name": "Brazil",
                    "image":"../images/brazil.gif",
                    "capital":"Brasilia",
                    "monetaryUnit":"Real",
                    "nationalLanguage":"Portuguese",
                    "totalArea":"3,286,470 sq mi",
                    "description":"Brazil covers nearly half of South America and is the continent's largest nation. It extends 2,965 mi (4,772 km) north-south, 2,691 mi (4,331 km) east-west, and borders every nation on the continent except Chile and Ecuador. Brazil may be divided into the Brazilian Highlands, or plateau, in the south and the Amazon River Basin in the north. Over a third of Brazil is drained by the Amazon and its more than 200 tributaries. The Amazon is navigable for ocean steamers to Iquitos, Peru, 2,300 mi (3,700 km) upstream. Southern Brazil is drained by the Plata system—the Paraguay, Uruguay, and Paraná rivers."
                },
                {
                    "name": "Canada",
                    "image":"../images/canada.gif",
                    "capital":"Ottawa",
                    "monetaryUnit":"Canadian Dollar",
                    "nationalLanguage":"English",
                    "totalArea":"3,855,102 sq mi",
                    "description":"Covering most of the northern part of the North American continent and with an area larger than that of the United States, Canada has an extremely varied topography. In the east, the mountainous maritime provinces have an irregular coastline on the Gulf of St. Lawrence and the Atlantic. The St. Lawrence plain, covering most of southern Quebec and Ontario, and the interior continental plain, covering southern Manitoba and Saskatchewan and most of Alberta, are the principal cultivable areas. They are separated by a forested plateau rising from Lakes Superior and Huron."
                },
                {
                    "name": "China",
                    "image":"../images/china.gif",
                    "capital":"Beijing",
                    "monetaryUnit":"Yuan",
                    "nationalLanguage":"Standard Chinese",
                    "totalArea":"3,705,407 sq mi",
                    "description":"The greater part of the country is mountainous. Its principal ranges are the Tien Shan, the Kunlun chain, and the Trans-Himalaya. In the southwest is Tibet, which China annexed in 1950. The Gobi Desert lies to the north. China proper consists of three great river systems: the Yellow River (Huang He), 2,109 mi (5,464 km) long; the Yangtze River (Chang Jiang), the third-longest river in the world at 2,432 mi (6,300 km); and the Pearl River (Zhu Jiang), 848 mi (2,197 km) long."
                },
                {
                    "name": "France",
                    "image":"../images/france.gif",
                    "capital":"Paris",
                    "monetaryUnit":"Euro",
                    "nationalLanguage":"French",
                    "totalArea":"211,209 sq mi",
                    "description":"France is about 80% the size of Texas. In the Alps near the Italian and Swiss borders is western Europe's highest point—Mont Blanc (15,781 ft; 4,810 m). The forest-covered Vosges Mountains are in the northeast, and the Pyrénées are along the Spanish border. Except for extreme northern France, the country may be described as four river basins and a plateau. Three of the streams flow west—the Seine into the English Channel, the Loire into the Atlantic, and the Garonne into the Bay of Biscay. The Rhône flows south into the Mediterranean. For about 100 mi (161 km), the Rhine is France's eastern border. In the Mediterranean, about 115 mi (185 km) east-southeast of Nice, is the island of Corsica (3,367 sq mi; 8,721 sq km)."
                },
                {
                    "name": "Germany",
                    "image":"../images/germany.gif",
                    "capital":"Berlin",
                    "monetaryUnit":"Euro",
                    "nationalLanguage":"German",
                    "totalArea":"137,846 sq mi",
                    "description":"Located in central Europe, Germany is made up of the North German Plain, the Central German Uplands (Mittelgebirge), and the Southern German Highlands. The Bavarian plateau in the southwest averages 1,600 ft (488 m) above sea level, but it reaches 9,721 ft (2,962 m) in the Zugspitze Mountains, the highest point in the country. Germany's major rivers are the Danube, the Elbe, the Oder, the Weser, and the Rhine. Germany is about the size of Montana."
                },
                {
                    "name": "India",
                    "image":"../images/india.gif",
                    "capital":"New Delhi",
                    "monetaryUnit":"Rupee",
                    "nationalLanguage":"Hindi",
                    "totalArea":"1,269,338 sq mi",
                    "description":"One-third the area of the United States, the Republic of India occupies most of the subcontinent of India in southern Asia. It borders on China in the northeast. Other neighbors are Pakistan on the west, Nepal and Bhutan on the north, and Burma and Bangladesh on the east. The country can be divided into three distinct geographic regions: the Himalayan region in the north, which contains some of the highest mountains in the world, the Gangetic Plain, and the plateau region in the south and central part. Its three great river systems—the Ganges, the Indus, and the Brahmaputra—have extensive deltas and all rise in the Himalayas."
                },
                {
                    "name": "Russia",
                    "image":"../images/russia.gif",
                    "capital":"Moscow",
                    "monetaryUnit":"Russian ruble",
                    "nationalLanguage":"Russian",
                    "totalArea":"6,592,735 sq mi",
                    "description":"The Russian Federation is the largest of the 21 republics that make up the Commonwealth of Independent States. It occupies most of eastern Europe and north Asia, stretching from the Baltic Sea in the west to the Pacific Ocean in the east, and from the Arctic Ocean in the north to the Black Sea and the Caucasus in the south. It is bordered by Norway and Finland in the northwest; Estonia, Latvia, Belarus, Ukraine, Poland, and Lithuania in the west; Georgia and Azerbaijan in the southwest; and Kazakhstan, Mongolia, China, and North Korea along the southern border."
                }
            ]

})();