---
sidebar_position: 4
slug: /
---

# Overview

There has been an explosion of ZKP (Zero-Knowledge Proof) applications and zk-Rollups, especially Ethereum zk-Rollup. 

ZKP computation power is different from POW. While POW requires many machines to achieve decentralization, ZKP is a service that each project needs, and its cost is an essential factor. A comparison is shown in the below table.

| Aspect | POW Miners | ZKP Provers |
| --- | --- | --- |
| Computation Purpose | Decentralization | To generate a proof |
| Computation Content | A large number of random, repeated, and similar functions. | Complex mathematical operations with deterministic results. |
| Computation Redundancy | Necessary | Unnecessary |

The adoption of ZKP is still facing challenges from both the ZKP projects' side and the ZKP prover operators' side due to these features.

## Challenges for ZKP projects

Currently, each ZKP project has to make a considerable effort to build a proving system, including algorithms and infrastructure, while keeping it low-cost. Some questions that come up while building a zk-related project include:

1. Which proving system could be used?
2. How to design the circuit?
3. How to set up the proving system?
4. What is the performance of the proving system? How can it be optimized?
5. How much does the proving system cost? How can the overall cost be reduced?

## Challenges for ZKP Prover Operators

The ZKP prover operators meet some new challenges other than POW miners.

1.  Some ZKP projects may require a gas fee to submit proof or staking as a prover, which brings cost and risk for the provers. 
2. Some projects may use bid or random selection solutions to avoid redundant computation, which may not fully utilize the prover when it hasn't won the task. It reduces the revenue a prover can have. 
3. The various ZKP projects have different algorithms and prover software, making it difficult for provers to accommodate these various projects.

## The Design Target of ZKPool

The ZKPool's mission is to make Zero-Knowledge Proof flow in the digital world. The ZKPool wants to build a bridge between ZKP applications and ZKP provers.

At ZKPool, we aim to provide a solution that addresses the challenges in the proving system.

The ideal solution is to provide the following to the ZKP projects:

1. Provides fast and high-throughput performance.
2. Offers cheap and transparent costs.

The design principles of ZKPool include:

- Economic efficiency. Find a balance between the requirements of ZKP projects' low-cost and ZKP prover's higher profit.
- Transparency: Keep revenue distribution transparent

## The Roadmap of ZKPool

The ZKPool will have the following milestones:

- Centralized solution for one ZKP project
- Connect multiple ZKP projects with the unified ZKP provers
- Fully decentralized ZKP computing pool
