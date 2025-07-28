Feature: Sources

  Background:

    # Sources are very important for pharmaceutical companies as it's a legal requirement
    # that these are defined and they are correct. This test checks to ensure all links
    # in the sources section are valid.

    Given I am on the platform page
    And I have declined cookies



  Scenario: Check URLs for sources

    When The page has sources
    Then It should contain valid links
