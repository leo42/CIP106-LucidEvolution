import * as _lucid_evolution_lucid from '@lucid-evolution/lucid';
import { LucidEvolution } from '@lucid-evolution/lucid';

declare enum ScriptRequirementsCode {
    Signer = 1,
    Before = 2,
    After = 3
}
type ScriptRequirement = {
    code: ScriptRequirementsCode;
    value: string | number;
};
declare function createCIP106Transaction(evolution: LucidEvolution, scriptRequirements: ScriptRequirement[], script?: string, collateral?: string): Promise<_lucid_evolution_lucid.TxBuilder>;

export { createCIP106Transaction };
