export interface IMotorcycle {
  make: IMake
  model: IModel
  detail: IDetail
}

interface IMake {
  name: string
}

interface IModel {
  name: string
  country: string
}

interface IDetail {
  use: string
  engine: string
  features: string
}
