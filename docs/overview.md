---
sidebar_position: 4
slug: /overview
---

# Overview

There are explosions of ZKP (Zero-Knowledge Proof) applications and zk-Rollups, especially Ethereum zk-Rollup.

They require ZKP provers. Currently, there are challenges to make the ZKP widely adopted. The challenges come from both the ZKP projects side and the ZKP prover operators side.

Here the ZKP computation power is different from POW. The ZKP is a service that each project needs, and its cost is an essential factor, while the POW requires many machines to achieve decentralization. A comparison is shown in the below table.
|Aspect |POW Miners |ZKP Provers |
|:-|:-:|:-:|  
|Computation Purpose |Decentralization |To generate a proof |
|Computation content |Large number of random, repeated, and similar functions. |Complex mathematical operations with deterministic results. |
|Computation redundancy |Necessary |Unnecessary |

## Challenges for ZKP projects

Currently, each ZKP project has to make much effort to build a proving system, including algorithms and infrastructure, and make it low-cost. 

To build a zk-related project, these questions will come out:

1. Which proving system could be used?
2. How to design the circuit?
3. What’s the performance of the proving system?
4. How to set up the proving system to accelerate it?
5. How much does it cost for this proving system?

The projects not only have to consider how to optimize the solution and consider how to reduce cost but also involve much infra work, such as:

1. Choose prover machines, like GPU or high-performance cpu
2. Need an infra to manage machine clusters and monitoring

For ZKPool, we want to provide a solution for items 3,4&5.

The ideal solution is to let the projects have the following:

1. Fast enough and transparent proving performance 
2. Cheap & Transparent cost

## Challenges for ZKP Prover Operators

The ZKP proving is different from POW. 

Firstly, some projects may require a gas fee to submit proof or staking as a prover. It brings cost and risk for provers. 

Secondly, some projects may use bid or random selection solutions to avoid redundant computation, the prover may not be fully utilized when it hasn’t won the task.

It reduced the revenue a prover can have. 

Thirdly, the various ZKP projects have different algorithms and prover software. It’s difficult for provers to accommodate these various projects.

## The Design Target of ZKPool

The ZKPool's mission is to make Zero-Knowledge Proof flow in the digital world. The ZKPool wants to build a bridge between ZKP applications and ZKP provers. 

The design principle of ZKPool includes:

- Economic efficiency. Find a balance between the requirements of ZKP projects' low-cost and ZKP prover's higher profit.
- Transparency: Keep revenue distribution with transparency

## The Roadmap of ZKPool
The ZKPool will have these milestones:
- Centralized solution for one ZKP project
- Connect multiple ZKP projects with the unified ZKP provers
- Fully decentralized


