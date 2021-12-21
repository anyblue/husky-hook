# husky-hooks

> Husky hooks for scripts can be customized, such as verify commit message.

## Install

```
npm install husky-hooks --save-dev
```

## Usage

### Enable husky-hooks

run the command:

```
npx husky-hooks install
```
To automatically have husky hooks enabled after install, edit `package.json`
```
npm set-script prepare "husky-hooks install"
```

### uninstall husky-hooks
run the command:
```
npx husky-hooks uninstall
```
