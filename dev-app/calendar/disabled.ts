export class Disabled {
  onLoad(args: any) {    
    /*Date need to be disabled*/
    if (args.date.getDay() === 0 || args.date.getDay() === 6) {
      args.isDisabled = true;
    }
  }
}
