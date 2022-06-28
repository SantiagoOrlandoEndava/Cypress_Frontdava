Feature: Navigate with the buttons of the footer

    Scenario Outline: Navigation to other sections

        Given I am in any of the different sections of the website
        When I click on <Button> in the footer
        Then I validate that I access the <Webpage> webpage

        Examples:
        | Button                   | Webpage |
        | "Acerca de nosotros"     | AcercaDeNosotros | 
        | "Contacto"               | Contacto |
        | "rminos y condiciones"   | TerminosYCondiciones |


    Scenario Outline: Navigation to social media

        Given I am in any of the different sections of the website
        When I click on social <Button> in the footer to access social media
        Then I validate that I access the <Webpage> main site

        Examples:
        | Button                   | Webpage |
        | "Facebook"               | www.facebook.com |
        # | Facebook logo          | www.facebook.com |
        # | Twitter                | www.twitter.com |
        # | Twitter logo           | www.twitter.com |
        # | Instagram              | www.instagram.com |
        # | Instagram logo         | www.instagram.com |