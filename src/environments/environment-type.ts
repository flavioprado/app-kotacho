/**
 * @license
 * Copyright SANEPAR - Companhia de Saneamento do Parana. All rights reserved.
 */

export interface Environment {
    dynamicValues: any;
    production: boolean;
    debug: boolean;
    baseHref?: string;
    env: 'development' | 'stage' | 'production';
    security: {
      clientId: string;
      mainRole: string;
      tipoAcesso?: 'interno' | 'externo';
    };
    api: { [nomeUrl: string]: string };
    arquis?: { gavetaId: string, gavetaSegredo: string, baseUrl: string };
}
