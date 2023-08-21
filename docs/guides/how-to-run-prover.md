---
sidebar_label: 'How to Run a Prover'
sidebar_position: 3
---

# How to Run a Prover

This document represent on how to run a standalone uniform ZK Pool prover build upon multiple ZKP circuit projects. 

### Environment requirements

* UNIX-like OS (Ubuntu 20.04,Ubuntu22.04 recommend)
* Rust 1.65.0+
* 16 core + 32G memory

### run zkpool-prover with one command

Notice: please replace the `<account_access_key>` and `<device_id>` with your own account access key and device id.

* Ubuntu
```bash
curl -sSf -L https://zkpool-connect-1318455074.cos.na-siliconvalley.myqcloud.com/prover-client/join_zkpool_ubuntu_cpu | sh -s -- --access-key <account_access_key> --device-id <device_id> 
```

* MacOS
```bash
curl -sSf -L https://zkpool-connect-1318455074.cos.na-siliconvalley.myqcloud.com/prover-client/join_zkpool_macos-catalina_cpu | sh -s -- --access-key <account_access_key> --device-id <device_id>
```


### Compile and run zkpool-prover from source code

```bash
git clone https://github.com/aoraki-labs/zkpool-prover.git

cd zkpool-prover
cargo build --release
wget https://storage.googleapis.com/zkevm-circuits-keys/kzg_bn254_21.srs -P ./target/release

cd ./target/release
./zkpool-prover -k <account_access_key> -u <device_id> -p <scheduler_address>
``` 

* zkpool-prover parameters
```
-k: the prover access key
-u: the prover device id (optional,program will generate one automatically if not set )
-p: the zkpool scheduler pool address
```

### Run script
```bash
    ./run-prover.sh #Notice: remind to modify the ./zkpool-prover running parameters in the shell script
```



