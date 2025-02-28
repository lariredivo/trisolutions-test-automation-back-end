# Test Scenarios (BDD - Gherkin)

This document outlines the test scenarios for **Back-End** automation using BDD (Gherkin syntax).

---
```gherkin
Feature: User Management
  As an API user
  I want to manage users via API requests
  So that I can retrieve, create, update, and delete user information

  Scenario: Retrieve an existing user
    Given the user API is available
    When I request a user by ID
    Then the response should contain the user details
    And the status code should be 200

  Scenario: Retrieve a non-existing user
    Given the user API is available
    When I request a user with a non-existent ID
    Then the response should return an error message
    And the status code should be 404

  Scenario: Create a new user
    Given the user API is available
    When I send a request to create a user with valid data
    Then the response should confirm the user was created
    And the status code should be 201

  Scenario: Fail to create a user with invalid data
    Given the user API is available
    When I send a request to create a user with invalid data
    Then the response should contain an error message
    And the status code should be 400

  Scenario: Update user details
    Given an existing user in the system
    When I send a request to update the user’s information
    Then the response should confirm the update was successful
    And the status code should be 200

  Scenario: Fail to update a non-existing user
    Given the user API is available
    When I send a request to update a non-existent user
    Then the response should contain an error message
    And the status code should be 404

  Scenario: Remove a user from the system
    Given an existing user in the system
    When I send a request to delete the user
    Then the response should confirm the user was removed
    And the status code should be 200

  Scenario: Fail to remove a non-existing user
    Given the user API is available
    When I send a request to delete a non-existent user
    Then the response should contain an error message
    And the status code should be 404
