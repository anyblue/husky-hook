# husky-hooks

> customize husky hooks, such as verify the commit message.

## Install

**with `npm`:**
```ts
npm install husky-hooks --save-dev
```
**or with `yarn`:**
```ts
yarn add husky-hooks --dev
```

## Usage

### Enable husky-hooks

**with `npm`:**

run:

```ts
npx husky-hooks install
```
To automatically have husky hooks enabled after install, edit `package.json`
```ts
npm set-script prepare "husky-hooks install"
```
**or with `yarn`:**
```ts
yarn husky-hooks install
```
To automatically have Git hooks enabled after install, edit `package.json`

`package is private`:
```ts
// package.json: your package is private, you only need postinstall
{
  "private": true,
  "scripts": {
    "postinstall": "husky-hooks install"
  }
}
```
`package is public`:
```ts
// package.json: your package is public
{
  "private": false,
  "scripts": {
    "postinstall": "husky install",
    "prepublishOnly": "pinst --disable",
    "postpublish": "pinst --enable"
  }
}
```

## Uninstall husky-hooks

Remove `"prepare/postinstall": "husky install" `from `package.json` and run:
```ts
npx husky-hooks uninstall
```
```ts
npm uninstall husky-hooks
```

## Reference

https://typicode.github.io/husky/#/