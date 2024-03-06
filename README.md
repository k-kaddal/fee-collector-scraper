# Fee Collector 

The Fee Collector Server is tailored to extract emitted events from the FeeCollector Smart Contract. Upon its activation, the server initiates the process of storing and synchronizing events from the chain to MongoDB.

- The server conducts checks for newly emitted events at hourly intervals, storing them in the database. This interval can be customized by adjusting the `EVENT_POLLING_INTERVAL` parameter in the .env file.

- The server initializes its synchronization logic with the chain based on the latest block number and updating the initial block number, ensuring no repetition or time cost.

- Each event is uniquely identified by combining the transaction hash, its index and the block number. This ensures the event's uniqueness and prevents it from being stored again unnecessarily.

## To Run
- `docker-compose up` : running docker-compose will create two containers; mongodb and fee-collectore-api
- note: .env is commited for demonstration purpose only

## Architecture

- `contract.serivce` : responsible for all engagement with the smart-contract
    -  SyncFeeCollectorEvents() 
    -  initializeBlock() 
    -  loadFeeCollectorEvents(fromBlock, toBlock) 

- `event.service` : responsible for all Event logic and EventModel
    - CreateEvent(event)
    - GetEventsByIntegrator(integratorAddress)
    - GetLatestEvent()

- `integrator.collector` : A Controller that handles integrato requests 
    - GetEventsByIntegrator(request, response, next)

- `feesCollected.model` : A typegoose schema for the feesCollected events

- `database` : A database utils that is responsible for initialising and synchronising the db
    - InitDatabase()
    - SyncDatabase(contractService)

