export interface IMotorcycle {
  make: IMake
  model: IModel
}

interface IMake {
  name: string
}

interface IModel {
  name: string
  country: string
}
