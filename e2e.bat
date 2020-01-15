cd D:\home\site\wwwroot
npm install -g @angular/cli
npm install
npm audit fix --prod
ng config -g cli.warnings.versionMismatch false
ng build --prod --build-optimizer
npm run wdm-upd-ver79
npm run wdm-start-gc-ver79
npm run e2e
