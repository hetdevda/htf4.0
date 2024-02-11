pub contract LandRegistry {

    // defined structure to represent a piece of land
    pub struct Land {
        pub(set) var owner: Address
        pub(set) var location: String
        pub(set) var area: Int

        // initialize the owner field in the struct definition
        init(owner: Address, location: String, area: Int) {
            self.owner = owner
            self.location = location
            self.area = area
        }
    }

    // declared a public dictionary to store land information
    pub var lands: {String: Land}

    // this happens when event emitted when land is registered
    pub event LandRegistered(location: String, area: Int, owner: Address)

    // this happens when event emitted when land ownership is transferred
    pub event OwnershipTransferred(location: String, newOwner: Address)

    // it initialize the contract
    init() {
        self.lands = {}
    }

    // it is a function to register a new piece of land
    pub fun registerLand(location: String, area: Int) {
        let land = Land(owner: self.account.address, location: location, area: area)
        self.lands[location] = land
        emit LandRegistered(location: location, area: area, owner: self.account.address)
    }

    // it is a function to transfer ownership of a piece of land
    pub fun transferOwnership(location: String, newOwner: Address) {
        if let land = self.lands[location] {
            // it ensures that only the current owner can transfer ownership
            if land.owner == self.account.address {
                let updatedLand = Land(owner: newOwner, location: land.location, area: land.area)
                self.lands[location] = updatedLand
                emit OwnershipTransferred(location: location, newOwner: newOwner)
            } else {
                panic("Only the current owner can transfer ownership")
            }
        } else {
            panic("Land does not exist")
        }
    }

    // it is a function to get owner of a piece of land
    pub fun getOwner(location: String): Address? {
        if let land = self.lands[location] {
            return land.owner
        } else {
            return nil
        }
    }
}
