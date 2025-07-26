Feature: Contact Form Field Validation

  Background:

    Given I am on the contact page
    And I have declined cookies



  Scenario: Check First Name is filled

    When I have an empty field for "First Name"
    And I click the "Send" button
    Then I should see the error message "This field is required." next to the field "First Name"



  Scenario: Check First Name is valid

    When I type "John" in the field for "First Name"
    And I click the "Send" button
    Then I should not see an error message adjacent to the field "First Name"
