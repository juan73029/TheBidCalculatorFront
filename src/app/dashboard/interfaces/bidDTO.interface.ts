import { FeeDTO } from "./feeDTO.interface";

export interface BidDTO {
  vehicleValue: number,
  fees: FeeDTO[],
  totalPrice: number
}
