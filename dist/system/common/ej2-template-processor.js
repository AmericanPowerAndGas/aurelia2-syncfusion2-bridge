"use strict";

System.register(["aurelia-dependency-injection", "../common/util", "aurelia-templating"], function (_export, _context) {
    "use strict";

    var inject, Util, TemplatingEngine, _typeof, __decorate, Ej2TemplateProcessor;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaDependencyInjection) {
            inject = _aureliaDependencyInjection.inject;
        }, function (_commonUtil) {
            Util = _commonUtil.Util;
        }, function (_aureliaTemplating) {
            TemplatingEngine = _aureliaTemplating.TemplatingEngine;
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

            _export("Ej2TemplateProcessor", Ej2TemplateProcessor = function () {
                function Ej2TemplateProcessor(context, templateEngine) {
                    _classCallCheck(this, Ej2TemplateProcessor);

                    this.context = context;
                    this.templatingEngine = templateEngine;
                    this.util = new Util();
                }

                Ej2TemplateProcessor.prototype.initWidgetDependancies = function initWidgetDependancies() {
                    this.compileTemplate(this.context.widget.element);
                };

                Ej2TemplateProcessor.prototype.compileTemplate = function compileTemplate(element) {
                    var templates = $(element).find('.e-templatecell > :first-child');
                    for (var i = 0; i < templates.length; i++) {
                        var view = this.templatingEngine.enhance(templates[i]);
                        view.bind(this.context.widget.dataSource[i], this.context.parentCtx);
                    }
                };

                return Ej2TemplateProcessor;
            }());

            _export("Ej2TemplateProcessor", Ej2TemplateProcessor = __decorate([inject(TemplatingEngine, Util)], Ej2TemplateProcessor));

            _export("Ej2TemplateProcessor", Ej2TemplateProcessor);
        }
    };
});