# Description
This project is dependent upon AdminLTE library which utilizes the jquery, which is also installed within the `node_modules` directory. The jquery has been marked as external, because I could not simply import it in `hooks.client.js` file to run before anything else. So I decided to instead mark it as external and use copy plugin to copy `*.min.js` files of jquery(-ui) alongside other output files and added relevant links to HTML template file `/app.html`

# Steps to reproduce

### Install packages
`npm i`

### Start dev server
`npm run dev`

#### Open browser on port 5173
You should be redirected to dummy `/admin` path prefix and everything should work (no errors in devtools console)

### Now build the app instead
`npm run build`

### Start preview of built project
`npm run preview`

#### Visit newly started preview server on port 4173
You should be redirected to dummy `/admin` path prefix and an error should appear in console:

```
Uncaught (in promise) TypeError: Failed to resolve module specifier "jquery". Relative references must start with either "/", "./", or "../".
```
