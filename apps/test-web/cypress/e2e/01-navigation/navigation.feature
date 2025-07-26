Feature: Page Navigation

  Background:

    Given I am on the homepage
    And I have declined cookies



  Scenario: Navigate to About page

    When I click on the "About" link
    Then I should be on the About page
    And I should see a heading with "About Evinova"
