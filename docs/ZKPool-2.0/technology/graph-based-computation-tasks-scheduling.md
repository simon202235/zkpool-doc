---
sidebar_label: 'Graph-Based Computation  Tasks Scheduling'
sidebar_position: 2
---
# Graph-Based Computation Tasks Scheduling
## ZKP Proving Task Description

In AI frameworks like TensorFlow, we use graphs to describe computations. These graphs contain various operations, such as convolution and pooling. 

Similarly, in ZKP, we have comparable requirements because:

1. For ZKVM, continuation technology splits large proving tasks into smaller ones. 
2. Recursion, composition, and aggregation technologies are widely used.

![Proof Composition](./images/proof%20composition.png)
*Proof Composition (Source: Figment Capital)*

For each ZKP proving task, we can define it as a kind of operation within a computation graph. Each device acts as a computation node to complete part of the proving tasks.

Thus, we can use a graph to describe the overall proving tasks. 

![Graph-Based Computation](./images/graph-based%20computation.png)
*Graph-Based Computation*

For each operation, we can define these properties:

- input operation (null, one input or multiple inputs)
- name: (support customization)
    - “zkp-singleton"
    - “zkp-continuation”
    - “zkp-recursion-A”
    - “zkp-recursion-B”
    - “zkp-aggregation”
    - ……
- device requirements
    - OS type
    - CPU requirements
    - GPU requirements
    - Memory requirements
- devices id (null when it’s not assigned)
- output operation

## Power of Computation

The platform's incentives are determined by the Power of Computation. Without an accurate measurement of computation power, effectively incentivizing devices is challenging.

For ZKP algorithms, most computations involve operations like Multi-Scalar Multiplication (MSM), Number Theoretic Transform (NTT), and hashing, similar to operations in AI, such as encoders, decoders, or Convolutional Neural Networks (CNN).

We can create a table to define the computation amount for each operation based on the add/multiply function and its bitwidth. This is referred to as the 'Gas' of the ZKP/AI. An offline benchmark tool can then calculate the total Gas for an algorithm.

This method won't be 100% accurate, so our final computation can be measured using a formula like:

$P = P_{gas} * Gas$

Here, $P$ represents the total computation amount for an algorithm.
$P_{gas}$ is a dynamic price that can be retrieved from the Galactic network to reflect the supply and demand relationship.

## Galactic Universal Modular Prover

The UMP means each ZKP accelerator can support different kinds of ZKP proving tasks.

![UMP](./images/UMP.png)
*Universal Modular Prover*

The Oracle node features a plug-in service, Allowing provers to connect and determine the types of tasks the prover can manage. Subsequently, the corresponding proving binary Docker is then downloaded, enabling the node to handle such tasks.

In this manner, a single accelerator can support multiple ZKP proving binaries.

The Galactic SDK client connects to the proving binary plugin via RPC call.

The protocol includes:

1. Init 
2. Start
3. Stop

There is a mechanism to trigger different kinds of computation. 

- High-efficiency mode (default mode): The computation service is restarted each time, allowing easy switching among different tasks.
- High-performance mode: The computation service remains in memory, and when a new task comes, it doesn’t need to restart the service. This mode is used for high throughput tasks.

Each requester project can define its expected mode.

## Scheduler

We will use Oracle Node to take the role of scheduling.

Oracle node will receive the status of all the connected provers and record its liveness and busy/idle status. Once a new task is published, the scheduler will start to work.

Here, we define a task-node matching mechanism.

Firstly, after analyzing a computation graph, a 

- Descriptor of tasks (optimized binary related)
    - Graph
    - Task mode:
        - Performance priority: Redundancy of provers
        - Cost priority: Only one prover for each operation.
- Descriptor of device
    - OS type
    - CPU type
    - GPU type
    - Memory

Then we find a candidate device list for each operation. 

Here we can adopt a relatively simple and effective strategy instead of a complex reputation system.

1. The proposed rules include:
- If a prover fails to generate proof in time, a filter window will be used to exclude this prover.
- If the prover fails to generate proof for the second time, the duration of the prohibition window will be doubled.
- If there are more than three consecutive failures, then the prover will be permanently banned. The only way to regain access is to rename the prover and reconnect to the scheduler.
2. The scheduler in the Oracle node can reschedule the prover if they fail to generate proof in time. 
3. For tasks with high penalty amounts, the scheduler could assign more than one prover to ensure reliability.

When we need more than one device, we will exclude the assigned device and use the method described above to select additional devices.

Finally, we will fill in the device ID for each operation of the computation graph.
