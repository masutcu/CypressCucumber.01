Feature: Capitals

    Scenario Outline: Capitals Search
        Given user goes to google
        And user search "<capitals>" on searchbox
        And verify that the "<capitals>" are searched

        Examples:

            | capitals |
            | Ankara   |
            | Paris    |
            | Londra     |