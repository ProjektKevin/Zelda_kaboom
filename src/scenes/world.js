import { generatePlayerComponents } from "../entities/player.js";
import { coloriseBackground, drawTiles, fetchMapData } from "../utils/utils.js";

export default async function world(k) {
    coloriseBackground(k, 76, 170, 255);
    const mapData = await fetchMapData("./assets/maps/world.json");
    console.log(mapData);

    const map = k.add([k.pos(0, 0)]);

    const entities = {
        player: null,
        slimes: [],

    }

    const layers = mapData.layers;
    for(const layer of layers) {
        if (layer.name === "Boundries") {
            // TODO
            continue;
        }

        if(layer.name === "SpawnPoints") {
            for(const object of layer.objects) {
                if(object.name === "player") {
                    entities.player = k.add(
                        generatePlayerComponents(k, k.vec2(object.x, object.y))
                    );
                    continue;
                }
            }
        }

        drawTiles(k, map, layer, mapData.tileheight, mapData.tilewidth);

    }

    k.camScale();
}  

