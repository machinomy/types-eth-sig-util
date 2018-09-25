declare module "eth-sig-util" {
  import { Buffer } from "safe-buffer"

  export function concatSig(v: number, r: Buffer, s: Buffer): Buffer
  export interface MsgParams {
    data: any;
    sig: any;
  }
  export function recoverPersonalSignature(msgParams: MsgParams): string
}
