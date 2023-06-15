import { KeyPair, TokenPair } from "../contracts/pair.interface";
import { KeyResponse } from "../http/response.interface";
import { IKeyRepository } from "../reponsitories/key-repository.interface";
import { IService } from "./sevice.interface";

export interface IKeyService extends IService<IKeyRepository> {
  generateRandomKeyPair(): Promise<KeyPair | null>
  generateRandomKeyPairAlt(): Promise<KeyPair | null>
  saveUserKey(userId: string, keyPair: KeyPair, tokenPair: TokenPair): Promise<boolean>
  updateUserKeyToken(userId: string, oldTokenPair: TokenPair, tokenPair: TokenPair): Promise<boolean>
  getUserKeyByUserId(userId: string): Promise<KeyResponse | null>
}