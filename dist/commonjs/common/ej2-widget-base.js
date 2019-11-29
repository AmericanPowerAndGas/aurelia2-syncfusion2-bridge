'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ej2WidgetBase = undefined;

var _dec, _desc, _value, _class;

var _ej2Calendars = require('@syncfusion/ej2-calendars');

var _decorators = require('../common/decorators');

var _events = require('../common/events');

var _util = require('../common/util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Ej2WidgetBase = exports.Ej2WidgetBase = (_dec = (0, _decorators.delayed)(), (_class = function () {
  function Ej2WidgetBase() {
    _classCallCheck(this, Ej2WidgetBase);
  }

  Ej2WidgetBase.prototype.createWidget = function createWidget(option) {
    var _this = this;

    this.allOption = this.getWidgetOptions(option.element);

    if (!this.ejOptions && !this.isEditor) {
      this.createTwoWays();
    }

    this.eWidget = this.widget = new _ej2Calendars.DatePicker(this.allOption);
    this.widget.appendTo(option.element);
    if (this.templateProcessor) {
      this.templateProcessor.initWidgetDependancies();
    }
    if (this.isEditor) {
      this.widget.change = function (arg) {
        if (arg && 'eValue' in _this) {
          _this[_this.util.getBindablePropertyName('value')] = arg.element.value;
        }
      };
    }
  };

  Ej2WidgetBase.prototype.bind = function bind(ctx, overrideCtx) {
    this.parentCtx = overrideCtx;
    if (this.widget && this.widget.element && this.isEditor) {
      this.widget.value = this.eValue === undefined ? null : this.eValue;
    }
  };

  Ej2WidgetBase.prototype.createTwoWays = function createTwoWays() {
    var model = this.allOption;
    var twoWays = this.twoWays;
    var len = twoWays.length;
    for (var i = 0; i < len; i++) {
      var prop = twoWays[i];
      ej.createObject(prop, this.addTwoways(prop), model);
    }
  };

  Ej2WidgetBase.prototype.addTwoways = function addTwoways(prop) {
    var model = this;
    var value = firstValue;
    return function (newVal, isApp) {
      if (value === firstValue) {
        var viewModelProp = model.util.getBindablePropertyName(prop);
        value = model[viewModelProp];
        if (value === undefined) {
          value = this.defaults[prop];
        }
        return value;
      }
      if (newVal === undefined) {
        return value;
      }
      if (value === newVal) {
        return null;
      }
      value = newVal;
      if (!isApp && model.util.hasValue(newVal)) {
        var _viewModelProp = model.util.getBindablePropertyName(prop);
        model[_viewModelProp] = newVal;
      }
      return null;
    };
  };

  Ej2WidgetBase.prototype.getWidgetOptions = function getWidgetOptions(element) {
    var propOptions = void 0;
    if (this.ejOptions) {
      propOptions = this.ejOptions;
    } else {
      propOptions = this.util.getOptions(this, this.controlProperties);
    }
    var eventOption = (0, _events.getEventOption)(element);
    if (this.hasChildProperty) {
      this.getChildProperties(propOptions);
    }
    return Object.assign({}, propOptions, eventOption);
  };

  Ej2WidgetBase.prototype.getChildProperties = function getChildProperties(options) {
    var PropertyName = this.childPropertyName;
    var childCollection = this[PropertyName];
    var len = childCollection.length;
    if (len) {
      options[PropertyName] = [];
      var childProperties = childCollection[0].controlProperties;
      for (var i = 0; i < len; i++) {
        options[PropertyName].push(this.util.getOptions(childCollection[i], childProperties));
      }
    }
  };

  Ej2WidgetBase.prototype.attached = function attached() {
    this.util = new _util.Util();
    this.createWidget({ element: this.element });
  };

  Ej2WidgetBase.prototype.unsubscribe = function unsubscribe() {
    if (this.subscription) {
      this.subscription.dispose();
      this.subscription = null;
    }
  };

  Ej2WidgetBase.prototype.unbind = function unbind() {
    this.unsubscribe();
  };

  Ej2WidgetBase.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    var _this2 = this;

    if (this.widget) {
      var modelValue = void 0;
      var prop = this.util.getControlPropertyName(this, property);
      this.unsubscribe();
      if (this.arrayObserver) {
        this.arrayObserver.forEach(function (arrayProp) {
          if (_this2[arrayProp] instanceof Array) {
            _this2.subscription = _this2.bindingInstance.collectionObserver(_this2[arrayProp]).subscribe(function (e) {
              _this2.update(e);
            });
          }
        });
      }
      if (prop) {
        if (prop === 'widget') {
          return;
        } else if (prop !== 'options') {
          modelValue = this.widget[prop];
          var isTwoway = typeof modelValue === 'function';
          if (isTwoway) {
            modelValue = modelValue();
          }
          if (modelValue !== newValue) {
            if (isTwoway) {
              newValue = this.addTwoways(prop);
            }

            this.widget[prop] = newValue;
          }
        } else {
          this.widget.option(newValue);
        }
      }
    }
  };

  Ej2WidgetBase.prototype.update = function update(e) {
    var _this3 = this;

    var modelValue = void 0;
    var newVal = void 0;
    if (e.length) {
      this.arrayObserver.forEach(function (arrayProp) {
        if (_this3[arrayProp] instanceof Array) {
          var prop = _this3.util.getControlPropertyName(_this3, arrayProp);
          modelValue = _this3.widget.model[prop];
          if (typeof modelValue === 'function') {
            modelValue = modelValue();
            newVal = modelValue;
            newVal = _this3.addTwoways(prop);
            _this3.widget[prop] = newVal;
          } else {
            _this3.widget[prop] = modelValue;
          }
        }
      });
    }
  };

  Ej2WidgetBase.prototype.detached = function detached() {
    if (this.templateProcessor) {
      this.templateProcessor.clearTempalte();
    }
    if (this.widget) {
      this.widget.destroy();
    }
  };

  return Ej2WidgetBase;
}(), (_applyDecoratedDescriptor(_class.prototype, 'attached', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'attached'), _class.prototype)), _class));