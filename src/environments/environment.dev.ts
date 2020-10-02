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
  baseHref: '/',
  debug: false,
  api: {
    appBackend: 'http://api-pedido-com-br.umbler.net',
    bopeBackend: 'http://irara.sanepar.com.br:9293/api',
    borgBackend: 'http://irara.sanepar.com.br:9301/api'
  },
  arquis: {
    baseUrl: 'https://estrela.sanepar.com.br/arquis',
    gavetaId: '9c655c90-2ec2-42e2-ac34-488b03351c06',
    gavetaSegredo: '4QCwE1MLJjG644n6FiXO'
  }
};
