# husky-hook

> customize husky hooks, such as verify the commit message.

## Install

**with `npm`:**
```ts
npm install husky-hook --save-dev
```
**or with `yarn`:**
```ts
yarn add husky-hook --dev
```

## Usage

### Enable husky-hook

**with `npm`:**

run:

```ts
npx husky-hook install
```
To automatically have husky hooks enabled after install, edit `package.json`
```ts
npm set-script prepare "husky-hook install"
```
**or with `yarn`:**
```ts
yarn husky-hook install
```
To automatically have Git hooks enabled after install, edit `package.json`

`package is private`:
```ts
// package.json: your package is private, you only need postinstall
{
  "private": true,
  "scripts": {
    "postinstall": "husky-hook install"
  }
}
```
`package is public`:
```ts
// package.json: your package is public
{
  "private": false,
  "scripts": {
    "postinstall": "husky-hook install",
    "prepublishOnly": "pinst --disable",
    "postpublish": "pinst --enable"
  }
}
```

## Uninstall husky-hook

Remove `"prepare/postinstall": "husky-hook install" `from `package.json` and run:
```ts
npx husky-hook uninstall
```
```ts
npm uninstall husky-hook
```

## Reference

https://typicode.github.io/husky/#/