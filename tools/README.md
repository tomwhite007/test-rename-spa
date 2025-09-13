# Angular File Rename Tools

This directory contains tools for renaming Angular files and updating all references throughout the project.

## Setup

First, build the tools:

```bash
npm run build-tools
```

## Usage

### Rename Component Files

To rename all `.component` files and update references:

```bash
npm run rename component
```

### Rename Service Files

To rename all `.service` files and update references:

```bash
npm run rename service
```

### Rename Directive Files

To rename all `.directive` files and update references:

```bash
npm run rename directive
```

### Dry Run

To preview changes without modifying files:

```bash
npm run rename component --dry-run
```

## What the Script Does

1. **Finds all files** with the specified suffix (e.g., `.component.ts`, `.component.html`, `.component.scss`, etc.)
2. **Renames files** by removing the suffix (e.g., `app.component.ts` → `app.ts`)
3. **Updates class names** by removing the suffix (e.g., `AppComponent` → `App`)
4. **Updates all references** including:
   - Import statements
   - `templateUrl` and `styleUrls` in `@Component` decorators
   - Router configurations
   - Module declarations
   - Test files

## Supported File Types

- `.ts` (TypeScript files)
- `.html` (Template files)
- `.scss`, `.css`, `.sass`, `.less` (Style files)
- `.spec.ts` (Test files)

## Examples

### Before

```
src/app/
├── app.component.ts
├── app.component.html
├── app.component.scss
├── app.component.spec.ts
└── products/
    ├── products.component.ts
    ├── products.component.html
    ├── products.component.scss
    └── products.component.spec.ts
```

### After running `npm run rename component`

```
src/app/
├── app.ts
├── app.html
├── app.scss
├── app.spec.ts
└── products/
    ├── products.ts
    ├── products.html
    ├── products.scss
    └── products.spec.ts
```

## Development

To modify the tools:

1. Edit the TypeScript files in this directory
2. Run `npm run build-tools` to compile
3. Test with `npm run rename <suffix> --dry-run`
