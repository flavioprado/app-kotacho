/**
 * @license
 * Copyright SANEPAR - Companhia de Saneamento do Parana. All rigths reserved.
 */

import { dynamicValues } from './dynamic-values';
import { Environment } from './environment-type';

export const environment: Environment = {
  dynamicValues,
  env: 'production',
  security: {
    clientId: 'siga-webapp',
    mainRole: 'siga-webapp_r_sistema_acesso',
    tipoAcesso: 'interno'
  },
  production: true,
  baseHref: '',
  debug: false,
  api: {
    appBackend: 'http://api-kotachocomercio-com-br.umbler.net'
  }
};
