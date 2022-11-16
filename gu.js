import { signTransaction } from "@planetarium/sign";
import { createAccount } from "@planetarium/account-raw";

(async () => {
    const account = createAccount(process.argv[2]);
    console.log(await signTransaction(process.argv[3], account));
})();