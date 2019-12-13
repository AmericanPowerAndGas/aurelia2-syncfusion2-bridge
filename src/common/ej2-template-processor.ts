import { inject } from 'aurelia-dependency-injection';
import { Util } from '../common/util';
import { TemplatingEngine } from 'aurelia-templating';
@inject(TemplatingEngine, Util)
export class Ej2TemplateProcessor {
  context: any;
  templatingEngine: any;
  util: Util;

  constructor(context, templateEngine) {
    this.context = context;
    this.templatingEngine = templateEngine;
    this.util = new Util();
  }
  bindView(element, data) {
    let view = this.templatingEngine.enhance(element);
    view.bind(data, this.context.parentCtx);
  }
}
