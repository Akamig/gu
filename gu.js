import { signTransaction } from "@planetarium/sign";
import { createAccount } from "@planetarium/account-raw";

export async function signTx(tx, key) {
    return await signTransaction(tx, createAccount(key));
};
