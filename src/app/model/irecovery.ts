export interface IRecovery {
  item_id: number
  module: string
  is_pass: boolean
  is_repair: boolean
  size: string
  color: string
  style: string
  repait: [
    {
      id: number
      is_resolve: boolean
      to_locate: string
      from_locate: string
      issure: {
        cause: string
        defect: string
        checkpoint: string
        image: string
      }
    }
  ]
}
