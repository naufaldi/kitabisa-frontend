Certainly! Here's a README.md template for your repository based on our previous discussions and the live website reference:

# Kitabisa Frontend

This repository contains the frontend codebase for the crowdfunding platform Kitabisa, Indonesia's leading platform for fundraising and charity. The website is designed to facilitate the discovery and support of various social campaigns across Indonesia, encouraging community participation and collective action towards positive causes.

## Live Website

Check out the live website here: [Kitabisa Frontend](https://kitabisa-frontend.vercel.app/)

## Key Features

- **Campaign Listing:** Displays an assortment of campaigns that users can contribute to, ranging from health, education, disaster relief, and more.
- **Progress Tracking:** Each campaign card showcases the amount raised, the goal, and a progress bar to visually represent the campaign's progress.
- **Sorting Functionality:** Users can sort campaigns based on the donation target, either in ascending or descending order, to easily find campaigns according to their preferences.

## Technology Stack

- **Next.js:** Chosen for its server-side rendering capabilities, improving SEO and performance.
- **TypeScript:** Utilized for its strong typing system, enhancing code reliability and maintainability.
- **Zustand:** A minimalist state management solution was employed to handle the application state, particularly for sorting criteria.
- **Tailwind CSS:** For styling, leveraging its utility-first approach for rapid UI development.

## Architecture Decisions

- **Component Modularization:** The UI is broken down into reusable components (`Card`, `Progress`, `Sorting`), facilitating easier maintenance and scalability.
- **State Management:** Zustand was chosen for its simplicity and flexibility, adequately meeting the state management needs without introducing excessive complexity.
- **Custom Hooks and Utilities:** Developed custom hooks and utility functions (`useCampaignStore`, `formatToIDR`) to encapsulate and abstract functionality, promoting code reuse and separation of concerns.

## Getting Started

To bootstrap and run the program locally, follow these steps:

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/naufaldi/kitabisa-frontend.git
cd kitabisa-frontend
```

2. Install the dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
