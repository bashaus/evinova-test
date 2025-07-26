Feature: Accordions

  Background:

    Given I am on the homepage
    And I have declined cookies



  Scenario: Accordion collapsed by default

    Then I should not see an expanded accordion trigger for "Oncology"
    And I should not see the accordion content "Support patients and clinicians to identify"



  Scenario: Display and hide content when accordion is toggled

    When I click on the accordion trigger for "Oncology"
    Then I should see an expanded accordion trigger for "Oncology"
    And I should see the accordion content "Support patients and clinicians to identify"

    When I click on the accordion trigger for "Oncology"
    Then I should not see an expanded accordion trigger for "Oncology"
    And I should not see the accordion content "Support patients and clinicians to identify"



  Scenario: Toggling one accordion should not effect the other accordions

    When I click on the accordion trigger for "Oncology"
    Then I should see an expanded accordion trigger for "Oncology"
    And I should see the accordion content "Support patients and clinicians to identify"
    And I should not see an expanded accordion trigger for "Respiratory"
    And I should not see an expanded accordion trigger for "Cardiovascular and metabolic"
    And I should not see an expanded accordion trigger for "Rare diseases"
