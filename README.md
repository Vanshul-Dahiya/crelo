# Crelo - Trello Clone

**Live Demo:** [Crelo](https://crelo.vercel.app/)

## Overview

Crelo is a powerful Trello clone built on Next.js 14, React, Prisma, Stripe, Tailwind, and NoSQL. It offers a comprehensive set of features for agile project management, providing a seamless and collaborative environment for task and project organization.

## Key Features

- **Authentication:** Secure user access with a robust authentication system.
- **Organizations / Workspaces:** Manage multiple organizations or workspaces for distinct project environments.
- **Board Management:** Effortlessly create and manage boards for project workflows.
- **Random Cover Images:** Utilize the Unsplash API to randomly select beautiful cover images for boards.
- **Activity Log:** Track and monitor organizational activities with a detailed activity log.
- **Board Operations:** Rename or delete boards as needed.
- **List Management:** Create, rename, delete, and reorder lists within boards. Enable drag & drop functionality for list reordering. Copy lists for quick replication.
- **Card Operations:** Create, rename, delete, and reorder cards within lists. Enable drag & drop functionality for card reordering. Copy cards for efficient replication.
- **Card Activity Log:** Keep track of card-specific activities with a dedicated activity log.
- **Board Limit:** Set board limits for each organization to maintain project scalability.
- **Landing Page:** Present Crelo's features and benefits on a visually appealing landing page.
- **Database:** Utilize NoSql for data storage with Prisma as the ORM tool.
- **UI Framework:** Use shadcnUI and TailwindCSS for a visually appealing and responsive user interface.

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up the NoSql database and update Prisma configuration.
4. Configure Stripe integration for subscription management.
5. Run the development server with `npm run dev`.
6. Access the application in your browser at [http://localhost:3000](http://localhost:3000).

## Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Prerequisites

- Node version 18.x.x

## Cloning the Repository

```bash
git clone https://github.com/vanshul-dahiya/crelo.git

npm install

# Setting up .env file

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

STRIPE_API_KEY=

NEXT_PUBLIC_APP_URL=

STRIPE_WEBHOOK_SECRET=


npx prisma generate
npx prisma db push


npm run dev
