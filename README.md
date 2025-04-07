# Raunak Shukla - Personal Portfolio

A modern, responsive portfolio website showcasing Raunak Shukla's career journey, startup ventures, projects, and skills.

## Features

- Responsive design for all device sizes
- Modern UI with micro-animations and smooth transitions
- Dark/Light mode toggle
- Interactive sections for startups, projects, and skills
- Contact form for inquiries
- SEO optimized

## Tech Stack

- **Frontend**: 
  - Next.js (React)
  - TypeScript
  - TailwindCSS for styling
  - Framer Motion for animations

- **Deployment**:
  - Vercel (recommended)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/raunakshukla/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router
│   ├── components/     # React components
│   └── styles/         # Global styles
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md           # Project documentation
```

## Customization

You can customize the portfolio by:

1. Replacing placeholder images in the `public` directory
2. Updating personal information in the components
3. Modifying the color scheme in `tailwind.config.js`

## Deployment

The easiest way to deploy this portfolio is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fraunakshukla%2Fportfolio)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Manrope font by [Google Fonts](https://fonts.google.com/specimen/Manrope)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animation library by [Framer Motion](https://www.framer.com/motion/)
