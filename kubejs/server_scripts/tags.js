// priority: 99

const data = {
    item: {
        flower: []
    }
}

ServerEvents.tags('item', event => {

    event.get('extractinator:rare_drops').add('extractinator:slush')
    event.get('extractinator:rare_drops').add('extractinator:silt')
    event.get('extractinator:rare_drops').add('evilcraft:dark_gem')
    event.get('extractinator:rare_drops').add('hexerei:selenite_shard')
    event.get('extractinator:rare_drops').add('silentgear:raw_crimson_iron')
    event.get('extractinator:rare_drops').add('silentgear:raw_azure_silver')

    let blacklist = []

    event.get('botania:special_flowers').getObjectIds().forEach(item => {
        blacklist.push(item)
    })

    event.get('minecraft:small_flowers').getObjectIds().forEach(item => {
        if (blacklist.indexOf(item) > 0) {
            return;
        } else {
            data.item.flower.push(item)
        }
    })

})

//const result = condition ? valueIfTrue : valueIfFalse;
