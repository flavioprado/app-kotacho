/**
 * @license
 * Copyright SANEPAR - Companhia de Saneamento do Parana. All rigths reserved.
 */

import { dynamicValues } from './dynamic-values';
import { Environment } from './environment-type';

export const environment: Environment = {
  dynamicValues,
  env: 'development',
  security: {
    clientId: 'siga-webapp',
    mainRole: 'siga-webapp_r_sistema_acesso',
    tipoAcesso: 'interno'
  },
  production: false,
  baseHref: '',
  debug: false,
  api: {
    appBackend: 'http://localhost:3000',
    // borgBackend: 'http://irara.sanepar.com.br:9301/api',
    // bopeBackend: 'http://irara.sanepar.com.br:9293/api',
  },
  arquis: {
    baseUrl: 'https://estrela.sanepar.com.br/arquis',
    gavetaId: '1fb90420-fb75-4be6-a4a4-eec10d97eb52',
    gavetaSegredo: 'Gi2OmFaSwjIZ7IySu445'
  }
};
