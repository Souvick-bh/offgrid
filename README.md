# offstellar backend

Node.js (Express) backend with MongoDB (Mongoose).

## Setup

```bash
cd backend
npm install
cp .env.example .env
```

Update `MONGODB_URI` in `.env` if needed.

## Run

```bash
npm run dev
```

Health check:

```bash
curl http://localhost:3000/health
```

## Create user

Route: `POST /users`

```bash
curl -X POST http://localhost:3000/users \
  -H 'content-type: application/json' \
  -d '{"name":"Ada Lovelace","email":"ada@example.com"}'
```

