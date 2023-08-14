# Currency Converter Application Documentation

This application provides a user-friendly interface for currency conversion, allowing users to effortlessly convert between different currencies. It utilizes latest currency exchange rates obtained from an external server to ensure accuracy.

# [Figma design](https://www.figma.com/file/JgKwIGUvHhRPMECqXgLtMt/Currency-Converter?node-id=4%3A60&mode=dev)

# [Demo link](https://andrii-kuzmenko.github.io/currency_converter/)

## Overview
The Currency Converter is a web-based application designed to facilitate easy currency conversion. Users can input an amount in one currency and instantly receive the equivalent value in another currency. 

Key Features
Currency Conversion: Users can input an amount and select two currencies to convert between. The application will then calculate and display the equivalent value in the desired currency.

Real-Time Exchange Rates: The application fetches latest currency exchange rates from an external server, ensuring accuracy and reliability in the conversion process.

"Swap" button: Between two inputs of currencies there is a "swap" button. When user clicks on this one button - selected currencies in the currencies list will be swapped. The selected amount of both currencies will be saved.

User-Friendly Interface: The interface is designed to be intuitive and easy to navigate, making currency conversion a seamless experience for all users.

## How It Works
Currency Selection: Choose the source currency (the currency you want to convert from) and the target currency (the currency you want to convert to) using the dropdown menus.

Amount Input: Enter the amount of the source currency that you wish to convert.

Conversion Result: Instantly view the converted amount in the target currency. The application will perform the conversion using the latest exchange rates.

## Starting project:

In the project directory, you can run:

### `npm i`   http://localhost:3000
### `npm run dev`

## Using the API:

The "Frankfurter" API provides accurate and up-to-date currency exchange rates. To access the API, you need to use the provided endpoints and query parameters.

Example request to get the exchange rate between two currencies:

http example
```GET /latest?amount=1&from=GBP&to=USD```

Response:
```{
  "amount": 1,
  "base": "GBP",
  "date": "2023-05-10",
  "rates": {
    "USD": 1.2734
  }
}```

To make requests to the Frankfurter API, you need to construct the appropriate URLs using the base URL https://api.frankfurter.app. For more details on available endpoints and query parameters, refer to the official Frankfurter API documentation.

## Changing Configuration:

You can configure certain default parameters for the application by modifying the configuration. The configuration is stored in a special config.js file.

A simple example of configuration:

```// dataConfig.ts
export const config = {
  defaultCurrencyName: 'USD',
  defaultConvertedCurrencyName: 'en',
};```

Once the configuration is set, you can use these default values throughout the application, for example:

```import config from './dataConfig';

const defaultCurrencyName = config.defaultCurrencyName;
const defaultConvertedCurrencyName = config.defaultConvertedCurrencyName;

console.log(`Default currency: ${defaultCurrencyName}`);
console.log(`Default converted currency: ${defaultConvertedCurrencyName}`);```

This allows for easy modification of application parameters without the need to edit code in multiple places.

## Used technologies:

 - React
 - Typescript
 - SCSS
 - Axios
 - ClassNames
 - usehooks-ts

