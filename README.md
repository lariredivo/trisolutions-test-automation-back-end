# trisolutions-test-automation-back-end
# Trisolutions Test Automation - Front-End

## 📌 Project Overview
This project contains automated tests for the front-end of the Grocery CRUD application. The tests validate key user flows such as adding and deleting customers. The automation is implemented using **Cypress**.

## 🛠️ Technologies Used
- **Cypress** - End-to-end testing framework
- **JavaScript** - Programming language
- **Mochawesome** - Test reporting
- **Chrome/Firefox** - Supported browsers

## 📂 Project Structure
```
trisolutions-test-automation-front-end/
│-- cypress/
│   ├── e2e/               # Test scenarios
│   ├── reports/           # Test execution reports
│   ├── screenshots/       # Captured screenshots
│   └── support/           # Custom Cypress commands
│-- cypress.config.js      # Cypress configuration file
│-- package.json           # Project dependencies
│-- README.md              # Project documentation
```

## 🚀 How to Set Up and Run Tests
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/trisolutions-test-automation-front-end.git
cd trisolutions-test-automation-front-end
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run Tests in Headless Mode
```sh
npx cypress run
```

### 4️⃣ Run Tests with Cypress UI
```sh
npx cypress open
```

## 📊 Test Reports & Screenshots
- **Mochawesome Report**: Reports are stored in `cypress/reports/`.
- **Screenshots**: Captured images are stored in `cypress/screenshots/`.

##🎓 Lessons Learned & Challenges
###Lessons Learned
I am very proud of completing both projects successfully. Throughout the process, I leveraged ChatGPT to assist in writing code, but I knew exactly what to ask and how to find the necessary elements to solve issues. I also effectively used the browser's inspector to locate elements and debug problems. This experience strengthened my problem-solving skills and deepened my understanding of test automation.

###Challenges
One challenge I encountered was integrating BDD directly into Cypress. Although I was unable to implement it in the code, I ensured best practices by documenting the test scenarios using Gherkin syntax. This approach allowed me to maintain structured and readable test cases while adhering to industry standards.

