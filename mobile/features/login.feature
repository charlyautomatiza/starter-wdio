Feature: WDIO Android sample app

  Scenario Outline: As a user, I can log into the wdio app

    Given I am on the login view
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username            | password             | message           |
      | tomsmith@unmail.com | SuperSecretPassword! | You are logged in!|
