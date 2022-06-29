Feature: Carrousel navigation

    Scenario Outline: Validate navigating the carrousel with the thumbnails

        Given I enter the main page of the website
        When I click on thumbnail <Thumbnail> of the carrousel
        Then I validate that the correct <Image> image is displayed

        Examples:
        | Thumbnail | Image |
        | 1         | 1     |
        | 2         | 2     |
        | 3         | 3     |


    Scenario Outline: Validate navigating the carrousel with the arrows

        Given I enter the main page of the website
        When I click on the <arrow> arrow of the carrousel <numberOf> times
        Then I validate that the image <image> is displayed
        And I validate that the correct little circle and thumbnail are highlighted
# nose como meterle que clickee 3 veces la flecha derecha para ver que vaya a la última. Pq solo me sirve para UN caso de prueba. 
        Examples:
        | arrow | numberOf | image |
        | next  | 1        | 2     |
        | next  | 2        | 3     |
        | next  | 3        | 1     |
        | prev  | 1        | 3     |
        | prev  | 2        | 2     |
        | prev  | 3        | 1     |
