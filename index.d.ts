declare module "eth-sig-util" {
  import { Buffer } from "safe-buffer"

  export function concatSig(v: number, r: Buffer, s: Buffer): Buffer
  export function personalSign (privateKeyBuffer: Buffer, msgParams: { data: string }): string
  export function recoverPersonalSignature(msgParams: { data: string, sig: string }): string
}
