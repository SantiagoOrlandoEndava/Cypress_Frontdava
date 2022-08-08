Feature: Navigation with header not logged in

Scenario Outline: The user navigates the different sections with navbar buttons and logo without being logged in

Given I am in the main page of the website
And I am not logged in
When I click on <Button> in the navigation bar
Then I access the <Button> section webpage
When I click on Endavel logo
Then I am in the main page of the website

Examples: 
| Button |
| Conciertos |
| Paquetes |
| Contacto |

