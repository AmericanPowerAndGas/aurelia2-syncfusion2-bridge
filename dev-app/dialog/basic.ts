export class Basic {
  public header: string = 'About SYNCFUSION Succinctly Series';
  public showCloseIcon: Boolean = true;
  public width: string = '50%';
  public animationSettings: any = { effect: 'None' };
  public target: string = '.control-section';


  // On Dialog close, 'Open' Button will be shown
  public dialogClose = (): void => {
    document.getElementById('dlgbtn').style.display = '';
  }
  // On Dialog open, 'Open' Button will be hidden
  public dialogOpen = (): void => {
    document.getElementById('dlgbtn').style.display = 'none';
  }

  public dlgBtnClick = (): void => {
    window.open('https://www.syncfusion.com/company/about-us');
  }

  public BtnClick = (): void => {
    let dialog = (document.getElementById('dialog') as any).ej2_instances[0];
    dialog.show();
  }

  public dlgButtons: any[] = [{ click: this.dlgBtnClick.bind(this), buttonModel: { content: 'Learn More', isPrimary: true } }];
}
