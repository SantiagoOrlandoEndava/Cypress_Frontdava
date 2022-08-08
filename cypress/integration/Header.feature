Feature: Header nav bar

Scenario: The user navigates through the website using the header buttons

Given I am in any of the different sections of the website
When I click on <button> 
Then I am redirected to <webpage>

Examples:
| button      | website
| "Home"      | landing page|
| "Conciertos"| Conciertos page|
| "Eventos"   | Eventos page|
| "Paquetes"  | Paquetes page|
| "Contacto"  | Contacto page|