export const abiMySwap = [
    {
        'name': 'PoolContractState',
        'type': 'impl',
        'interface_name': 'myswapv3::contract::pool::IPoolState'
    },
    {
        'name': 'core::integer::u256',
        'type': 'struct',
        'members': [
            {
                'name': 'low',
                'type': 'core::integer::u128'
            },
            {
                'name': 'high',
                'type': 'core::integer::u128'
            }
        ]
    },
    {
        'name': 'core::bool',
        'type': 'enum',
        'variants': [
            {
                'name': 'False',
                'type': '()'
            },
            {
                'name': 'True',
                'type': '()'
            }
        ]
    },
    {
        'name': 'myswapv3::contract::pool::IPoolState',
        'type': 'interface',
        'items': [
            {
                'name': 'positions',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    },
                    {
                        'name': 'owner',
                        'type': 'core::starknet::contract_address::ContractAddress'
                    },
                    {
                        'name': 'tick_lower',
                        'type': 'core::integer::u32'
                    },
                    {
                        'name': 'tick_upper',
                        'type': 'core::integer::u32'
                    }
                ],
                'outputs': [
                    {
                        'type': '(core::integer::u128, core::integer::u256, core::integer::u256)'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'positions_tokens_owed',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    },
                    {
                        'name': 'owner',
                        'type': 'core::starknet::contract_address::ContractAddress'
                    },
                    {
                        'name': 'tick_lower',
                        'type': 'core::integer::u32'
                    },
                    {
                        'name': 'tick_upper',
                        'type': 'core::integer::u32'
                    }
                ],
                'outputs': [
                    {
                        'type': '(core::integer::u128, core::integer::u128)'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'ticks',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    },
                    {
                        'name': 'tick',
                        'type': 'core::integer::u32'
                    }
                ],
                'outputs': [
                    {
                        'type': '(core::integer::u128, core::integer::u128, core::bool, core::bool)'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'ticks_fee_growth',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    },
                    {
                        'name': 'tick',
                        'type': 'core::integer::u32'
                    }
                ],
                'outputs': [
                    {
                        'type': '(core::integer::u256, core::integer::u256)'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'current_tick',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::integer::u32'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'current_sqrt_price',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::integer::u256'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'liquidity',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::integer::u128'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'fee_growth_global0',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::integer::u256'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'fee_growth_global1',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::integer::u256'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'balance0',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::integer::u256'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'balance1',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::integer::u256'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'token0',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::starknet::contract_address::ContractAddress'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'token1',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::starknet::contract_address::ContractAddress'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'max_liquidity_per_tick',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::integer::u128'
                    }
                ],
                'state_mutability': 'view'
            }
        ]
    },
    {
        'name': 'PoolContract',
        'type': 'impl',
        'interface_name': 'myswapv3::contract::pool::IPoolActions'
    },
    {
        'name': 'myswapv3::contract::pool::SwapParams',
        'type': 'struct',
        'members': [
            {
                'name': 'zero_for_one',
                'type': 'core::bool'
            },
            {
                'name': 'amount',
                'type': 'core::integer::u256'
            },
            {
                'name': 'exact_input',
                'type': 'core::bool'
            },
            {
                'name': 'sqrt_price_limit_x96',
                'type': 'core::integer::u256'
            },
            {
                'name': 'max_steps',
                'type': 'core::felt252'
            },
            {
                'name': 'optimize_gaps',
                'type': 'core::bool'
            },
            {
                'name': 'simulate',
                'type': 'core::bool'
            }
        ]
    },
    {
        'name': 'myswapv3::contract::pool::IPoolActions',
        'type': 'interface',
        'items': [
            {
                'name': 'mint',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    },
                    {
                        'name': 'recipient',
                        'type': 'core::starknet::contract_address::ContractAddress'
                    },
                    {
                        'name': 'tick_lower',
                        'type': 'core::integer::u32'
                    },
                    {
                        'name': 'tick_upper',
                        'type': 'core::integer::u32'
                    },
                    {
                        'name': 'amount',
                        'type': 'core::integer::u128'
                    }
                ],
                'outputs': [
                    {
                        'type': '(core::integer::u256, core::integer::u256)'
                    }
                ],
                'state_mutability': 'external'
            },
            {
                'name': 'collect',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    },
                    {
                        'name': 'recipient',
                        'type': 'core::starknet::contract_address::ContractAddress'
                    },
                    {
                        'name': 'tick_lower',
                        'type': 'core::integer::u32'
                    },
                    {
                        'name': 'tick_upper',
                        'type': 'core::integer::u32'
                    },
                    {
                        'name': 'amount0_requested',
                        'type': 'core::integer::u128'
                    },
                    {
                        'name': 'amount1_requested',
                        'type': 'core::integer::u128'
                    }
                ],
                'outputs': [
                    {
                        'type': '(core::integer::u128, core::integer::u128)'
                    }
                ],
                'state_mutability': 'external'
            },
            {
                'name': 'burn',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    },
                    {
                        'name': 'tick_lower',
                        'type': 'core::integer::u32'
                    },
                    {
                        'name': 'tick_upper',
                        'type': 'core::integer::u32'
                    },
                    {
                        'name': 'amount',
                        'type': 'core::integer::u128'
                    }
                ],
                'outputs': [
                    {
                        'type': '(core::integer::u256, core::integer::u256)'
                    }
                ],
                'state_mutability': 'external'
            },
            {
                'name': 'swap',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    },
                    {
                        'name': 'zero_for_one',
                        'type': 'core::bool'
                    },
                    {
                        'name': 'amount',
                        'type': 'core::integer::u256'
                    },
                    {
                        'name': 'exact_input',
                        'type': 'core::bool'
                    },
                    {
                        'name': 'sqrt_price_limit_x96',
                        'type': 'core::integer::u256'
                    }
                ],
                'outputs': [
                    {
                        'type': '(core::integer::u256, core::bool, core::integer::u256, core::bool)'
                    }
                ],
                'state_mutability': 'external'
            },
            {
                'name': 'swap1',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    },
                    {
                        'name': 'params',
                        'type': 'myswapv3::contract::pool::SwapParams'
                    }
                ],
                'outputs': [
                    {
                        'type': '(core::integer::u256, core::bool, core::integer::u256, core::bool)'
                    }
                ],
                'state_mutability': 'external'
            },
            {
                'name': 'limited_swap',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    },
                    {
                        'name': 'params',
                        'type': 'myswapv3::contract::pool::SwapParams'
                    }
                ],
                'outputs': [
                    {
                        'type': '(core::integer::u256, core::integer::u256, core::felt252)'
                    }
                ],
                'state_mutability': 'external'
            }
        ]
    },
    {
        'name': 'PoolOracleImpl',
        'type': 'impl',
        'interface_name': 'myswapv3::contract::pool::IPoolOracle'
    },
    {
        'name': 'myswapv3::contract::pool::IPoolOracle',
        'type': 'interface',
        'items': [
            {
                'name': 'initialize_oracle',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    }
                ],
                'outputs': [],
                'state_mutability': 'external'
            },
            {
                'name': 'get_oracle_init_date',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::integer::u32'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'oracle_observe',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    },
                    {
                        'name': 'seconds_ago',
                        'type': 'core::array::Array::<core::integer::u32>'
                    }
                ],
                'outputs': [
                    {
                        'type': '(core::array::Array::<core::integer::u64>, core::array::Array::<core::integer::u256>)'
                    }
                ],
                'state_mutability': 'view'
            }
        ]
    },
    {
        'name': 'PoolContractOwner',
        'type': 'impl',
        'interface_name': 'myswapv3::contract::pool::IPoolOwnerActions'
    },
    {
        'name': 'myswapv3::contract::pool::IPoolOwnerActions',
        'type': 'interface',
        'items': [
            {
                'name': 'set_fee_protocol',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    },
                    {
                        'name': 'fee_protocol0',
                        'type': 'core::integer::u8'
                    },
                    {
                        'name': 'fee_protocol1',
                        'type': 'core::integer::u8'
                    }
                ],
                'outputs': [],
                'state_mutability': 'external'
            },
            {
                'name': 'collect_protocol',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    },
                    {
                        'name': 'recipient',
                        'type': 'core::starknet::contract_address::ContractAddress'
                    },
                    {
                        'name': 'amount0_requested',
                        'type': 'core::integer::u128'
                    },
                    {
                        'name': 'amount1_requested',
                        'type': 'core::integer::u128'
                    }
                ],
                'outputs': [
                    {
                        'type': '(core::integer::u128, core::integer::u128)'
                    }
                ],
                'state_mutability': 'external'
            }
        ]
    },
    {
        'name': 'UpgradableImpl',
        'type': 'impl',
        'interface_name': 'myswapv3::contract::upgradable::IUpgradable'
    },
    {
        'name': 'myswapv3::contract::upgradable::IUpgradable',
        'type': 'interface',
        'items': [
            {
                'name': 'upgrade',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'chash',
                        'type': 'core::starknet::class_hash::ClassHash'
                    }
                ],
                'outputs': [],
                'state_mutability': 'external'
            },
            {
                'name': 'migrate_storage',
                'type': 'function',
                'inputs': [],
                'outputs': [],
                'state_mutability': 'external'
            }
        ]
    },
    {
        'name': 'PoolFactoryContract',
        'type': 'impl',
        'interface_name': 'myswapv3::contract::pool::IPoolFactory'
    },
    {
        'name': 'myswapv3::contract::pool::PoolParams',
        'type': 'struct',
        'members': [
            {
                'name': 'token0',
                'type': 'core::starknet::contract_address::ContractAddress'
            },
            {
                'name': 'token1',
                'type': 'core::starknet::contract_address::ContractAddress'
            },
            {
                'name': 'fee',
                'type': 'core::integer::u32'
            },
            {
                'name': 'tick_spacing',
                'type': 'core::integer::u32'
            }
        ]
    },
    {
        'name': 'myswapv3::contract::pool::IPoolFactory',
        'type': 'interface',
        'items': [
            {
                'name': 'create_pool',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'token0',
                        'type': 'core::starknet::contract_address::ContractAddress'
                    },
                    {
                        'name': 'token1',
                        'type': 'core::starknet::contract_address::ContractAddress'
                    },
                    {
                        'name': 'fee',
                        'type': 'core::integer::u32'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::felt252'
                    }
                ],
                'state_mutability': 'external'
            },
            {
                'name': 'initialize_pool_price',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    },
                    {
                        'name': 'sqrt_price_x96',
                        'type': 'core::integer::u256'
                    }
                ],
                'outputs': [],
                'state_mutability': 'external'
            },
            {
                'name': 'create_and_initialize_pool',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'token0',
                        'type': 'core::starknet::contract_address::ContractAddress'
                    },
                    {
                        'name': 'token1',
                        'type': 'core::starknet::contract_address::ContractAddress'
                    },
                    {
                        'name': 'fee',
                        'type': 'core::integer::u32'
                    },
                    {
                        'name': 'sqrt_price_x96',
                        'type': 'core::integer::u256'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::felt252'
                    }
                ],
                'state_mutability': 'external'
            },
            {
                'name': 'delete_pool',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pkey',
                        'type': 'core::felt252'
                    }
                ],
                'outputs': [],
                'state_mutability': 'external'
            },
            {
                'name': 'owner',
                'type': 'function',
                'inputs': [],
                'outputs': [
                    {
                        'type': 'core::starknet::contract_address::ContractAddress'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'pool_key',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'token0',
                        'type': 'core::starknet::contract_address::ContractAddress'
                    },
                    {
                        'name': 'token1',
                        'type': 'core::starknet::contract_address::ContractAddress'
                    },
                    {
                        'name': 'fee',
                        'type': 'core::integer::u32'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::felt252'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'get_pool',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'token0',
                        'type': 'core::starknet::contract_address::ContractAddress'
                    },
                    {
                        'name': 'token1',
                        'type': 'core::starknet::contract_address::ContractAddress'
                    },
                    {
                        'name': 'fee',
                        'type': 'core::integer::u32'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::felt252'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'is_initialized',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'token0',
                        'type': 'core::starknet::contract_address::ContractAddress'
                    },
                    {
                        'name': 'token1',
                        'type': 'core::starknet::contract_address::ContractAddress'
                    },
                    {
                        'name': 'fee',
                        'type': 'core::integer::u32'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::bool'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'pool_params',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'pool_key',
                        'type': 'core::felt252'
                    }
                ],
                'outputs': [
                    {
                        'type': 'myswapv3::contract::pool::PoolParams'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'fee_amount_to_tick_spacing',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'fee',
                        'type': 'core::integer::u32'
                    }
                ],
                'outputs': [
                    {
                        'type': 'core::integer::u32'
                    }
                ],
                'state_mutability': 'view'
            },
            {
                'name': 'set_migrator',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'migrator',
                        'type': 'core::starknet::contract_address::ContractAddress'
                    }
                ],
                'outputs': [],
                'state_mutability': 'external'
            },
            {
                'name': 'migrator',
                'type': 'function',
                'inputs': [],
                'outputs': [
                    {
                        'type': 'core::starknet::contract_address::ContractAddress'
                    }
                ],
                'state_mutability': 'view'
            }
        ]
    },
    {
        'name': 'PoolStorageMgr',
        'type': 'impl',
        'interface_name': 'myswapv3::helpers::storage_mgr::IStorageMgr'
    },
    {
        'name': 'myswapv3::helpers::storage_mgr::IStorageMgr',
        'type': 'interface',
        'items': [
            {
                'name': 'set_storage_version',
                'type': 'function',
                'inputs': [
                    {
                        'name': 'version',
                        'type': 'core::integer::u32'
                    }
                ],
                'outputs': [],
                'state_mutability': 'external'
            },
            {
                'name': 'get_storage_version',
                'type': 'function',
                'inputs': [],
                'outputs': [
                    {
                        'type': 'core::integer::u32'
                    }
                ],
                'state_mutability': 'view'
            }
        ]
    },
    {
        'name': 'constructor',
        'type': 'constructor',
        'inputs': [
            {
                'name': 'owner',
                'type': 'core::starknet::contract_address::ContractAddress'
            }
        ]
    },
    {
        'kind': 'struct',
        'name': 'myswapv3::contract::pool::PoolContract::Initialize',
        'type': 'event',
        'members': [
            {
                'kind': 'data',
                'name': 'pool',
                'type': 'myswapv3::contract::pool::PoolParams'
            },
            {
                'kind': 'data',
                'name': 'sqrt_price_x96',
                'type': 'core::integer::u256'
            },
            {
                'kind': 'data',
                'name': 'tick',
                'type': 'core::integer::u32'
            }
        ]
    },
    {
        'kind': 'struct',
        'name': 'myswapv3::contract::pool::PoolContract::Mint',
        'type': 'event',
        'members': [
            {
                'kind': 'data',
                'name': 'pool',
                'type': 'myswapv3::contract::pool::PoolParams'
            },
            {
                'kind': 'data',
                'name': 'owner',
                'type': 'core::starknet::contract_address::ContractAddress'
            },
            {
                'kind': 'data',
                'name': 'tick_lower',
                'type': 'core::integer::u32'
            },
            {
                'kind': 'data',
                'name': 'tick_upper',
                'type': 'core::integer::u32'
            },
            {
                'kind': 'data',
                'name': 'liquidity_amount',
                'type': 'core::integer::u128'
            },
            {
                'kind': 'data',
                'name': 'amount0',
                'type': 'core::integer::u256'
            },
            {
                'kind': 'data',
                'name': 'amount1',
                'type': 'core::integer::u256'
            },
            {
                'kind': 'data',
                'name': 'sender',
                'type': 'core::starknet::contract_address::ContractAddress'
            }
        ]
    },
    {
        'kind': 'struct',
        'name': 'myswapv3::contract::pool::PoolContract::Collect',
        'type': 'event',
        'members': [
            {
                'kind': 'data',
                'name': 'pool',
                'type': 'myswapv3::contract::pool::PoolParams'
            },
            {
                'kind': 'data',
                'name': 'owner',
                'type': 'core::starknet::contract_address::ContractAddress'
            },
            {
                'kind': 'data',
                'name': 'recipient',
                'type': 'core::starknet::contract_address::ContractAddress'
            },
            {
                'kind': 'data',
                'name': 'tick_lower',
                'type': 'core::integer::u32'
            },
            {
                'kind': 'data',
                'name': 'tick_upper',
                'type': 'core::integer::u32'
            },
            {
                'kind': 'data',
                'name': 'amount0',
                'type': 'core::integer::u128'
            },
            {
                'kind': 'data',
                'name': 'amount1',
                'type': 'core::integer::u128'
            }
        ]
    },
    {
        'kind': 'struct',
        'name': 'myswapv3::contract::pool::PoolContract::Burn',
        'type': 'event',
        'members': [
            {
                'kind': 'data',
                'name': 'pool',
                'type': 'myswapv3::contract::pool::PoolParams'
            },
            {
                'kind': 'data',
                'name': 'owner',
                'type': 'core::starknet::contract_address::ContractAddress'
            },
            {
                'kind': 'data',
                'name': 'tick_lower',
                'type': 'core::integer::u32'
            },
            {
                'kind': 'data',
                'name': 'tick_upper',
                'type': 'core::integer::u32'
            },
            {
                'kind': 'data',
                'name': 'liquidity_amount',
                'type': 'core::integer::u128'
            },
            {
                'kind': 'data',
                'name': 'amount0',
                'type': 'core::integer::u256'
            },
            {
                'kind': 'data',
                'name': 'amount1',
                'type': 'core::integer::u256'
            }
        ]
    },
    {
        'kind': 'struct',
        'name': 'myswapv3::contract::pool::PoolContract::Swap',
        'type': 'event',
        'members': [
            {
                'kind': 'data',
                'name': 'pool',
                'type': 'myswapv3::contract::pool::PoolParams'
            },
            {
                'kind': 'data',
                'name': 'sender',
                'type': 'core::starknet::contract_address::ContractAddress'
            },
            {
                'kind': 'data',
                'name': 'recipient',
                'type': 'core::starknet::contract_address::ContractAddress'
            },
            {
                'kind': 'data',
                'name': 'amount0',
                'type': 'core::integer::u256'
            },
            {
                'kind': 'data',
                'name': 'amount0_sign',
                'type': 'core::bool'
            },
            {
                'kind': 'data',
                'name': 'amount1',
                'type': 'core::integer::u256'
            },
            {
                'kind': 'data',
                'name': 'amount1_sign',
                'type': 'core::bool'
            },
            {
                'kind': 'data',
                'name': 'sqrt_price_x96',
                'type': 'core::integer::u256'
            },
            {
                'kind': 'data',
                'name': 'liquidity',
                'type': 'core::integer::u128'
            },
            {
                'kind': 'data',
                'name': 'tick',
                'type': 'core::integer::u32'
            }
        ]
    },
    {
        'kind': 'struct',
        'name': 'myswapv3::contract::pool::PoolContract::SetFeeProtocol',
        'type': 'event',
        'members': [
            {
                'kind': 'data',
                'name': 'pool',
                'type': 'myswapv3::contract::pool::PoolParams'
            },
            {
                'kind': 'data',
                'name': 'protocol_fee_0_old',
                'type': 'core::integer::u8'
            },
            {
                'kind': 'data',
                'name': 'protocol_fee_1_old',
                'type': 'core::integer::u8'
            },
            {
                'kind': 'data',
                'name': 'protocol_fee_0_new',
                'type': 'core::integer::u8'
            },
            {
                'kind': 'data',
                'name': 'protocol_fee_1_new',
                'type': 'core::integer::u8'
            }
        ]
    },
    {
        'kind': 'struct',
        'name': 'myswapv3::contract::pool::PoolContract::CollectProtocol',
        'type': 'event',
        'members': [
            {
                'kind': 'data',
                'name': 'pool',
                'type': 'myswapv3::contract::pool::PoolParams'
            },
            {
                'kind': 'data',
                'name': 'sender',
                'type': 'core::starknet::contract_address::ContractAddress'
            },
            {
                'kind': 'data',
                'name': 'recipient',
                'type': 'core::starknet::contract_address::ContractAddress'
            },
            {
                'kind': 'data',
                'name': 'amount0',
                'type': 'core::integer::u256'
            },
            {
                'kind': 'data',
                'name': 'amount1',
                'type': 'core::integer::u256'
            }
        ]
    },
    {
        'kind': 'struct',
        'name': 'myswapv3::contract::pool::PoolContract::PoolCreated',
        'type': 'event',
        'members': [
            {
                'kind': 'data',
                'name': 'pool',
                'type': 'myswapv3::contract::pool::PoolParams'
            },
            {
                'kind': 'data',
                'name': 'pool_key',
                'type': 'core::felt252'
            },
            {
                'kind': 'data',
                'name': 'tick_spacing',
                'type': 'core::integer::u32'
            }
        ]
    },
    {
        'kind': 'struct',
        'name': 'myswapv3::contract::pool::PoolContract::DebugCalcTick',
        'type': 'event',
        'members': [
            {
                'kind': 'data',
                'name': 'price',
                'type': 'core::integer::u256'
            },
            {
                'kind': 'data',
                'name': 'tick',
                'type': 'core::integer::u32'
            },
            {
                'kind': 'data',
                'name': 'prev_tick',
                'type': 'core::integer::u32'
            }
        ]
    },
    {
        'kind': 'struct',
        'name': 'myswapv3::contract::pool::PoolContract::DebugCalcPrice',
        'type': 'event',
        'members': [
            {
                'kind': 'data',
                'name': 'price',
                'type': 'core::integer::u256'
            },
            {
                'kind': 'data',
                'name': 'tick',
                'type': 'core::integer::u32'
            }
        ]
    },
    {
        'kind': 'struct',
        'name': 'myswapv3::contract::pool::PoolContract::DebugSwapStep',
        'type': 'event',
        'members': [
            {
                'kind': 'data',
                'name': 'amount_in',
                'type': 'core::integer::u256'
            },
            {
                'kind': 'data',
                'name': 'price',
                'type': 'core::integer::u256'
            }
        ]
    },
    {
        'kind': 'struct',
        'name': 'myswapv3::contract::pool::PoolContract::DebugSwap',
        'type': 'event',
        'members': [
            {
                'kind': 'data',
                'name': 'amount0',
                'type': 'core::integer::u256'
            },
            {
                'kind': 'data',
                'name': 'amount1',
                'type': 'core::integer::u256'
            }
        ]
    },
    {
        'kind': 'struct',
        'name': 'myswapv3::contract::pool::PoolContract::DebugBlock',
        'type': 'event',
        'members': [
            {
                'kind': 'data',
                'name': 'n',
                'type': 'core::integer::u64'
            }
        ]
    },
    {
        'kind': 'enum',
        'name': 'myswapv3::contract::pool::PoolContract::Event',
        'type': 'event',
        'variants': [
            {
                'kind': 'nested',
                'name': 'Initialize',
                'type': 'myswapv3::contract::pool::PoolContract::Initialize'
            },
            {
                'kind': 'nested',
                'name': 'Mint',
                'type': 'myswapv3::contract::pool::PoolContract::Mint'
            },
            {
                'kind': 'nested',
                'name': 'Collect',
                'type': 'myswapv3::contract::pool::PoolContract::Collect'
            },
            {
                'kind': 'nested',
                'name': 'Burn',
                'type': 'myswapv3::contract::pool::PoolContract::Burn'
            },
            {
                'kind': 'nested',
                'name': 'Swap',
                'type': 'myswapv3::contract::pool::PoolContract::Swap'
            },
            {
                'kind': 'nested',
                'name': 'SetFeeProtocol',
                'type': 'myswapv3::contract::pool::PoolContract::SetFeeProtocol'
            },
            {
                'kind': 'nested',
                'name': 'CollectProtocol',
                'type': 'myswapv3::contract::pool::PoolContract::CollectProtocol'
            },
            {
                'kind': 'nested',
                'name': 'PoolCreated',
                'type': 'myswapv3::contract::pool::PoolContract::PoolCreated'
            },
            {
                'kind': 'nested',
                'name': 'DebugCalcTick',
                'type': 'myswapv3::contract::pool::PoolContract::DebugCalcTick'
            },
            {
                'kind': 'nested',
                'name': 'DebugCalcPrice',
                'type': 'myswapv3::contract::pool::PoolContract::DebugCalcPrice'
            },
            {
                'kind': 'nested',
                'name': 'DebugSwapStep',
                'type': 'myswapv3::contract::pool::PoolContract::DebugSwapStep'
            },
            {
                'kind': 'nested',
                'name': 'DebugSwap',
                'type': 'myswapv3::contract::pool::PoolContract::DebugSwap'
            },
            {
                'kind': 'nested',
                'name': 'DebugBlock',
                'type': 'myswapv3::contract::pool::PoolContract::DebugBlock'
            }
        ]
    }
];