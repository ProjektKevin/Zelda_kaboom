import k from './kaboomContext.js';
import world from './scenes/world.js';

k.loadSprite("assets", './assets/topdownasset.png', {
    sliceX: 39,
    sliceY: 31,
    anims: {
        'player-idle-down': 936,

    },
});

const scenes = {
    world, // same as world: world() {}
}

for (const sceneName in scenes) {
    k.scene(sceneName, () => scenes[sceneName](k));
}

k.go('world');