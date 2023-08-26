---
sidebar_label: 'Introduction'
sidebar_position: 1
---

# Introduction

ZKPool aims to connect various ZKP applications and ZKP provers.

Taiko is a decentralized, Ethereum-equivalent zk-rollup project with Type 1 zkEVM technology.

ZKPool A0 Phase 0 (ZKPool A0-0) is dedicated to the Taiko Alpha-4 (A4) Testnet, and supports users who want to join as individual provers. According to the plan, ZKPool will soon expand into more ZKP projects.

Taiko A4 Testnet comes with a new staking-based prover economics. Blocks will be distributed to the top 32 staked provers. To become one of the top 32 provers, a substantial amount of Test Taiko tokens (TTKO) and a minimum of 32 prover machines are required. It's very difficult for smaller and solo provers to successfully compete in this staking contest.

ZKPool aims to provide the following capabilities:

- ZKPool gathers smaller provers' capacity together and stakes as a pool.
- ZKPool operates to minimize the risks of being slashed.
- ZKPool calculates and distributes the rewards of provers.
- ZKPool makes it really easy for provers to join.

Initially, ZKPool will assume the risk and stake on behalf of all the provers connected to the pool. The pool is open for registered provers to connect to.

## General flow

Currently, the general flow is as follows:

1. Register on [https://zkpool.io](https://zkpool.io/), generate the user account's unique access key.
2. Use the one command installation script to connect to ZKPool.
3. Login to [https://zkpool.io](https://zkpool.io/) to view prover machine status and rewards.

## Hardware requirements

The Taiko project supports various provers to join, CPU, GPU, and so on. To avoid dominance by hardware performance, it has a relatively long proof window that CPU devices can join as a prover.

ZKPool will provide both CPU and GPU binaries (coming soon), and it will also open-source the prover client codes to support 3rd party to build its hardware binary.

The hardware that meets the minimum requirements can run CPU prover binary:

- 8 or 16 core CPU
- 32 GB memory

In Taiko A4, the proof time on the above hardware may take more than 10 minutes.

Note from [Taiko](https://taiko.mirror.xyz/HJCWBluTwmNyWRkhzIXXr0k5xAaalRNtmlyDMJTu_ws): this is not representative of what a full ZK-EVM proof will eventually cost as not all circuits are included yet. More circuits are being integrated as we go.

In the future, the hardware requirements may be updated as Taiko covers more circuits.

## Reward distribution

According to [Taiko](https://taiko.mirror.xyz/HJCWBluTwmNyWRkhzIXXr0k5xAaalRNtmlyDMJTu_ws):

> Please note, reward or profit considerations (if any) will heavily depend on a variety of factors, and are in no way guaranteed. This holds for proposers, provers, and all network participants. Certain assumptions used may not reflect reality for the duration of the testnet period, protocol flaws can be found, and mainnet timing is uncertain. We reserve the right to adjust the program, with the ultimate goal of testing unprecedented permissionless proposing and proving in a ZK-Rollup. You should only participate if you are keen to help the network test a technical design. Basically, for science.
> 

ZKPool will share the reward of TTKOe  with provers, and in ZKPool A0-0, the distribution rule is:

- ZKPool: 20%
- Prover: 80%

Note: 

1. The distribution rule is just for testing in the Testnet. ZKPool has the right and plans to adjust it in the future.
2. The rewards are calculated based on a certain interval, for example, on a daily basis.
3. Currently, the reward cannot be withdrawn and will be recorded under the prover's wallet address. ZKPool will soon upgrade to support users in withdrawing the TTKOe.
4. The reward's actual value is not guaranteed. We participate to help Taiko to test and become a successful zk-rollup. 
5. 

