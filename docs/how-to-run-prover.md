## Introduction

Docs about how to run a standalone uniform zkpool prover build upon multiple zkp circuit project 

### environment requirements

* UNIX-like OS (Ubuntu 20.04,Ubuntu22.04 recommend)
* Rust 1.65.0+


### run zkpool-prover by compile from source code

```
    git clone https://github.com/aoraki-labs/zkpool-prover.git
    cd zkpool-prover
    cargo build --release
    wget https://storage.googleapis.com/zkevm-circuits-keys/kzg_bn254_21.srs -P ./target/release
    cd ./target/release
   ./zkpool-prover -k PYFkD1n6Q6btC3VcPJ29POm0DOWT7SXT -u 123456789 -p 35.201.232.215:18081
```
*  run parameters explain below
```
    -k: the prover access key
    -u: the prover device id (optional,program will generate one automatically if not set )
    -p: the zkpool scheduler pool address
```


### run zkpool-prover by release binary with one command
```
    curl -sSf -L https://zkpool-connect-1318455074.cos.na-siliconvalley.myqcloud.com/prover-client/join_zkpool_ubuntu-20.04_cpu.sh | sudo sh -s -- --access-key account_access_key --device-id device_id    
```


