Feature: Contact Form Field Validation

  Background:

    Given I am on the contact page
    And I have declined cookies



  @xFail
  Scenario: Check form can submit

    When I type "John" in the field for "First Name"
    And I type "Doe" in the field for "Last Name"
    And I type "john.doe@example.com" in the field for "Email"
    And I type "Example" in the field for "Company"
    And I type "Test Lead" in the field for "Job Title"
    And I select "CEO" in the field for "Country"
    And I select "Oncology" in the field for "Therapeutic Area"
    And I select "Other" in the field for "I'm interested in"
    And I click the "Send" button
    Then I should not see an error message adjacent to the field "First Name"
    Then I should not see an error message adjacent to the field "Last Name"
    Then I should not see an error message adjacent to the field "Email"
    Then I should not see an error message adjacent to the field "Company"
    Then I should not see an error message adjacent to the field "Job Title"
    Then I should not see an error message adjacent to the field "Country"
    Then I should not see an error message adjacent to the field "Therapeutic Area"
    Then I should not see an error message adjacent to the field "I'm interested in"
