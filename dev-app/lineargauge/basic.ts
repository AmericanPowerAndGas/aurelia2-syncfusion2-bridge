export class Basic {
  public Axes: Object[] = [{
    pointers: [{
      value: 10,
      height: 15,
      width: 15,
      placement: 'Near',
      offset: -50,
      markerType: 'Triangle'
    }],
    majorTicks: {
      interval: 10
    },
    minorTicks: {
      interval: 2
    },
    labelStyle: {
      offset: 48
    }
  }];
  public Annotation: Object = [{
    content: '<div id="pointer" style="width:70px"><h1 style="font-size:14px;">10 MPH</h1></div>',
    axisIndex: 0,
    axisValue: 10,
    x: 10,
    y: -70, zIndex: '1',
  }];

}
