# 📌 Test Scenarios (BDD - Gherkin)

This document outlines the test scenarios for **Back-End** automation using BDD (Gherkin syntax).

---
```gherkin
Feature: Retrieve customer information**


  Scenario: Successfully retrieving customer data
    Given the API is available at "https://jsonplaceholder.typicode.com/users"
    When I send a GET request to "/users/1"
    Then the response status should be 200
    And the response should contain customer details

  Scenario: Attempting to retrieve a non-existent customer
    Given the API is available at "https://jsonplaceholder.typicode.com/users"
    When I send a GET request to "/users/9999"
    Then the response status should be 404

Feature: Add a new customer via API

  Scenario: Successfully creating a new customer
    Given the API is available at "https://jsonplaceholder.typicode.com/users"
    When I send a POST request to "/users" with valid customer data
    Then the response status should be 201
    And the response should contain the created customer details

  Scenario: Attempting to create a customer with missing data
    Given the API is available at "https://jsonplaceholder.typicode.com/users"
    When I send a POST request to "/users" with incomplete data
    Then the response status should be 400

Feature: Update customer information

  Scenario: Successfully updating customer data
    Given a customer exists with ID "1"
    When I send a PUT request to "/users/1" with updated information
    Then the response status should be 200
    And the response should reflect the updated customer details

  Scenario: Attempting to update a non-existent customer
    Given no customer exists with ID "9999"
    When I send a PUT request to "/users/9999"
    Then the response status should be 404

Feature: Remove a customer via API

  Scenario: Successfully deleting a customer
    Given a customer exists with ID "1"
    When I send a DELETE request to "/users/1"
    Then the response status should be 200

  Scenario: Attempting to delete a non-existent customer
    Given no customer exists with ID "9999"
    When I send a DELETE request to "/users/9999"
    Then the response status should be 404

