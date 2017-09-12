/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
      // CDK individual packages
      '@angular/cdk/a11y': 'https://rawgit.com/angular/cdk-builds/master/bundles/cdk-a11y.umd.js',
      '@angular/cdk/bidi': 'https://rawgit.com/angular/cdk-builds/master/bundles/cdk-bidi.umd.js',
      '@angular/cdk/coercion': 'https://rawgit.com/angular/cdk-builds/master/bundles/cdk-coercion.umd.js',
      '@angular/cdk/keycodes': 'https://rawgit.com/angular/cdk-builds/master/bundles/cdk-keycodes.umd.js',
      '@angular/cdk/observers': 'https://rawgit.com/angular/cdk-builds/master/bundles/cdk-observers.umd.js',
      '@angular/cdk/platform': 'https://rawgit.com/angular/cdk-builds/master/bundles/cdk-platform.umd.js',
      '@angular/cdk/portal': 'https://rawgit.com/angular/cdk-builds/master/bundles/cdk-portal.umd.js',
      '@angular/cdk/rxjs': 'https://rawgit.com/angular/cdk-builds/master/bundles/cdk-rxjs.umd.js',
      '@angular/cdk/table': 'https://rawgit.com/angular/cdk-builds/master/bundles/cdk-table.umd.js',
      '@angular/cdk/testing': 'https://rawgit.com/angular/cdk-builds/master/bundles/cdk-testing.umd.js',
      '@angular/cdk/overlay': 'https://rawgit.com/angular/cdk-builds/master/bundles/cdk-overlay.umd.js',
      '@angular/cdk/scrolling': 'https://rawgit.com/angular/cdk-builds/master/bundles/cdk-scrolling.umd.js',
      '@angular/cdk/collections': 'https://rawgit.com/angular/cdk-builds/master/bundles/cdk-collections.umd.js',
      // angular bundles
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',

      // other libraries
      'hammerjs': 'npm:hammerjs/hammer.js',
      'rxjs': 'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'bootstrap': 'npm:bootstrap/dist/js/bootstrap.js',
      'bootstrap-notify': 'npm:bootstrap-notify/bootstrap-notify.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
