import LandRegistry from 0xLandRegistry // Update with the correct contract address

// Script to register a new piece of land
pub fun registerLand(location: String, area: Int): @LandRegistry.Land {
    let land <- LandRegistry.registerLand(location: location, area: area)
    return <-land
}

// Script to transfer ownership of a piece of land
pub fun transferOwnership(location: String, newOwner: Address): @LandRegistry.Land {
    let land <- LandRegistry.transferOwnership(location: location, newOwner: newOwner)
    return <-land
}

// Script to get the owner of a piece of land
pub fun getOwner(location: String): Address? {
    return LandRegistry.getOwner(location: location)
}