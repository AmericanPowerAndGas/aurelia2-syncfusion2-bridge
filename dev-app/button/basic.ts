export class Basic {  
  async btnClick() {
    let toggleBtn = (document.getElementById('toggleBtn') as any).ej2_instances[0];

    if (toggleBtn.content === 'Pause') {
      toggleBtn.content = 'Play';
      toggleBtn.iconCss = 'e-btn-sb-icons e-play-icon';
    } else {
      toggleBtn.content = 'Pause';
      toggleBtn.iconCss = 'e-btn-sb-icons e-pause-icon';
    }
  }
}
