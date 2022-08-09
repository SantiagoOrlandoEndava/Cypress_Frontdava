Feature: Landing page content

    Scenario Outline: Validate UI when the user access the main page of the website

        Given I am in the main page of the website
        When I navigate through the landing page
        Then I validate that there is a nav bar at header
        And I validate that there is a search bar below the nav bar
        And I validate that there is an image below the header and as the background of the company logo
        And I validate that there are three cards displaying <Section>
        And I validate that there is a footer at the bottom

        Examples:
        | Section |
        | Destinos |
        | Conciertos |
        | Eventos |
        | Paquetes |
