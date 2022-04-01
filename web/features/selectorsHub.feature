@run
Feature: Selectorshub challenge

  Background: Practice with selectors
    Given I am on the selectors hub practice page

  @login
  Scenario: As a user, I can log in 

    When I login with username and password

  @nonintectuable @svgelement
  Scenario: As a user, I can complete firstname and lastname 

    When I complete first and lastname

  @shadowdom @iframe
  Scenario: As a user, I can ask for tea

    When I complete tea name
