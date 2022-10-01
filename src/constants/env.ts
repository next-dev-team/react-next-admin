// UMI_ENV are set in packages.json and config/..
/**
 * App dev local
 */
export const _consIsAppEnvDev = UMI_ENV === 'dev'
/**
 * NODE_ENV development
 */
export const _consIsNodeEnvDev = process.env.NODE_ENV === 'development';
/**
 * NODE_ENV productions
 */
export const _consIsNodeEnvProd = process.env.NODE_ENV === 'productions';
