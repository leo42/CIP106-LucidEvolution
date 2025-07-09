import { LucidEvolution, CML, coreToUtxo, valueToAssets, Lucid, Data, credentialToAddress , slotToUnixTime} from "@lucid-evolution/lucid";

enum ScriptRequirementsCode {
    Signer = 1,
    Before = 2,
    After = 3,
}



type ScriptRequirement = {
    code: ScriptRequirementsCode,
    value: string|number,
}

async function createCIP106Transaction(evolution: LucidEvolution, scriptRequirements: ScriptRequirement[], script?: string, collateral?: string) {
    
    const address = await evolution.wallet().address()
    const localLucid =evolution
    if(collateral) {
        localLucid.selectWallet.fromAddress(address, [coreToUtxo(CML.TransactionUnspentOutput.from_cbor_hex(collateral!))])
    }
    const tx =  localLucid.newTx()

    for(const requirement of scriptRequirements) {
        if(requirement.code === ScriptRequirementsCode.Signer) {
            tx.addSigner(credentialToAddress(evolution.config().network!, {type: "Key", hash: requirement.value as string}))
        }
        if(requirement.code === ScriptRequirementsCode.Before) {
            tx.validTo(slotToUnixTime(evolution.config().network!, requirement.value as number))
        }
        if(requirement.code === ScriptRequirementsCode.After) {
            tx.validFrom(slotToUnixTime(evolution.config().network!, (requirement.value as number) + 1))
        }
    }
    if(script) {
        tx.attach.Script({type: "Native", script})
    }
    return tx
}



export { createCIP106Transaction };
