# Playwright E2E Testing

This repository utilizes Playwright to write end-to-end (E2E) tests for the publicly available products web app [Commit Quality](https://commitquality.com/).  Thank you to Commit Quality for making this app accessible.

## Installation

Follow these steps to install the necessary dependencies:

1. Install Node.js - Visit [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and download Node.js.
2. Install Git - Visit [https://gitforwindows.org/](https://gitforwindows.org/) and install Git.
3. Clone the repository and navigate to the 'playwright-e2e-testing' folder:

```shell
cd playwright-e2e-testing
```

4. Install the Node.js dependencies:

```shell
npm install
```

## How to Run Tests Locally

To execute all tests and view the results in the terminal, perform the following steps from the 'playwright-e2e-testing' folder:

```shell
npx playwright test
```

## Viewing Test Results

To view the latest HTML report, run the following command from the 'playwright-e2e-testing' folder:

```shell
npx playwright show-report
```

## Tools & Libraries

The following tools and libraries are used:

* Playwright
