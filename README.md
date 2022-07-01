# PRG08-2022-week7<br>
PRG08 2022 Eindopdracht deel A week 7<br>
[Link naar de screencast](https://youtu.be/-F2bzWoTy_w)<br>
[Link naar live versie](https://asuryanknight.github.io/Prg8Week7HerLiveVersie/)<br>
Mijn Tle project: <br>
In tle zijn mijn team en ik bezig een slim ventilatiestysteem te maken. Dit willen wij doen door een Ai te laten letten op roosters/agenda, om te zien welke ruimte wanneer gebruikt wordt, en real time sensordata. Hiermee hopen wij een zeer efficient systeem te maken dat dus stroom gaat besparen maar niet de luchtkwaliteit verminderd en misschien wel verbeterd.

Toegevoegde waarde van de Ai:<br>
De Ai zal ook door gegevens uit het verleden precies weten wanneer hij moet gaan beginnen met draaien en kan overal veel scherper op bijsturen dan een mens. 

Welke data we nodig hebben:<br>
De Ai moet roosters/agenda's kennen om te weten welke ruimtes gebruikt gaan worden, ook is er real time data nodig van het CO2 gehalte, hoeveelheid %luchtvochtigheid en de temperatuur waarop het systeem kan anticiperen en reageren.

Welke library/algoritme:<br>
Wij zitten te denken aan een decision tree algoritme omdat we verwachten dat er voornamelijk vragen voor het systeem zullen zijn als: is de CO2 boven of beneden waarde x. Hier kan een decision tree makkelijk mee werken.

Welke vorm:<br>
Het is de bedoeling dat het een website wordt voor de beheerders.

Doelgroep:<br>
Beheerders van gebouwen met veel en/of grote ruimtes die hun bezoekers en werknemers in comfort willen laten werken en leven.


Voor deze opdracht ben ik wel voor iets heel anders gegaan. Ik vond dit namelijk nog een beetje te pittig om aan te pakken. Nou hoorden we dat we niet meer verplicht verbonden staan met tle voor deze opdracht dus ben ik kaggle gaan afspeuren, zoekend naar interesante datasets en inspiratie. Ik ben uitgekomen op een dataset die van vele winkels onder andere dingen weet als : oppervlakte, aantal producten, maandelijkse bezoeken etc. Ik wil een applicatie maken die aan de hand van die data zou kunnen voorspellen hoeveel geld aan inkomsten de winkel maandelijks zou verdienen. 

Hiervoor heb ik een decicion tree gebruikt door de vele data die er bekeken moet worden, ook wou ik hier verder mee oefenen na de week 5 opdracht.  

Ik heb helaas geen scatterplot kunnen maken, simpelweg omdat er teveel data is om naar te kijken. Om te kijken voor patronen heb ik geexperimenteerd met welke rijen in de tabel wel getrained word en welke niet, om daarna te kijken hoe of de voorspellingen accurater werden. Het maandlijkse inkomen van de winkels uit de data verschilt tussen de 30000 en 90000, daarom heb ik besloten dat de voorspelling een marge van 5000 mag hebben om de voorspelling accuraat te noemen. Momenteel ligt de accuracy tussen de 15% en 25%. (tijdens experimenteren kwam ik erachter dat bij een marge van 25000 de accuracy ligt tussen de 65% en 80%).

Voor deel B wil ik toevoegen dat je je eigen winkel informatie in kan voeren in een form waarna wordt voorspeld hoeveel inkomsten jij zal verdienen. 



