# Token Generator on BNB Chain with Core DAO

![alt text](https://x.com/KunalDhongade/status/1813517027132559585/photo/1)

## Project Overview

This project is a Token Generator built on the BNB Chain using Vite and npm. It allows users to create standard tokens (ERC/BRC) and liquidity generator tokens with various features such as max limit, max transaction limit, marketing and operation fees, burn fees, and liquidity fees.

## Features

- **Standard Token (ERC/BRC):** Create standard tokens following the ERC/BRC standards.
- **Liquidity Generator Token:** Tokens that include built-in liquidity generation mechanisms.
- **Max Limit:** Set a maximum limit for token supply.
- **Max Transaction Limit:** Restrict the maximum number of tokens that can be transferred in a single transaction.
- **Marketing and Operation Fee:** A percentage of each transaction can be directed to a marketing and operations wallet.
- **Burn Fee:** A percentage of each transaction can be burned (removed from supply).
- **Liquidity Fee:** A percentage of each transaction can be added to the liquidity pool and directed to a liquidity fee wallet.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kunaldhongade/GeneToken.git
   cd GeneToken
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the project:**
   ```bash
   npm run dev
   ```
4. **Project Launched:**
   ```bash
   http://localhost:5173/
   ```

## Demo

![alt text](https://x.com/KunalDhongade/status/1813517027132559585/photo/1)

## Usage

1. **Create a Standard Token:**

   - Navigate to the token creation interface.
   - Enter the desired token parameters such as name, symbol, total supply, etc.
   - Deploy the token on the BNB Chain.

2. **Create a Liquidity Generator Token:**

   - Similar to creating a standard token, but with additional parameters for liquidity fees, burn fees, etc.

3. **Configure Fees:**
   - Set the marketing and operation fee percentage.
   - Set the burn fee percentage.
   - Set the liquidity fee percentage.

## Configuration

### Token Parameters

- **Name:** The name of the token.
- **Symbol:** The token symbol (e.g., BRC).
- **Total Supply:** The total supply of the token.
- **Max Transaction Limit:** The maximum number of tokens that can be transferred in a single transaction.
- **Marketing and Operation Fee:** Percentage of each transaction sent to the marketing and operation wallet.
- **Burn Fee:** Percentage of each transaction that will be burned.
- **Liquidity Fee:** Percentage of each transaction added to the liquidity pool.

### Wallets

- **Marketing and Operation Wallet:** The wallet address where the marketing and operation fee is sent.
- **Burn Wallet:** The wallet address used for burning tokens.
- **Liquidity Wallet:** The wallet address where the liquidity fee is added.

## Contributing

We welcome contributions from the community! This project is build for hacker-house-goa. To contribute, please fork the repository and create a pull request with your changes. Ensure your code follows the existing style and includes appropriate tests.

## License

This Project is build for Hacker House Goa. So we consider project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
