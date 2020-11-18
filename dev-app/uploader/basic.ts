export class Basic {
  public path: Object = {
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
  };

  public dropElement: HTMLElement;

  public onFileRemove(args): void {
    args.postRawFile = false;
  }

  afterAttach() {
    this.dropElement = document.getElementsByClassName('card')[0] as HTMLElement;
  }
}
