Feature: Sources

  Background:

    Given I am on the platform page
    And I have declined cookies



  Scenario: Check URLs for sources

    When The page has sources
    Then It should contain valid links
