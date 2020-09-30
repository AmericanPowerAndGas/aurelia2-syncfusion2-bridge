import {constants} from './constants';

  export function getBindablePropertyName(propertyName: string): string {
    let name = `${constants.bindablePrefix}${propertyName}`;
      return unhyphenate(name);
  }

  export function unhyphenate(name: string): string {
    return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  }

  export function getOptions(model, properties ) {
    let bindableproperites = {};
    let value;
    for (let prop of properties) {
      if (model.abbrevProperties && prop in model.abbrevProperties && model.abbrevProperties.hasOwnProperty(prop)) {
        model.abbrevProperties[prop].some(property => {
          value = model[getBindablePropertyName(property)];
          return hasValue(value);
        });
      } else {
        value = model[getBindablePropertyName(prop)];
      }
      if (hasValue(value)) {
        if (typeof value === 'string' ) {
          value = processData(value);
        }
        bindableproperites[prop] = value;
      }
    }
    return bindableproperites;
  }

  export function getControlPropertyName(options, propertyName) {
    let property;
    for (let prop of options.controlProperties) {
      if (options.abbrevProperties && prop in options.abbrevProperties && options.abbrevProperties.hasOwnProperty(prop)) {
        options.abbrevProperties[prop].some(props => {
          property = propertyName === getBindablePropertyName(props) ? prop : undefined;
          return property;
        });
        if (property) break;
      } else if (propertyName === getBindablePropertyName(prop)) {
        property = prop;
        break;
      }
    }
    return property;
  }

  export function hasValue(prop) {
    return typeof (prop) !== 'undefined' && prop !== null;
  }

  function processData(value) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (+value + '' === value) {
      return +value;
    }
    return value;
  }

