// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

ItemEvents.tooltip(event => {
  // Add tooltip to all of these items
  event.add('randomium:randomium_ore', 'Mine me only with silent gear pickaxe tier iron or over!')
  event.add('minecraft:bone_meal','Can be obtained by compost stuff on a composter')
  })