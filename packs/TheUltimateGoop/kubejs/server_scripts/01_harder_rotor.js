// priority: 1

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {

    // Remove the standard crafting table crafting recipe for these items
    event.remove({id: 'davebuildingmod:rec_copper_coil'});
    event.remove({id: 'create_new_age:shaped/generator_coil'});

    // Create a sequenced assembly recipe for the copper coil block,
    // which will be used in the next recipe below
    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: { item: 'tfmg:cast_iron_pipe' },
        transitionalItem: { item: 'tfmg:cast_iron_pipe' },
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [ 
                    { item: 'tfmg:cast_iron_pipe' }, 
                    { item: 'create_new_age:copper_wire' },
                ],
                results: [
                    { item: 'tfmg:cast_iron_pipe' }
                ]
            }
        ],
        results: [
            { item: 'davebuildingmod:copper_coil' }
        ],
        loops: 8
    });

    // Create a mechanical crafting recipe for the generator coil,
    // so now the only way to craft this is via mechanical crafters
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            'CCC',
            'CFC',
            'CCC',
        ],
        key: {
            C: { item: 'davebuildingmod:copper_coil' },
            F: { item: 'tfmg:cast_iron_flywheel' },
        },
        result: { item: 'create_new_age:generator_coil' },
        acceptMirrored: false
    });
});
