export interface Shared {
  buyer: iFormFilterProperty
  style: iFormFilterProperty
  workstation: iFormFilterProperty
  serial_number: iFormFilterProperty
}

interface IBuyer {
  value: number
  text: string
}

interface IStyle {
  value: number
  text: string
}

interface IWorkstation {
  value: number
  text: string
}

interface ISerialNumber {
  value: number
  text: string
}

export interface iFormFilterProperty { value: number, text: string }
