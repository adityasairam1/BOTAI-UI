# BOTAI-UI

A modern ChatBot application front-end built with React, TypeScript, and Vite.

## 🚀 Tech Stack

- **React 19.2.0** - UI library
- **TypeScript** - Type safety
- **Vite 7.2.2** - Build tool and dev server
- **React Router DOM 7.9.6** - Client-side routing
- **Plain CSS** - Styling (no CSS-in-JS or Tailwind)

## 📁 Project Structure

```
src/
├── components/
│   ├── DynamicForm/
│   │   ├── DynamicForm.tsx      # Reusable form component
│   │   └── DynamicForm.css
│   ├── Navbar/
│   │   ├── Navbar.tsx           # Navigation bar component
│   │   └── Navbar.css
│
├── pages/
│   ├── LoginPage/
│   │   ├── LoginPage.tsx        # Login page
│   │   └── LoginPage.css
│   ├── SignupPage/
│   │   ├── SignupPage.tsx       # Signup page
│   │   └── SignupPage.css
│   ├── ChatPage/
│   │   ├── ChatPage.tsx         # Chat interface
│   │   └── ChatPage.css
│
├── styles/
│   ├── global.css               # Global styles and resets
│   └── variables.css            # CSS custom properties
│
├── api/
│   └── auth.ts                  # Placeholder for future API calls
│
├── App.tsx                      # Main app component with routing
└── main.tsx                     # Application entry point
```

## ✨ Features Implemented

### 1. **Dynamic Form System**
- Generic, reusable form component (`DynamicForm`)
- Accepts any field configuration
- Type-safe with TypeScript
- Supports all standard input types (text, email, password, etc.)
- Form data managed with controlled inputs

### 2. **Authentication Pages**

#### Login Page (`/`)
- Email and password fields
- Link to signup page
- Centered, card-based layout
- Form submission logs data to console (ready for backend integration)

#### Signup Page (`/signup`)
- Fields: Username, Email, Password, First Name, Last Name
- Link back to login page
- Consistent styling with login page
- Form submission logs data to console

### 3. **Navigation Bar**
- Sticky navbar at the top
- App branding: "BOTAI Chat"
- Navigation links: Login, Signup, Chat
- Logout button (placeholder - logs and redirects to `/`)
- Responsive design

### 4. **Chat Interface** (`/chat`)
- Scrollable message area
- Message bubbles with distinct styling:
  - User messages: Right-aligned, blue background
  - Bot messages: Left-aligned, light grey background
- Input field with Send button at the bottom
- Placeholder bot responses (echoes user input)
- Fixed input area (always visible)
- Smooth scrolling

### 5. **Styling System**
- CSS custom properties (variables) for theming
- Consistent design system:
  - Primary color: `#0078ff`
  - Border radius: `8px`
  - Shadow effects
  - Modern font stack
- Responsive layouts
- Clean, minimalist design

## 🎨 Design System

### CSS Variables
Defined in `src/styles/variables.css`:
- `--primary`: Primary brand color (#0078ff)
- `--primary-dark`: Darker shade for hover states
- `--radius`: Border radius (8px)
- `--shadow`: Box shadow for cards
- `--font-main`: System font stack

### Component Styling
- Each component/page has its own `.css` file
- Consistent card-based layouts for forms
- Modern, clean aesthetic
- Hover states and transitions

## 🛣️ Routing

Routes configured in `App.tsx`:
- `/` → LoginPage
- `/signup` → SignupPage
- `/chat` → ChatPage

All routes are wrapped with the Navbar component.

## 🔧 TypeScript Configuration

- **verbatimModuleSyntax**: Enabled
- Type exports use `export type`
- Type imports use `import type { ... }`
- Strict mode enabled
- Full type safety throughout

## 📝 Current Status

### ✅ Completed
- All UI components and pages
- Routing setup
- Form system
- Chat interface UI
- Responsive layouts
- TypeScript type safety

### 🚧 Pending (Backend Integration)
- Real authentication API calls
- Backend chat API integration
- User session management
- Error handling
- Loading states
- Form validation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Development Notes

- All form submissions currently log to console (no backend calls yet)
- Chat bot responses are placeholder (echoes user input)
- Logout button is a placeholder (logs and redirects)
- Ready for backend API integration

## 🔮 Future Enhancements

- [ ] Connect to .NET backend API
- [ ] Implement real authentication
- [ ] Add form validation
- [ ] Integrate real chat API
- [ ] Add loading states
- [ ] Error handling and user feedback
- [ ] User session management
- [ ] Message history persistence
- [ ] Real-time chat updates

## 📄 License

Private project - All rights reserved

