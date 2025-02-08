# CIP106-LucidEvolution

A CIP106 implementation for Lucid Evolution, providing transaction building capabilities for Cardano plutus wallets.

## Installation

```bash

npm install cip106-lucidevolution
```


## Usage

```typescript
import { createCIP106Transaction } from 'cip106-lucidevolution';
const lucid = await Lucid(provider, network );
let script = await wallet.cip106.getScript()
let scriptRequirements = await wallet.cip106.getScriptRequirements();
const tx = await createCIP106Transaction(lucid,scriptRequirements, script)
```




## Features

- Transaction building from CIP106 format
- Support for:
  - Collateral handling

  - Input collection
  - Validity ranges
  - Multi-signature transactions

## API Reference

### `createCIP106Transaction`

Creates a transaction builder from CIP106 format requirements.
