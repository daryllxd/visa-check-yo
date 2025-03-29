# Visa Check

A web application to help travelers check which countries they can visit based on their nationality and existing visas.

## Features

- **Visa Eligibility Checker**: Check which countries you can visit based on your citizenship
- **Interactive World Map**: Visualize where you can travel with color-coded access types
- **Travel Planning**: Plan international trips based on your visa eligibility

## Technology Stack

- **Framework**: Next.js with App Router
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Data Fetching**: TanStack Query (React Query)
- **Form Handling**: React Hook Form
- **Package Manager**: PNPM

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- PNPM package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd visa-check-yo
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `app/`: Next.js App Router pages and layouts
- `components/`: Reusable UI components
  - `layout/`: Layout components like Header and Footer
  - `ui/`: ShadCN UI components
- `lib/`: Utility functions and shared code
- `public/`: Static assets

## Future Integrations

The application is designed to be easily extended with:

- Database integration (Supabase, Prisma, etc.)
- Authentication system
- Map visualization libraries
- Country and visa data APIs

## License

MIT
