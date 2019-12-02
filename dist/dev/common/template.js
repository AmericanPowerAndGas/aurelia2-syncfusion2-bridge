"use strict";

System.register(["aurelia-dependency-injection", "aurelia-templating", "./constants"], function (_export, _context) {
    "use strict";

    var inject, customElement, bindable, noView, processContent, TargetInstruction, constants, _typeof, __decorate, Template;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaDependencyInjection) {
            inject = _aureliaDependencyInjection.inject;
        }, function (_aureliaTemplating) {
            customElement = _aureliaTemplating.customElement;
            bindable = _aureliaTemplating.bindable;
            noView = _aureliaTemplating.noView;
            processContent = _aureliaTemplating.processContent;
            TargetInstruction = _aureliaTemplating.TargetInstruction;
        }, function (_constants) {
            constants = _constants.constants;
        }],
        execute: function () {
            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            _export("Template", Template = function Template(target) {
                _classCallCheck(this, Template);

                this.template = target.elementInstruction.template;
            });

            __decorate([bindable], Template.prototype, "template", void 0);
            _export("Template", Template = __decorate([customElement(constants.elementPrefix + "template"), noView(), processContent(function (compiler, resources, element, instruction) {
                var html = element.innerHTML;
                if (html !== '') {
                    instruction.template = html;
                }
                element.innerHTML = '';
            }), inject(TargetInstruction)], Template));

            _export("Template", Template);
        }
    };
});
//# sourceMappingURL=../devbuild/dev/common/template.js.map
