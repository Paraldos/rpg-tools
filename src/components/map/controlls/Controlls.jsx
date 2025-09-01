import "./controlls.css";
import {
  shuffleArray,
  getRandomArrayItem,
  getWeightedRandomArrayItem,
} from "../../../utils/array";
import { rollDice } from "../../../utils/random";
import {
  SOCIETY_TAGS,
  WORLD_TYPES,
  GENERAL_TAGS,
} from "../../../data/worldTags";

export default function Controlls() {
  const starNames = [
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
    "Bert",
    "Berta",
  ];

  // --- Generators ---
  const getBlackHole = () => {
    return {
      type: "Black Hole",
    };
  };

  const getEmpty = () => {
    return {
      type: "Empty",
    };
  };

  const getWorld = () => {
    const world = { type: "World", tags: [] };
    world.tags.push(getWeightedRandomArrayItem(WORLD_TYPES));
    world.tags.push(getWeightedRandomArrayItem(SOCIETY_TAGS));
    world.tags.push(getRandomArrayItem(GENERAL_TAGS));
    return world;
  };

  const getStar = () => {
    const star = {
      type: "Star",
      worlds: [],
      title: getRandomArrayItem(starNames),
    };
    const amountOfWorlds = rollDice(3);
    for (let i = 0; i < amountOfWorlds; i++) {
      star.worlds.push(getWorld());
    }
    return star;
  };

  const handleNew = () => {
    let stellarObjects = [];
    const amountOfFields = 80;
    const amountOfStars = Math.round(amountOfFields / 4);
    const amountOfBlackHoles = Math.round(amountOfFields / 20);

    for (let i = 0; i < amountOfBlackHoles; i++) {
      stellarObjects.push(getBlackHole());
    }

    for (let i = 0; i < amountOfStars; i++) {
      stellarObjects.push(getStar());
    }

    while (stellarObjects.length < amountOfFields) {
      stellarObjects.push(getEmpty());
    }

    stellarObjects = shuffleArray(stellarObjects);

    console.log(stellarObjects);
  };

  return (
    <div className="controlls">
      <button>Load / Save</button>
      <button onClick={handleNew}>New</button>
      <button>Export</button>
      <button>Import</button>
    </div>
  );
}
