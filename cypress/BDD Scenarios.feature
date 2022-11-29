Feature: Verify login feature of website ‘https://wave-trial.getbynder.com/login/’

  Background:
    Given User Go To https://wave-trial.getbynder.com/login/


  @ValidLogin
  Scenario Outline:Verify successful login and logout using valid credential
    When User enters "<userName>" and "<password>"
    And User clicks on 'Login' button
    Then Dashboard page is displayed
    When User clicks on logout button from the Profile
    Then Login page should be displayed
    And User closes the browser
    Examples:
      | username      | password      |
      | validUsername | validPassword |

  @ValidLoginSession
  Scenario Outline:Verify successful session and logout using valid credential
    When User enters "<userName>" and "<password>"
    And User clicks on 'Login' button
    Then Dashboard page is displayed
    When User clicks on logout button from the Profile
    And User closes the browser
    When User is redircted to https://wave-trial.getbynder.com/login/
    Then  Dashboard page is displayed
    Examples:
      | username      | password      |
      | validUsername | validPassword |


  @EmptyLoginCredentials
  Scenario:Verify Login with empty fields
    When User clicks on 'Login' button
    Then Error message 'Please enter your password.' is displayed


  @InvalidLoginCredentials
  Scenario Outline:Verify login with invalid credentials
    When User enters "<Username>" in 'Email/Username'
    And User enters "<Password>" in 'password'
    And User clicks on 'Login' button
    Then Error message "<errorMessage>" is be displayed
    Examples:
      | Username  | Password         | errorMessage                                        |
      | userName1 | Invalid Password | You have entered an incorrect username or password. |
      | userName1 |                  | Please enter your password.                         |
      |           | Valid Password1  | Please enter your Username.                         |
      | admin     | admin            | You have entered an incorrect username or password. |

  @VerifyLostPassword
  Scenario: Verify Lost Password functionality
    Given When user click 'Lost password?'
    Then User is redirected to https://wave-trial.getbynder.com/user/forgotPassword
    When User provide "Email"
    And User Enters Correct Captcha
    And User Click "Send Instruction"
    Then User should be redirected to https://wave-trial.getbynder.com/login/
    And User should see message "We've sent you a mail with a link to reset your password."

  @VerifyLostPasswordCancel
  Scenario: Verify Lost Password functionality
    Given When user click 'Lost password?'
    Then User is redirected to https://wave-trial.getbynder.com/user/forgotPassword
    When User provide "Email"
    And User Enters Correct Captcha
    And User Click "Cancel"
    Then User should be redirected to https://wave-trial.getbynder.com/login/
    And User should NOT see message "We've sent you a mail with a link to reset your password."

