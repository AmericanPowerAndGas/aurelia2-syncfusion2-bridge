export class Basic {
  public content: string = '';
  public menuItems: any[] = [
    {
      text: 'Cut',
      iconCss: 'e-cm-icons e-cut'
    },
    {
      text: 'Copy',
      iconCss: 'e-cm-icons e-copy'
    },
    {
      text: 'Paste',
      iconCss: 'e-cm-icons e-paste',
      items: [
        {
          text: 'Paste Text',
          iconCss: 'e-cm-icons e-pastetext'
        },
        {
          text: 'Paste Special',
          iconCss: 'e-cm-icons e-pastespecial'
        }
      ]
    },
    {
      separator: true
    },
    {
      text: 'Link',
      iconCss: 'e-cm-icons e-link'
    },
    {
      text: 'New Comment',
      iconCss: 'e-cm-icons e-comment'
    }];

  public addDisabled(args) {
    if (args.item.text === 'Link') {
      args.element.classList.add('e-disabled');
    }
  }

  onCreated(): void {
    this.content = 'Right click / Touch hold to open the ContextMenu';
  }
}
