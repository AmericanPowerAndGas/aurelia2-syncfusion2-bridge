define(["exports", "aurelia-dependency-injection", "aurelia-templating", "./constants"], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _constants) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ej2Template = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var Ej2Template = function Ej2Template(target) {
        _classCallCheck(this, Ej2Template);

        this.template = target.elementInstruction.template;
    };
    __decorate([_aureliaTemplating.bindable], Ej2Template.prototype, "template", void 0);
    exports.Ej2Template = Ej2Template = __decorate([(0, _aureliaTemplating.customElement)(_constants.constants.ej2ElementPrefix + "template"), (0, _aureliaTemplating.noView)(), (0, _aureliaTemplating.processContent)(function (compiler, resources, element, instruction) {
        var html = element.innerHTML;
        if (html !== '') {
            instruction.template = html;
        }
        element.innerHTML = '';
    }), (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.TargetInstruction)], Ej2Template);
    exports.Ej2Template = Ej2Template;
});