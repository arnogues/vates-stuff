# Tools to start the XCP-NG deploy page

## Install dependencies

Start the local static server

```
  npm run ws -- --directory  <xcpng-release-folder>/src/xenserver/opt/xensource/www
```

## Run tests

```
  npm run cypress:open
```

## Run cypress and http server in parallel

```
  npm start -- <xcpng-release-folder>/src/xenserver/opt/xensource/www
```
