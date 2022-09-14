# API

This project run a simple REST API server to provide data to graphical interface.

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:3333/assets`. The application will automatically reload if you change any of the source files.

## Production

Install pm2 and run constinuously:
```
npm i -g pm2
cd $path/po-ui_crud/back_js
pm2 start index.js
pm2 save