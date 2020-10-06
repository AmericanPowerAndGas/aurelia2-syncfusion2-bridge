export class MultiSelect {
  public year: number = new Date().getFullYear();
  public month: number = new Date().getMonth();
  public multiSelection: boolean = true;
  public dates: Date[] = [new Date(this.year, this.month, 10), new Date(this.year, this.month, 15), new Date(this.year, this.month, 25)];
  onValueChange(): void {

  }
}
