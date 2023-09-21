---
sidebar_label: 'Introduction'
sidebar_position: 1
---

# Introduction

ZKPool aims to connect various ZKP applications and ZKP provers and provide the following capabilities:

- ZKPool gathers smaller provers' capacity together and stakes as a pool.
- ZKPool operates to minimize the risks of being slashed.
- ZKPool calculates and distributes the rewards of provers.
- ZKPool makes it really easy for provers to join.

Initially, ZKPool will assume the risk and stake on behalf of all the provers connected to the pool. The pool is open for registered provers to connect to.

## General Flow

Currently, the general flow is as follows:

1. Register on [https://zkpool.io](https://zkpool.io/), generate the user account's unique access key.
2. Use the one command installation script to connect to ZKPool.
3. Login to [https://zkpool.io](https://zkpool.io/) to view prover machine status and rewards.

## Releases

### ZKPool A1

#### Taiko Project Support

Taiko is a decentralized, Ethereum-equivalent zk-rollup project with Type 1 zkEVM technology.

ZKPool A1 is dedicated to the [Taiko Alpha-5 (A5) Testnet](https://taiko.mirror.xyz/0jc5XA5RVjOUNVdRdGmw9prlsC4deA1XgZJppmXh8rs), and supports users who want to join as individual provers.

#### Hardware requirements

ZKPool supports various provers to join, CPU, GPU, and so on. 

ZKPool will provide both CPU and GPU binaries (coming soon), and it also open-source [the prover client codes](https://github.com/aoraki-labs/zkpool-prover) to support 3rd party to build its hardware binary.

The hardware that meets the minimum requirements can run CPU prover binary:

- 8 or 16 core CPU
- 32 GB memory

#### Reward distribution

According to [Taiko](https://taiko.mirror.xyz/HJCWBluTwmNyWRkhzIXXr0k5xAaalRNtmlyDMJTu_ws):

> Please note, reward or profit considerations (if any) will heavily depend on a variety of factors, and are in no way guaranteed. This holds for proposers, provers, and all network participants. Certain assumptions used may not reflect reality for the duration of the testnet period, protocol flaws can be found, and mainnet timing is uncertain. We reserve the right to adjust the program, with the ultimate goal of testing unprecedented permissionless proposing and proving in a ZK-Rollup. You should only participate if you are keen to help the network test a technical design. Basically, for science.
> 
As ZKPool takes the risk of slashing, pays the Gas fee for submitting the proof and operation cost, ZKPool will share the reward of tokens with provers. Currently the distribution rule is:

- ZKPool: 20%
- Prover: 80%

Note: 

1. The distribution rule is only for testing purposes in the Testnet. ZKPool has the right and plans to adjust it in the future.
2. Rewards are calculated based on a specific interval, such as on a daily basis.
3. Currently, rewards cannot be withdrawn and will be recorded under the prover's wallet address. ZKPool will soon upgrade to support users in withdrawing the tokens.
4. The actual value of the reward is not guaranteed. We participate to help Taiko test and become a successful zk-rollup.
5. ZKPool may consider offering additional incentives from the platform side, especially for early participants. However, this has not yet been determined.

### Legacy
#### [ZKPool A0](./ZKPool-A0.md)

