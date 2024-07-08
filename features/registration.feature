Feature: Registration

    As a user 
    I want to register 
    So that I can login 


  Background:
    Given I am on the Registration page

  Scenario Outline: Successful Registration
    When I fill First Name field with: "<FIRST_NAME>"
    And I fill Last Name field with: "<LAST_NAME>" 
    And I fill Email field with: "<EMAIL>" 
    And I fill Phone field with: "<PHONE>"
    And I select item: "<COURSE>" from Course drop-down list
    And I select item: "<MONTH>" from Month drop-down list
    And I select item: "<SOCIAL>" from How do you know about us list
    And I click "Register" button
    Then I will get a message: "Your registration is completed. We will contact with you soon. Thank you !"

    Examples:
    | FIRST_NAME            | LAST_NAME                          | EMAIL                    | PHONE           | COURSE                                  | MONTH     | SOCIAL      | 
    | Andrea                |  Mangion                           |andrea@yahoo.com          | +356304275961   | Cypress Automation                      | February  | Others      |
    | Attila                |  Gyori                             |gyoriattila@yahoo.com     | +36304275961    | Web Automation (Selenium)+Java+API      | January   | LinkedIn    |
    | Ivo                   |  Santos Da Cunha                   |ivo@yahoo.com             | +356304275962   | Mobile Automation                       | March     | Facebook    | 
