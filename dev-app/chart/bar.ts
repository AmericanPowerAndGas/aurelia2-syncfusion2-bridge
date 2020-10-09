export class Bar {
  public chartArea: Object = {
    border: {
      width: 0
    }
  };
  //Initializing Chart Width
  public width: string = '100%';
  public data: Object[] = [
    { x: 'Egg', y: 2.2 }, { x: 'Fish', y: 2.4 },
    { x: 'Misc', y: 3 }, { x: 'Tea', y: 3.1 }
  ];
  public data1: Object[] = [
    { x: 'Egg', y: 1.2 }, { x: 'Fish', y: 1.3 },
    { x: 'Misc', y: 1.5 }, { x: 'Tea', y: 2.2 }
  ];
  //Initializing Marker
  public marker: Object = {
    dataLabel: {
      visible: true,
      position: 'Top',
      font: {
        fontWeight: '600', color: '#ffffff'
      }
    }
  }
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: 'Category',
    title: 'Food',
    interval: 1,
    majorGridLines: { width: 0 }
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    labelFormat: '{value}B',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    lineStyle: { width: 0 },
    labelStyle: {
      color: 'transparent'
    }
  };
  public tooltip: Object = {
    enable: true
  };
  // custom code end
  public title: string = 'UK Trade in Food Groups - 2015';
}
