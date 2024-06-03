// priority: 0

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {

    // List of banned recipe IDs
    // Items will not be craftable but will not be de-registered
    let bannedRecipeIDs = [
        'create_new_age:shaped/stirling_engine',
        'mekanism:atomic_disassembler',
        'mekanism:digital_miner',
        'mekanism:flamethrower',
        'mekanism:free_runners_armored',
        'mekanism:free_runners',
        'mekanism:jetpack_armored',
        'mekanism:jetpack',
        'mekanism:meka_tool',
        'mekanism:mekasuit_bodyarmor',
        'mekanism:mekasuit_boots',
        'mekanism:mekasuit_helmet',
        'mekanism:mekasuit_pants',
        'mekanism:portable_qio_dashboard',
        'mekanism:qio_dashboard',
        'mekanism:qio_drive_array',
        'mekanism:qio_drive_base',
        'mekanism:qio_drive_hyper_dense',
        'mekanism:qio_drive_supermassive',
        'mekanism:qio_drive_time_dilating',
        'mekanism:qio_exporter',
        'mekanism:qio_importer',
        'mekanism:qio_redstone_adapter',
        'mekanism:scuba_mask',
        'mekanism:scuba_tank',
        'mekanismgenerators:generator/advanced_solar',
        'mekanismgenerators:generator/gas_burning',
        'mekanismgenerators:generator/heat',
        'mekanismgenerators:generator/solar',
        'mekanismgenerators:generator/wind',
        'pneumaticcraft:advanced_air_compressor',
        'pneumaticcraft:advanced_liquid_compressor',
        'pneumaticcraft:aerial_interface',
        'pneumaticcraft:air_compressor',
        'pneumaticcraft:liquid_compressor',
        'pneumaticcraft:pneumatic_boots',
        'pneumaticcraft:pneumatic_chestplate',
        'pneumaticcraft:pneumatic_dynamo',
        'pneumaticcraft:pneumatic_helmet',
        'pneumaticcraft:pneumatic_leggings',
        'railcraft:bronze_tunnel_bore_head',
        'railcraft:diamond_tunnel_bore_head',
        'railcraft:iron_tunnel_bore_head',
        'railcraft:steel_tunnel_bore_head',
        'railcraft:tunnel_bore',
        'sophisticatedbackpacks:diamond_backpack',
        'sophisticatedbackpacks:gold_backpack',
        'sophisticatedbackpacks:netherite_backpack',
        'twilightforest:uncrafting_table',
    ];
    // This removes unique recipe IDs listed in bannedRecipeIDs,
    // all recipes that take the item as input,
    // and all items that make the recipe as output
    bannedRecipeIDs.forEach(id => {
        event.remove({id: id}); 
        // FIXME: these parts aren't working
        //event.remove({input: id});
        //event.remove({output: id});
    });
});
