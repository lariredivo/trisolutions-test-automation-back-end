# Trisolutions Test Automation - Back-End

## 📌 Project Overview
This project contains automated tests for the back-end of a public API. The tests validate endpoints for CRUD operations (GET, POST, PUT/PATCH, DELETE) with both positive and negative scenarios. The automation is implemented using **Cypress API testing**.

## 🛠️ Technologies Used
- **Cypress** - API testing framework
- **JavaScript** - Programming language
- **Mochawesome** - Test reporting

## 📂 Project Structure
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

## 🚀 How to Set Up and Run Tests
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/trisolutions-test-automation-back-end.git
cd trisolutions-test-automation-back-end
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run API Tests in Headless Mode
```sh
npx cypress run
```

### 4️⃣ Run Tests with Cypress UI
```sh
npx cypress open
```

## 📊 Test Reports & Quality Analysis
- **Mochawesome Report**: Reports are stored in `cypress/reports/`.
- **SonarQube Metrics** (optional): Used to analyze test quality.

## 🏆 Evaluation Criteria
- Full compliance with requirements
- Code quality, best practices, and organization
- Efficiency of the implemented solutions
- Clear and detailed documentation
- Successful execution without validation issues or exceptions

