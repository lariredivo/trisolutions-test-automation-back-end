# Trisolutions Test Automation - Back-End

## Project overview
This project contains automated tests for the back-end of a public API. The tests validate endpoints for CRUD operations (GET, POST, PUT/PATCH, DELETE) with both positive and negative scenarios. The automation is implemented using **Cypress API testing**.

## Technologies used
- **Cypress** - API testing framework
- **JavaScript** - Programming language
- **Mochawesome** - Test reporting

## Project structure
```
trisolutions-test-automation-back-end/
│-- cypress/
│   ├── e2e/               # API test scenarios
│   ├── reports/           # Test execution reports
│   └── support/           # Custom Cypress commands
│-- cypress.config.js      # Cypress configuration file
│-- package.json           # Project dependencies
│-- README.md              # Project documentation
```

## How to set up and run tests
### 1️ Clone the repository
```sh
git clone https://github.com/your-username/trisolutions-test-automation-back-end.git
cd trisolutions-test-automation-back-end
```

### 2️ Install dependencies
```sh
npm install
```

### 3️ Run API tests in headless mode
```sh
npx cypress run
```

### 4 Run tests with Cypress UI
```sh
npx cypress open
```

### Test reports & screenshots
- **Mochawesome Report**: Reports are stored in `cypress/reports/`.
- **Screenshots**: Captured images are stored in `cypress/screenshots/`.
- To merge reports and generate an HTML file, run:
```sh
npx mochawesome-merge cypress/reports/*.json -o cypress/reports/report.json
npx marge cypress/reports/report.json -o cypress/reports/
```
- Open `cypress/reports/index.html` in your browser.

### Test scenarios
Check [TEST_SCENARIOS.md](https://github.com/lariredivo/trisolutions-test-automation-back-end/blob/main/TEST_SCENARIOS.md) for details.
