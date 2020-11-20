export class Basic {
  toggleClick() {
    let sidebar = (document.getElementById('default-sidebar') as any).ej2_instances[0];
    sidebar.toggle();
  }
  closeClick() {
    let sidebar = (document.getElementById('default-sidebar') as any).ej2_instances[0];
    sidebar.hide();
  }
  openClick() {
    let sidebar = (document.getElementById('default-sidebar') as any).ej2_instances[0];
    sidebar.show();
  }
}
