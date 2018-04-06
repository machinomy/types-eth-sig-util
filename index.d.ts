declare module "eth-sig-util" {
  import { Buffer } from "buffer";

  export function concatSig(v: number, r: Buffer, s: Buffer): Buffer
}
