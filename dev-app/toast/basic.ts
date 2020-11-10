export class Basic {
  public position: any = { X: "Right" };
  showBtnHide: boolean = false;
  public onCreate = (): void => {
    setTimeout((): void => {
      let toast = (document.getElementById('defaultToast') as any).ej2_instances[0];
      toast.show();
    }, 200);
  }

  public onClose = (e): void => {
    this.showBtnHide = false;
  }

  public onBeforeOpen = (): void => {
    this.showBtnHide = true;
  }

  public showToast = (): void => {
    let toast = (document.getElementById('defaultToast') as any).ej2_instances[0];
    toast.show();
  }

  public hideToast = (): void => {
    let toast = (document.getElementById('defaultToast') as any).ej2_instances[0];
    toast.hide('All');
  }
}
