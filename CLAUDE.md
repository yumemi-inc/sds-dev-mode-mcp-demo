# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Communication Language

**Always communicate in Japanese (日本語) when working in this repository.** All responses, explanations, and documentation should be provided in Japanese to match the team's preferred language.

## Commands

### Development
- `npm run app:dev` - Start development server at localhost:8000
- `npm run storybook` - Launch Storybook at localhost:6006

### Build & Lint
- `npm run app:build` - Build the application (TypeScript check + Vite build)
- `npm run app:lint` - Run ESLint with TypeScript support
- `npm run build` - Build both app and Storybook

### Storybook
- `npm run storybook:build` - Build Storybook to dist/storybook

### Figma Integration Scripts
- `npm run script:tokens` - Sync design tokens from Figma (requires .env setup)
- `npm run script:icons` - Sync icons from Figma (requires .env setup)
- `npm run figma:publish` - Publish Code Connect mappings to Figma
- `npm run figma:check` - Dry-run publish (validation only)

## Architecture

### Core Structure
- **React + TypeScript + Vite**: Modern React development stack
- **React Aria Components**: Accessible component foundation
- **Design System Pattern**: Primitives → Compositions → Layout components
- **Figma Code Connect**: Bi-directional design-code integration with MCP support
- **Data Layer Separation**: Contexts, providers, services, and hooks in dedicated `src/data/`

### Import Aliases (Configured in vite.config.ts and tsconfig.json)
```tsx
import { Header, Footer } from "compositions";
import { AllProviders, useAuth, usePricing } from "data";
import { useMediaQuery } from "hooks";
import { IconChevronLeft } from "icons";
import { Flex, Section } from "layout";
import { Button, Text, Dialog } from "primitives";
```

### Component Hierarchy
```
src/ui/
├── primitives/     # Atomic components (Button, Input, Dialog, etc.)
├── compositions/   # Complex patterns (Cards, Forms, Headers/Footers)  
├── layout/         # Structural components (Flex, Section, Grid)
├── icons/          # SVG icon components (auto-generated from Figma)
├── hooks/          # UI-specific hooks (useMediaQuery)
└── utils/          # Utility components and functions

src/data/           # Data management layer
├── contexts/       # React contexts (AuthContext, PricingContext, ProductsContext)
├── providers/      # Context providers with state logic
├── services/       # API and business logic services
├── hooks/          # Data hooks (useAuth, usePricing, useProducts)
└── types/          # TypeScript type definitions
```

### Design Token System
- CSS custom properties in `src/theme.css` (synced from Figma)
- Responsive design with mobile-first approach
- Light/dark mode support via CSS variables
- Token naming: `--sds-color-*`, `--sds-size-space-*`, `--sds-typography-*`, etc.

### Figma Integration Workflow
1. Design tokens and icons are synced from Figma via scripts
2. Components have Code Connect mappings in `src/figma/`
3. Use Figma MCP tools when implementing designs:
   - `get_image` - Visual representation of selected Figma nodes
   - `get_code` - Extract component code and props from Figma
   - `get_variable_defs` - Get design token mappings
   - `get_code_connect_map` - Find existing component mappings

### Key Development Principles
- **Always use existing SDS components** - Never create custom components
- **Import from aliases** - Use the configured path aliases (compositions, primitives, etc.)
- **Use CSS variables** - Never hardcode colors, spacing, or typography values
- **Leverage layout components** - Use Flex/Section instead of custom CSS
- **Check component APIs** - Read TypeScript definitions before using components
- **Follow Cursor guidelines** - See `.cursor/rules/usage-guidelines.mdc` for detailed patterns

### Data Management
The codebase includes a complete data layer with examples for:
- **Authentication**: Login/logout, user state, token management
- **E-commerce**: Product catalog, shopping cart, pricing plans
- **Form handling**: Validation, submission, error states

Use the provided contexts and hooks rather than implementing custom state management.

## Storybook Structure and Guidelines

### Storybook Configuration
- **Development**: `npm run storybook` - Launch at localhost:6006
- **Build**: `npm run storybook:build` - Build to dist/storybook
- **Vite Integration**: React-Vite framework with path alias support
- **TypeScript**: Full TypeScript support with react-docgen-typescript

### Story Organization
```
src/stories/
├── _welcome/
│   └── Hello.stories.tsx        # Welcome page introducing SDS
├── primitives/
│   ├── Button.stories.tsx       # Button component with variants
│   ├── Input.stories.tsx        # Input component examples
│   ├── Text.stories.tsx         # Typography components
│   └── ...                      # All primitive components
├── compositions/
│   ├── Cards.stories.tsx        # Complex card patterns  
│   ├── Forms.stories.tsx        # Form composition examples
│   └── ...                      # Composition patterns
├── layout/
│   ├── Flex.stories.tsx         # Flex layout examples
│   ├── Grid.stories.tsx         # Grid layout examples
│   └── Section.stories.tsx      # Section layout examples
└── hooks/
    └── useMediaQuery.stories.tsx # Custom hook demonstrations
```

### Story Writing Patterns

**Standard Story Structure:**
```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "primitives";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "SDS Primitives/Buttons",  // Hierarchical naming
  parameters: { layout: "centered" },
};
export default meta;

export const StoryButton: StoryObj<typeof Button> = {
  name: "Button",
  args: {
    children: "Hello world",
    variant: "primary",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "neutral", "subtle"],
    },
  },
  render: ({ children, ...props }) => (
    <Button {...props}>
      {children}
    </Button>
  ),
};
```

**Multi-component Stories:**
```tsx
// For component groups like ButtonDanger, ButtonGroup
export const StoryButtonGroup: StoryObj<typeof ButtonGroup> = {
  name: "Button Group",
  render: ({ ...props }) => (
    <ButtonGroup {...props}>
      <Button variant="neutral">Cancel</Button>
      <Button variant="primary">Submit</Button>
    </ButtonGroup>
  ),
};
```

### Storybook Configuration Details

**Main Configuration (.storybook/main.tsx):**
- Stories pattern: `../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)`
- Essential addons: links, essentials, interactions
- Path aliases configured for all UI modules
- TypeScript support with react-docgen-typescript

**Preview Configuration (.storybook/preview.tsx):**
- Global CSS imports: `../src/index.css`, `../src/theme.css`
- Custom theme integration
- Consistent styling across all stories

### Story Naming Conventions
- **Title Structure**: `"SDS [Category]/[Component Name]"`
- **Story Names**: Descriptive names like "Button", "Button Danger", "Button Group"
- **File Names**: `[ComponentName].stories.tsx`
- **Export Names**: `Story[ComponentName]` format

### Component Documentation Guidelines
- Use `argTypes` for interactive controls
- Include common props and variants
- Provide realistic examples with proper content
- Show component combinations and patterns
- Include accessibility considerations

### Integration with Design System
- All stories use path aliases for imports
- Components inherit design tokens from theme.css
- Stories demonstrate proper usage patterns
- Examples follow the established component hierarchy (primitives → compositions → layout)