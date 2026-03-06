# User Management System

A modern, full-featured user management application built with Next.js, TypeScript, Redux Toolkit, and Tailwind CSS. This application provides a complete user management solution with a multi-step form, data validation, and an intuitive user interface.

## 🚀 Features

- **User Dashboard**: View all users in an attractive grid layout with user cards
- **Multi-Step Form**: 3-step form wizard for creating and editing users
  - Step 1: Basic Information (First Name, Last Name, Email, Password)
  - Step 2: Professional Details (Phone, Department, Role)
  - Step 3: Review & Confirmation
- **Form Validation**: Comprehensive validation using Zod schemas
- **User CRUD Operations**: Create, read, update, and delete users
- **Status Toggle**: Easily toggle user active/inactive status
- **Search Functionality**: Search users by first name
- **Modern UI**: Beautiful gradient backgrounds, smooth animations, and responsive design
- **State Management**: Redux Toolkit for global state management
- **Professional Styling**: Tailwind CSS with custom global styles

## 🛠️ Technology Stack

- **Frontend Framework**: [Next.js 16](https://nextjs.org) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org) - Predictable state container
- **Form Management**: [React Hook Form](https://react-hook-form.com) - Performant flexible forms
- **Validation**: [Zod](https://zod.dev) - Shape validation with static type inference
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Components**: Custom UI components built with React
- **Notifications**: [React Hot Toast](https://react-hot-toast.com) - Toast notifications
- **Utilities**: UUID generation for unique user IDs

## 📋 Prerequisites

- Node.js 16+ and npm/yarn
- Basic knowledge of React and TypeScript

## 🏃 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
user-management-nextjs/
├── app/
│   ├── page.tsx                 # Home/dashboard page
│   ├── layout.tsx               # Root layout with providers
│   ├── globals.css              # Global styles
│   ├── users/
│   │   ├── page.tsx             # Users listing page
│   │   └── create/
│   │       └── page.tsx         # Create user page
│   └── users/
│       └── edit/
│           └── [id]/
│               └── page.tsx     # Edit user page
├── components/
│   ├── users/
│   │   ├── MultiStepForm.tsx    # Main form component
│   │   ├── UserCard.tsx         # User card component
│   │   ├── UserRow.tsx          # User row component
│   │   ├── UserTable.tsx        # User table component
│   │   └── ...
│   └── providers.tsx            # Redux provider wrapper
├── store/
│   ├── store.ts                 # Redux store configuration
│   └── userSlice.ts             # User reducer and actions
├── types/
│   └── users.ts                 # TypeScript type definitions
├── schemas/
│   └── userSchema.ts            # Zod validation schemas
├── data/
│   ├── department.json          # Department data
│   └── role.json                # Role data
├── Step1.tsx, Step2.tsx, Step3.tsx  # Form step components
├── package.json
├── tsconfig.json
└── README.md
```

## 🔑 Key Components

### MultiStepForm Component
The main form component that handles user creation and editing with:
- Multi-step form navigation (Previous/Next/Submit buttons)
- Form validation at each step
- Progress bar showing step completion
- Default values for edit mode

### UserCard Component
Displays user information in a card format with:
- User details with icons
- Status badge (Active/Inactive)
- Toggle and Delete actions
- Hover effects and smooth transitions

### Redux Store
User state management with actions:
- `addUser`: Create a new user
- `updateUser`: Update existing user
- `deleteUser`: Remove a user
- `toggleStatus`: Toggle user active/inactive status

## 🎨 Styling

The application features:
- **Gradient Background**: Light blue and white gradient for a modern look
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Custom Colors**: Professional color palette with blue, green, and red accents
- **Animations**: Smooth transitions and hover effects
- **Dark Mode Ready**: CSS variables for easy theme switching

## 📝 Form Validation

All forms use Zod schemas to validate:
- Required fields
- Email format
- Password confirmation
- Phone number format
- Department and role selections

Validation errors are displayed in-line with helpful messages.

## 🎯 Usage

### Creating a User
1. Click "Create User" button
2. Fill in Step 1: Basic Information
3. Click "Next" to proceed to Step 2
4. Fill in Step 2: Professional Details
5. Click "Next" to proceed to Step 3
6. Review information on Step 3
7. Click "Submit" to create the user

### Viewing Users
- Navigate to the Users page to see all users in a grid layout
- Each user card shows their information and status
- Use the search bar to filter users by first name

### Editing a User
1. Click "Edit" button on a user card
2. Modify the user information through the form steps
3. Submit to save changes

### Deleting a User
- Click "Delete" button on a user card
- User will be immediately removed from the system

### Toggling User Status
- Click "Toggle" button on a user card
- User status will switch between Active and Inactive

## 🔧 Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🌐 Environment Setup

The application is pre-configured and ready to run. No environment variables are required for basic functionality.

## 📱 Responsive Design

The application is fully responsive:
- **Mobile**: Single column layout
- **Tablet**: 2-column grid layout
- **Desktop**: 3-column grid layout

## 🚀 Deployment

This Next.js application can be easily deployed to:
- [Vercel](https://vercel.com) - Recommended for Next.js
- [Netlify](https://netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify)
- Any Node.js hosting provider

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [React Hook Form](https://react-hook-form.com/get-started)
- [Zod Validation](https://zod.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📞 Support

For questions or issues, please create an issue in the repository.

---

**Built with ❤️ using Next.js and modern web technologies**
