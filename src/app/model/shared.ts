export interface Shared {
  buyer: IBuyer
  style: IStyle
  serial_number: ISerialNumber
}

interface IBuyer {
  value: number
  text: string
}

interface IStyle {
  value: number
  text: string
}

interface ISerialNumber {
  value: number
  text: string
}
