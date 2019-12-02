import { EjConfigBuilder } from './config-builder';
export function configure(aurelia, configCallback) {
    let builder = new EjConfigBuilder();
    if (configCallback !== undefined && typeof (configCallback) === 'function') {
        configCallback(builder);
    }
    let resources = builder.resources;
    if (builder.useGlobalResources) {
        aurelia.globalResources(resources);
    }
}
