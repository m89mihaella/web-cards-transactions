
# Cards and Transactions Overview

## Introduction
Welcome to the **Cards and Transactions Overview** application! This project provides users with a convenient interface to view cards and their associated transactions. Users can select a card, view its transactions, and filter transactions based on their amount.

## Features
- **Card Selection**: Users can select one of the available cards.
- **Transaction Display**: Transactions of the selected card are displayed with matching background colors.
- **Filtering**: Users can filter transactions by entering an amount in the filter field.
- **Reset Functionality**: If the selected card changes, the filter field content is reset.

## Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/m89mihaella/web-cards-transactions.git
   ```
2. Navigate to the project directory:
   ```bash
   cd web-cards-transactions
   ```
3. Install dependencies using Yarn:
   ```bash
   yarn install
   ```

## Usage
1. Start the development server:
   ```bash
   yarn start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## Folder Structure
The project follows the following folder structure:
```
public/
  index.html
src/
  components/
    CardList.tsx
    TransactionList.tsx
    FilterInput.tsx
  data/
    cards.json
    transactions.json
  services/
    apiClient.ts
  types/
    types.d.ts
  App.tsx
  index.tsx
  theme.ts
```

## Technologies Used
- **React**: Frontend framework for building user interfaces.
- **Styled Components**: CSS-in-JS library for styling React components.
- **TypeScript**: Typed superset of JavaScript for improved development experience.

## Development Approach
- **Mobile-First Approach**: The application was developed following a mobile-first approach to ensure a responsive design across all devices.
- **Clamps for Font Sizes**: Font sizes were defined using clamps to ensure optimal readability and responsiveness across different screen sizes.

---

