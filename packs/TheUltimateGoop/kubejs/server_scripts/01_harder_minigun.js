// priority: 1

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {

    // Remove the standard crafting table crafting recipe for this item
    event.remove({id: 'pneumaticcraft:minigun'});

    // Add it back as this recipe shape for Create's Mechanical Crafters
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            ' R   ',
            'CEQTT',
            'CMQTT',
            ' A   ',
        ],
        key: {
            T: { item: 'pneumaticcraft:advanced_pressure_tube' },
            Q: { item: 'tfmg:quad_potato_cannon' },
            E: { item: 'compressedcreativity:compressed_air_engine' },
            M: { item: 'tfmg:steel_mechanism' },
            A: { item: 'createbigcannons:autocannon_ammo_container' },
            R: { item: 'tfmg:rebar' },
            C: { item: 'pneumaticcraft:reinforced_air_canister' },
        },
        result: { item: 'pneumaticcraft:minigun' },
        acceptMirrored: true
    });
});
