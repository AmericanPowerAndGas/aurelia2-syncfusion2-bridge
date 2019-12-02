"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WidgetBase = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _events = require("./events");

var _util = require("../common/util");

var _decorators = require("../common/decorators");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var firstValue = {};

var WidgetBase = exports.WidgetBase = function () {
    function WidgetBase() {
        _classCallCheck(this, WidgetBase);
    }

    WidgetBase.prototype.createWidget = function createWidget(option) {
        var _this = this;

        this.allOption = this.getWidgetOptions(option.element);
        if (!this.ejOptions && !this.isEditor) {
            this.createTwoWays();
        }
        this.eWidget = this.widget = jQuery($(option.element))[this.controlName](this.allOption).data(this.controlName);
        if (this.templateProcessor) {
            this.templateProcessor.initWidgetDependancies();
        }
        if (this.isEditor) {
            this.widget.model._change = function (evt) {
                if ('eValue' in _this) {
                    _this[_this.util.getBindablePropertyName('value')] = evt.value;
                }
            };
        }
    };

    WidgetBase.prototype.bind = function bind(ctx, overrideCtx) {
        this.parentCtx = overrideCtx;
        if (this.widget && this.widget.element && this.isEditor) {
            this.widget.option('value', this.eValue === undefined ? null : this.eValue);
        }
    };

    WidgetBase.prototype.createTwoWays = function createTwoWays() {
        var model = this.allOption;
        var twoWays = this.twoWays;
        var len = twoWays.length;
        for (var i = 0; i < len; i++) {
            var prop = twoWays[i];
            ej.createObject(prop, this.addTwoways(prop), model);
        }
    };

    WidgetBase.prototype.addTwoways = function addTwoways(prop) {
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

    WidgetBase.prototype.getWidgetOptions = function getWidgetOptions(element) {
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

    WidgetBase.prototype.getChildProperties = function getChildProperties(options) {
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

    WidgetBase.prototype.attached = function attached() {
        if (this.templateProcessor) {
            this[this.childPropertyName].forEach(function (template) {
                return template.setTemplates();
            });
        }
        this.util = new _util.Util();
        this.createWidget({ element: this.element });
    };

    WidgetBase.prototype.unsubscribe = function unsubscribe() {
        if (this.subscription) {
            this.subscription.dispose();
            this.subscription = null;
        }
    };

    WidgetBase.prototype.unbind = function unbind() {
        this.unsubscribe();
    };

    WidgetBase.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
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
                    modelValue = this.widget.model[prop];
                    var isTwoway = typeof modelValue === 'function';
                    if (isTwoway) {
                        modelValue = modelValue();
                    }
                    if (modelValue !== newValue) {
                        if (isTwoway) {
                            newValue = this.addTwoways(prop);
                        }
                        this.widget.option(prop, newValue);
                    }
                } else {
                    this.widget.option(newValue);
                }
            }
        }
    };

    WidgetBase.prototype.update = function update(e) {
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
                        _this3.widget.option(prop, newVal);
                    } else {
                        _this3.widget.option(prop, modelValue);
                    }
                }
            });
        }
    };

    WidgetBase.prototype.detached = function detached() {
        if (this.templateProcessor) {
            this.templateProcessor.clearTempalte();
        }
        if (this.widget) {
            this.widget.destroy();
        }
    };

    return WidgetBase;
}();

__decorate([(0, _decorators.delayed)()], WidgetBase.prototype, "attached", null);