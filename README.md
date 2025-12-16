# Syrian Liberation Day Event Platform

> A multilingual event website commemorating Syrian Liberation Day

## 📖 About

This is a responsive, multilingual web application built for the Syrian community in Turkey to commemorate Liberation Day (December 20, 2025). The platform serves as a digital hub for the event, providing comprehensive information about the commemoration activities, agenda, speakers, and registration details.

**Purpose**: To remember the past, celebrate freedom, and strengthen community connections through a professionally designed, accessible event platform.

**Target Audience**:
- Syrian community members in Turkey
- Event organizers and coordinators
- Developers maintaining or extending the platform

---

## ✨ Key Features

- **🌍 Multilingual Support**: Full support for Arabic (with RTL layout), English, and Turkish
- **📱 Responsive Design**: Mobile-first design approach using Tailwind CSS
- **📍 Event Information**: Complete event details including date, time, and venue with Google Maps integration
- **🎯 Interactive Sections**: 
  - Hero section with event branding
  - Event agenda and schedule
  - Speaker profiles
  - Organizer information
  - Registration call-to-action
- **⏰ Countdown Timer**: Real-time countdown to the event date
- **🎨 Modern UI Components**: Built with ShadCN UI library on Radix UI primitives
- **⚡ Performance Optimized**: Vite build tool with fast hot module replacement

---

## 🛠️ Technology Stack

### Core Framework
- **React** 18.3.1 - UI library
- **TypeScript** 5.8.3 - Type safety
- **Vite** 5.4.19 - Build tool and dev server

### UI and Styling
- **Tailwind CSS** 3.4.17 - Utility-first CSS framework
- **ShadCN UI** - Component library built on Radix UI primitives
- **Lucide React** - Icon library

### State Management and Routing
- **React Router DOM** 6.30.1 - Client-side routing
- **TanStack Query** 5.83.0 - Data fetching and state management
- **React Hook Form** 7.61.1 - Form handling

### Utilities
- **date-fns** 3.6.0 - Date manipulation
- **clsx** & **tailwind-merge** - Class name merging
- **zod** 3.25.76 - Schema validation

### Build and Development
- **ESLint** - Code quality and linting
- **PostCSS** & **Autoprefixer** - CSS processing

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher recommended)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sc-dof
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npm run dev
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

**Development Features**:
- Hot Module Replacement (HMR) for instant updates
- Fast refresh for React components
- TypeScript type checking

**Testing Language Support**:
Use the language switcher in the navigation bar to test Arabic (RTL), English, and Turkish translations.

### Build

**Production build**:
```bash
npm run build
```

**Development build**:
```bash
npm run build:dev
```

**Preview production build**:
```bash
npm run preview
```

**Output**: Built files are generated in the `dist/` directory.

### Additional Scripts

- **Lint code**: `npm run lint` - Run ESLint to check code quality

---

## 📁 Project Structure

```
sc-dof/
├── src/
│   ├── components/          # UI components organized by feature
│   │   ├── ui/             # Reusable ShadCN UI components
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── AgendaSection.tsx
│   │   ├── SpeakersSection.tsx
│   │   └── ...
│   ├── contexts/           # React contexts (LanguageContext for i18n)
│   ├── data/              # Event data model (eventData.ts)
│   ├── pages/             # Route-level components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── App.tsx            # Root application component
│   └── main.tsx           # Application entry point
├── public/                # Static assets
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

**Path Alias**: The project uses `@/*` as an alias mapping to `src/*` for cleaner imports.

Example:
```typescript
import { Button } from '@/components/ui/button'
import { eventData } from '@/data/eventData'
```

---

## ⚙️ Configuration

### Vite Configuration

Configured in `vite.config.ts`:
- **Development server port**: 8080
- **Path aliases**: `@` → `src/`
- **React plugin**: SWC for fast refresh
- **Component tagger**: Development mode only

### Tailwind Configuration

Configured in `tailwind.config.ts`:
- Custom theme extensions
- RTL support for Arabic language
- Custom color schemes matching Syrian flag colors
- Responsive breakpoints

### TypeScript Configuration

Configured in `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`:
- **Strict mode** enabled for type safety
- **Path mapping** for `@/*` alias
- Separate configurations for app and build tools

---

## 🌐 Internationalization (i18n)

### Supported Languages

- **Arabic (ar)**: Primary language with RTL (right-to-left) layout support
- **English (en)**: Secondary language
- **Turkish (tr)**: Tertiary language for local audience

### Translation Management

**Translation files**: Located in `src/contexts/LanguageContext.tsx`

**Translation key naming convention**: `section.element`

Examples:
- `hero.title` - Hero section title
- `nav.home` - Navigation home link
- `agenda.title` - Agenda section title

**Language switching**: Managed via React Context API

### Adding New Translations

1. Open `src/contexts/LanguageContext.tsx`
2. Add the new key to all language objects (ar, en, tr)
3. Use the `t()` function in components:
   ```typescript
   const { t } = useLanguage()
   return <h1>{t('section.newKey')}</h1>
   ```
4. Ensure RTL layout compatibility for Arabic content

### Event Data Localization

**Event-specific content**: `src/data/eventData.ts`

Contains:
- Venue information
- Agenda items
- Speaker details
- Organizer information

---

## 👨‍💻 Development Guidelines

### Code Quality

- Follow ESLint configuration for consistent code style
- Maintain TypeScript strict mode compliance
- Use PascalCase for component naming
- Write meaningful commit messages

### Component Development

- Use **functional components** with hooks
- Leverage **ShadCN UI components** from `ui/` directory
- Follow **responsive-first** design principles
- Implement proper **TypeScript typing** for props and state

### Best Practices

✅ **DO**:
- Keep components focused on a single responsibility
- Use translation keys instead of hardcoded strings
- Test across all three languages (AR, EN, TR)
- Verify responsive behavior on multiple screen sizes
- Optimize images and assets for web performance

❌ **DON'T**:
- Hardcode text strings in components
- Skip TypeScript type definitions
- Ignore ESLint warnings
- Commit without testing language switching

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the development guidelines
4. Test across all languages and screen sizes
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

---

## 📄 License

All rights reserved. Made with ❤️ for the Syrian Community.

---

## 🙏 Acknowledgments

- **Syrian Community in Turkey** - Event organization and community support
- **Leadership Academy for Sustainable Development** - Partnership and collaboration
- All contributors and volunteers who made this event possible
