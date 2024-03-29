# Agile Teste

## Overview

This project is a React application for displaying product information using the Agile API. It includes a Products page that fetches and renders product data.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Project Structure](#project-structure)
- [Styling](#styling)
- [Demo](#demo)

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Nishiyama13/agile-test.git
```
```bash
cd agile-test
```

2. Install dependencies:
```bash
npm install
```

### Usage
Run the application:
```bash
npm run dev
```
Visit http://localhost:5173 in your browser.

### Project Structure
The project structure is organized as follows:

```bash
src
|-- Pages
| |-- ProductsPage
| |-- index.jsx
| |-- styled.jsx
|
|-- components
| |-- Card
| |-- index.jsx
| |-- styled.jsx
|
| |-- ProductInfo
| |-- index.jsx
| |-- styled.jsx
|
|-- helpers
| |-- formatDate.js
|
|-- services
| |-- apiAgileProducts.js
|
|-- App.jsx
|-- index.jsx
|-- index.css
```
### Styling
The application uses styled-components for styling. Styles are organized within each component's styled.jsx file for better modularity.

### Demo

Check out the live demo of the project [here](https://agile-test-gamma.vercel.app/).
