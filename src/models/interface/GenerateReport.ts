export default interface GenerateReport {
  retrieveInfo(): Promise<object>;
  retrieveByName(name: string): Promise<object>;
}
