Feature: Navigate with the buttons of the footer

    Background: 
        Given I am in any of the different sections of the website


    Scenario Outline: Navigation to other sections
        When I click on <Button> section in the footer
        Then I validate that I access the <Webpage> webpage

        Examples:
        | Button                     | Webpage |
        | "Acerca de nosotros"       | AcercaDeNosotros | 
        | "Contacto"                 | Contacto |
        | "terminos y condiciones"   | TerminosYCondiciones |


    Scenario Outline: Navigation to social media
        When I click on <Button> social media in the footer
        Then I validate that I access the <socialMedia> main site

        Examples:
        | Button                   | socialMedia |
        | "Facebook"               | www.facebook.com |
        | "Twitter"                | www.twitter.com |
        | "Instagram"              | www.instagram.com |

    
    Scenario Outline: Navigation to social media through logos
        When I click on <Button> logo in the footer
        Then I validate that I access the <socialMedia> main site

        Examples:
        | Button              | socialMedia |
        | "Facebook"          | www.facebook.com |
        | "Twitter"           | www.twitter.com |
        | "Instagram"         | www.instagram.com |