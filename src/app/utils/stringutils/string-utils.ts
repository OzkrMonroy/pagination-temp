export class StringUtils {
  public static formatNumber(number: number | string): string {
    const internationalNumberFormat = new Intl.NumberFormat('en-US');
    return internationalNumberFormat.format(Number(number || 0));
  }

  public static formatAmount(number: number | string): string {
    let ingreso = 'Q' + this.formatNumber(number);
    return ingreso;
  }

  public static formatDate(date: string, reverse = false): string | undefined {
    if (date.length < 8) {
      return;
    }
    const partitions = reverse ? [8, 4, 2] : [2, 4, 8];
    const init = reverse ? [4, 2, 0] : [0, 2, 4];

    const formattedDate: any[] = [];
    partitions.forEach((partition, index) => {
      const part = date.substring(init[index], partition);
      if (part) formattedDate.push(part);
    });

    return formattedDate.join('/');
  }

  public static setFormatToJSDate(date: Date): string {
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }

  public static padTo2Digits(num: number): string {
    return num.toString().padStart(2, '0');
  }

  public static serializedGet(request: any): string {
    let strRequest: string = '?';
    for (let clave in request) {
      strRequest += clave;
      strRequest += '=';
      strRequest += request[clave];
      strRequest += '&';
    }
    strRequest = strRequest.substring(0, strRequest.length - 1);
    return strRequest;
  }

  public static valueOf(value: any) {
    return value ? value + '' : '';
  }

  public static formatMaskCard(value: string, symbolMask: string) {
    if (!value || value.length === 0) {
      value = '00';
    }
    let path = '0000 0000 0000 1111';
    let maskResponse = path.replace(/0/g, symbolMask);
    maskResponse = maskResponse.replace('1111', value);

    return maskResponse;
  }
}
