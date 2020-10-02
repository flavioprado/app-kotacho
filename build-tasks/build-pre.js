
/*
 * Atualizacao dos valores dinamicos de build. Variaveis criadas:
 * - versao: faz a leitura da versao do package.json e adiciona no arquivo de versao do
 * environment.
 * - ultima atualizacao: se baseia na data do build para geracao da ultima atualizacao.
 */
const path = require('path');
const colors = require('colors/safe');
const moment = require('moment');
const fs = require('fs');

const pkgContent = require('../package.json');

const appVersion = pkgContent['version'];
const angularVersion = pkgContent['dependencies']['@angular/core'];
const primeNgVersion = pkgContent['dependencies']['primeng'];
const saneNgVersion = pkgContent['dependencies']['saneng'];

const updatedIn = moment().format('DD/MM/YYYY');

// Banner GTIN - Web
console.log(
  colors.blue(`
      ---------------------------------------------------------------------
          Sistema de Gestão Insta Impresso  webapp 🌐 :: using Angular ${angularVersion}
          Prado - Sistemas :: System ${new Date().getFullYear()}  🚰
      ---------------------------------------------------------------------        
  `)
);

console.log(colors.cyan('\nRunning pre-build tasks'));

// =====
// Generating dynamic-values.ts
// =====
const filePath = path.join(
  __dirname + '/../src/environments/dynamic-values.ts'
);

const srcDynamicValues = `// AUTO GENERATED VALUES => Nao edite, pois os dados serao sobrescritos durante o build!
export const dynamicValues = {
  version: '${appVersion}',
  angularVersion: '${angularVersion}',
  primeNgVersion: '${primeNgVersion}',
  saneNgVersion: '${saneNgVersion}',
  updatedIn: '${updatedIn}'
};
`;

fs.writeFile(filePath, srcDynamicValues, { flat: 'w' }, function(err) {
  if (err) {
    return console.log(colors.red(err));
  }

  console.log(
    colors.italic(
      `\nCreating ${colors.yellow('environments/dynamic-values.ts')} file...`
    )
  );
  console.log(
    colors.green(`Updating application version ${colors.yellow(appVersion)}`)
  );
  console.log(colors.green(`Latest updated in ${colors.yellow(updatedIn)}`));
  console.log(
    `${colors.green('Writing version module to ')}${colors.yellow(filePath)}\n`
  );
});
