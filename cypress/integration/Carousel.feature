Feature: Carrousel navigation

    Background:
        Given I am in the main page of the website


    Scenario Outline: Validate navigating the carrousel with the thumbnails
        When I click on thumbnail <Thumbnail> of the carrousel
        Then I validate that the correct <Image> image is displayed

        Examples:
        | Thumbnail | Image |
        | 1         | 1     |
        | 2         | 2     |
        | 3         | 3     |


    Scenario Outline: Validate navigating the carrousel with the arrows
        When I click on the <arrow> arrow of the carrousel <numberOf> times
        Then I validate that the correct <Image> image is displayed
        And I validate that the correct little circle and thumbnail are selected

        Examples:
        | arrow | numberOf | Image |
        | next  | 1        | 2     |
        | next  | 2        | 3     |
        | next  | 3        | 1     |
        | prev  | 1        | 3     |
        | prev  | 2        | 2     |
        | prev  | 3        | 1     |


    Scenario: Validate transitions of the carrousel
        When I navigate through the landing page
        Then I validate that the carrousel switch to the following image after 4 seconds automatically
        And I validate that after the last image it switches to the first one
