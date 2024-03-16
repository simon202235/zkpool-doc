---
sidebar_label: 'Galactic Network Introduction'
sidebar_position: 1
slug: /ZKPool-2.0/
---
# Galactic Network Introduction
We refer to ZKPool-2.0 as the [Galactic Network](https://en.wikipedia.org/wiki/Intergalactic_Computer_Network) in tribute to J.C.R. Licklider, who first proposed the concept of the Galactic Network, an early vision of the open internet.

## Background

- Verifiable computation, specifically Zero-Knowledge Proofs (ZKPs) technology, serves as a cornerstone in the crypto world. However, designing and operating a reliable, low-cost, decentralized, and economically healthy proving network can be very challenging.
- As Vitalik mentioned[1][2], the zkEVM might have bugs. For enhanced security, a multi-prover framework has been proposed, and increasingly more projects, like Taiko and Scroll, are adopting this solution. Such a design will make the network more complex.
- ZKP requires a significant amount of computational power. However, it's crucial to understand that these requirements are dynamic, not constant, unlike in POW projects. For instance, the total number of transactions in a rollup may fluctuate, and some ZKP projects operate in optimism mode, requiring ZKP only at specific times. Therefore, in each independent ZKP network, the use of ZKP accelerators may vary, increasing the overall cost. Sharing the proving network is essential for fully utilizing the vital computational power.

## Galactic Network

The Galactic Network aims to create a Modular Verifiable Computation Layer (MVCL) that is affordable, decentralized, and easily accessible. This network will significantly reduce the development costs for developers of ZKP projects.  

Ethereum also plans to utilize ZKP to verify Layer 1. Vitalik proposed the "Enshrined ZKEVM" to allow L1 and L2 to share the ZKEVM prover[3]. A modular verifiable computation layer will be aligned with Ethereum's long-term vision.

Additionally, it supports not only the Ethereum ZKP proving network but also other types of verifiable computation, including the Bitcoin ecosystem, web2 verifiable computation scenarios, and so on.

![Galactic Network Ecosystem](./images/modular%20ecosystem.png)
*Modular Galactic Network Ecosystem*

The Galactic Network comprises the following components:

- Ethereum L3 based Appchain: A decentralized, permissionless network constructed to support protocols for provers, verifiers, and others to schedule proving/verification tasks and distribute rewards.
- Galactic Prover Node: Nodes responsible for generating proofs.
- Galactic Verification Node: Nodes that handle verifications.
- Galactic Relayer Node: Nodes to relay proving tasks from ZKP projects to the Galactic Network.
- Galactic Oracle Node: Nodes to split and schedule proving and verification tasks, and aggregate multi-prover.

This network offers several unique features:

- Low-cost and high-performance
- Support for multiple ZKP provers.
- Support for a PoS-Based verifier.

ZKP accelerators can participate in ZKP-proving tasks, which effectively boosts the utilization rate of their accelerators. Meanwhile, the verifier can aid in the validation of these proofs.

## References

1. [Rollup Day 2022 - Multi-Provers for Rollup Security w/ Vitalik Buterin](https://www.youtube.com/watch?v=6hfVzCWT6YI)
2. [Taiko’s Approach to Multi-Proofs](https://taiko.mirror.xyz/j_zUGgLDwb1FY18fzh7bJQz2Qt5xbUlqov4n-vm6IC0)
3. [What might an “enshrined ZK-EVM” look like?](https://notes.ethereum.org/@vbuterin/enshrined_zk_evm)
