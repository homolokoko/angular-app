export interface IfuseMachine {
  buyer: {
    id: number
    name: string
  }
  style: {
    id: number
    name: string
  }
  serail_number: {
    id: number
    name: string
  }
  given: {
    time: string
    pressure: string
    temperature: string
  }
  actual: {
    time: string
    pressure: string
    temperature: string
  }
  belt_condition: string
  machine_condition: string
}
