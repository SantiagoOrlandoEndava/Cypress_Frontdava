Feature: Header nav bar

    Scenario Outline: The user navigates through the website using the header buttons

        Given I am in any of the different sections of the website
        When I click on <button> 
        Then I am redirected to <website> page

        Examples:
        | button     | website      |
        | Destinos   | destinations |
        | Conciertos | concerts     |
        | Eventos    | events       |
        | Paquetes   | packages     |
        | Contacto   | contact      |
        