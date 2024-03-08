---
sidebar_label: 'Modular Galactic Network Overview'
sidebar_position: 1
---
# Modular Galactic Network Overview
## Ethereum L3-Based Appchain

We expect the network to have high-performance requirements due to the frequent chain interactions and token transactions associated with the lifecycle of proof tasks. As such, cost is a significant consideration.

To reduce the overall cost, we will deploy our protocol layer on an Ethereum L3 Appchain which is L2 of another L2 rollup, which offers the following advantages:

1. Compatibility with the Ethereum ecosystem
2. Low transaction fees, essential for the numerous interactions with smart contracts
3. Customizable block proposing speed, for instance, every 1 second, and block finalization frequency, like every 1 minute, to further reduce cost
4. Its own ecosystem including bridge, DEX, etc. which could potentially expand in the future
5. Decentralization

We will start with the Taiko chain, and consider other chains as a backup.

Taiko allows for setting the ratio between optimistic proofs (no ZK computation) and ZK proofs (requires ZK computation) of blocks, significantly reducing the cost. We will also batch  blocks to decrease the transaction fee of settling block data into L2. Furthermore, we will consider using a Data Availability Layer to lessen the cost of writing data to L2.

However, we will not compromise on security. The protocol's main contract and token contract will be deployed on Taiko L2, which are used to settle the protocol's vault and reward pool. Using Taiko's built-in cross-chain messaging infrastructure, we can seamlessly settle funds from Galactic network’s protocol layer to L2. Storing funds on L2 is safer as it is more decentralized compared to our protocol layer, which is more application-specific.

On our protocol layer, we will deploy frequently operated contract logic, such as the circulation of proof fees, streaming payment, and the lifecycle of proving tasks. This will help maintain a low overall cost, allowing network users to focus on their tasks, not the cost of network transactions.

 ![Ethereum L3-Based Appchain](./images/L3.png)
 *Ethereum L3-Based Appchain*

L2 is an extension of Ethereum's performance, while L3 is an extension of L2's performance. We estimate that app-specific L3 can have a gas limit of 0.5-1B, which is equivalent to each block containing 1000 ERC20 transfers. And it can achieve sub-second block speed. In summary, it can reach 1000-5000 tps or higher.

The main transaction cost of L3 is the block data storage written to L2. On average, each L3 transaction consumes 2000-3000 L2 gas. If it reaches 1000 tps, it will consume 0.002 ETH at an L2 gas price of 1 gwei. So if L2 is used as the data availability layer, the cost will be high. Our choice is to use other dedicated data availability layers, such as Celestia, EigenDA or Avail. Based on the [calculations](https://medium.com/@numia.data/the-impact-of-celestias-modular-da-layer-on-ethereum-l2s-a-first-look-8321bd41ff25) provided, costs will decrease by approximately 300 to 500 times, making them essentially trivial.

## Galactic Network Modules

The Galactic contract will act as the central hub for essential network records, including projects, provers, tasks, rewards, bonds, and staking, among others. This will be the foundation for the entire decentralized network.

The Oracle node, a component of the network, will handle complex task scheduling, reward distribution, and proof aggregation.

Prover, relayer, and verifier nodes can all function in a decentralized manner externally, using the Galactic contract as their source of truth.

 ![modules](./images/modules.png)
 *Galactic Network Modules*

### What does the Galactic Contract contain?

 ![Galactic Contract](./images/Galactic%20Contract.png)
 *Galactic Contracts*

1. Task events for actions: submission, proof, and verification.
2. Users, projects, provers, verifiers and tasks.
3. Provers' rewards: these are updated periodically, for instance, daily.
4. The default reward calculation is conducted on-chain.
5. Provers' bonds.
6. Users' staking.

### What does the Oracle Node contain?

 ![Galactic Oracle nodes](./images/Oracle%20nodes.png)
 *Galactic Oracle nodes*

1. Task scheduling: This is a complex logic. The final task scheduling results are written to the Galactic contract, while intermediate task statuses are stored in the local DB. Since task data are huge, which could potentially overload the contract, only the most necessary data are written to the chain.
2. Task split and aggregation: A task might be divided into multiple smaller subtasks and proved in parallel to increase efficiency.
3. Proof aggregation: generate a batched proof for a group of proofs
4. Complex reward calculation can be done off-chain if the default version in the Galactic contract cannot handle it or involves too many steps.
5. Utility tools such as the front-end and data explorer.

### What does the Relayer Node do?

A relayer node acts as an external node that integrates with ZKP projects. It does this by retrieving active tasks from the ZKP projects.

In the meanwhile, the relayer node needs to pay the gas fee and provide necessary ZKP projects’ staking toke if the corresponding projects require.

### What’s the task flow?

![Galactic Network Flow](./images/flow.png)
 *Galactic Network Flow*

1. The task request is directly submitted to the Galactic contract (Active mode).
2. Alternatively, the relayer retrieves the task from another chain (Passive mode). Then, the relayer submits the task with the bond to the Galactic contract.
3. The oracle node schedules the task based on the prover's attributes and availability.
4. The prover node syncs the task from the Galactic contract.
5. The prover node generates the proof and sends it back to the Galactic contract.
6. Oracle Node aggregates proofs and produce an batchedProof to the Galactic contract
7. The Galactic contract publishes the verifier task.
8. Once the Galactic contract evaluates that the majority of verification results pass, it marks all the proofs in the batch  as verified.
9. The Galactic contract or the oracle node calculates the reward.
10. The Galactic contract returns the bond and shares the reward with the prover.

Here is a detailed sequence diagram:

![Galactic Network Flow Sequence](./images/flow%20chart.png)
*Galactic Network Flow Sequence*

In the architecture above there will be lots of interactions between other parties with the Galactic contract. This drives our choice of Ethereum L3 which will further reduce the transaction cost.