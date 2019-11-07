// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  googleCloudVisionAPIKey: "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCs6-yRMGVrKliZ082dyClpSwwdE22hiLg",
  googleSearchAPI: "https://www.googleapis.com/customsearch/v1?key=AIzaSyD6rT3yzndawuwb0y2WdrcbfkTrLhG_4c8&cx=009024791238972097032:zxk5rtsl18g&q="
};


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
