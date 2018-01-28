# Contribute to dimax-scripts

The following rules will make easier to review PR's. Please, follow them so we all can have a better developer experience.

Thank you!

## Installation

This project uses [Yarn](https://yarnpkg.com/en/) and [lerna](https://github.com/lerna/lerna) to manage this repo and each of the packages. It's mandatory to use Yarn instead of NPM, since we are using [Yarn's workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) to manage this monorepo.

### Minimum requirements

- NodeJS 8 or superior.
- Yarn latest stable.

## Common lerna commands

### Add, update or remove a dependency from a package

```sh
yarn run lerna add {dependency-name} [--dev] --scope={@dimax-ar/package-name}
```

## CI Configuration

### Skip CI

When is not necessary to execute the CI in a commit it needs be added `[ci skip]` to the commit description or title.

## Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally
- Consider starting the commit message with an applicable emoji:
  - 🎨 when improving the format/structure of the code
  - 🏇 when improving performance
  - 📝 when writing docs
  - 🚀 when adding new feature
  - 🐛 when fixing a bug
  - 🔥 when removing code or files
  - ⚙️ when refactoring code
  - 💚 when fixing the CI build
  - ✅ when adding tests
  - 🆕 when added new dependencies
  - ⬆ when upgrading dependencies
  - ⬇ when downgrading dependencies
  - 🗑️ when removing dependencies
  - 👕 when removing linter warnings
