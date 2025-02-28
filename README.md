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
- To merge reports and generate an HTML file, run:
```sh
npx mochawesome-merge cypress/reports/*.json -o cypress/reports/report.json
npx marge cypress/reports/report.json -o cypress/reports/
Open cypress/reports/index.html in your browser.
```

## 🎓 Lessons Learned 
I am very proud of completing this project successfully. Throughout the process, I used ChatGPT to assist in writing code, but I knew what to ask and how to find the necessary elements to solve issues. I also effectively used API documentation and request debugging techniques to validate and troubleshoot API responses.


