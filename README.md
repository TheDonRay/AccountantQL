# AccountantQL

A GraphQL-based financial management API that streamlines personal finance workflows through structured queries for accounts, bills, goals, budgets, and AI-powered financial analysis.

---

## Features

- **Account Management** — Query and manage personal financial accounts in one place
- **Bill Tracking** — Structured queries to monitor upcoming and recurring bills
- **Goal Amounts** — Set and track financial goals with real-time progress
- **Budget Queries** — Retrieve and analyze budget allocations across categories
- **AI Financial Analysis** — Get intelligent insights on your personal finances powered by AI

---

## Tech Stack

- **API Layer:** GraphQL
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **AI Integration:** OpenAI API

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB instance (local or Atlas)
- OpenAI API key

### Installation

```bash
git clone https://github.com/TheDonRay/accountantql.git
cd accountantql
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_jwt_secret
```

### Running the Server

```bash
# Development
npm run dev

# Production
npm start
```

The GraphQL playground will be available at `http://localhost:4000/graphql`.

---

## Example Queries

### Fetch All Accounts

```graphql
query {
  accounts {
    id
    name
    balance
    type
  }
}
```

### AI Financial Analysis

```graphql
query {
  financialAnalysis {
    summary
  }
}
```

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## License

[MIT](LICENSE)
