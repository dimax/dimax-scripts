# Dimax Scripts

CLI toolbox for common scripts for my projects.

## Known issues

- https://github.com/eslint/eslint/issues/9227. It is necessary to add an `.eslintignore` to the repo because doesn't use the default from the package.

## Displaying Lint Output in the Editor

Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint.

They are not required for linting. You should see the linter output right in your terminal as well as the browser console. However, if you prefer the lint results to appear right in your editor, there are some extra steps you can do.

You would need to install an ESLint plugin for your editor first. Then, add a file called .eslintrc to the project root:

```json
{
  "extends": "dimax"
}
```

Now your editor should report the linting warnings.

Note that even if you edit your .eslintrc file further, these changes will only affect the editor integration. They won’t affect the terminal and in-browser lint output. This is because Create React App intentionally provides a minimal set of rules that find common mistakes.

If you want to enforce a coding style for your project, consider using Prettier instead of ESLint style rules.
