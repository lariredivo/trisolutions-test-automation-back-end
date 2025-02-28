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

## 🏆 Evaluation Criteria
- Full compliance with requirements
- Code quality, best practices, and organization
- Efficiency of the implemented solutions
- Clear and detailed documentation
- Successful execution without validation issues or exceptions

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


