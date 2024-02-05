const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];
const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

function buildGraph(edges) {
  let graph = Object.create(null);

  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }

  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

roadGraph = buildGraph(roads);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place !== this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place !== p.address);
      return new VillageState(destination, parcels);
    }
  }
}

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length === 0) {
      console.log(`Done in ${turn} turns`);
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);

    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

VillageState.random = function (parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place === address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place === to) return route.concat(place);
      if (!work.some((w) => w.at === place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function findRoute2(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place === to) return route.concat(place);
      if (!work.some((w) => w.at === place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length === 0) {
    let parcel = parcels[0];
    if (parcel.place !== place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

function goalOrientedRobotV2({ place, parcels }, route) {
  if (route.length === 0) {
    let parcel = parcels[0];

    if (parcel.place !== place) {
      let routes = [];

      for (let singleParcel of parcels) {
        routes.push(findRoute(roadGraph, place, singleParcel.place));
      }

      // Sort routes by length
      routes.sort((a, b) => a.length - b.length);

      for (let currentRoute of routes) {
        if (currentRoute.length > 0) {
          return { direction: currentRoute[0], memory: currentRoute.slice(1) };
        }
      }
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }

  return { direction: route[0], memory: route.slice(1) };
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

function routeRobot(state, memory) {
  if (!(memory && memory.length !== 0)) {
    memory = mailRoute;
  }

  return {
    direction: memory.length > 0 ? memory[0] : state.place, // Use state.place as a fallback
    memory: memory.slice(1),
  };
}

let localVillageState = VillageState.random();

function runRandomRobot(localVillageState) {
  return runRobot(localVillageState, randomRobot);
}

function runRouteRobot(localVillageState) {
  return runRobot(localVillageState, routeRobot, { length: 0 });
}

function runGORobot(localVillageState) {
  return runRobot(localVillageState, goalOrientedRobot, mailRoute);
}

function runGOV2Robot(localVillageState) {
  return runRobot(localVillageState, goalOrientedRobotV2, mailRoute);
}

//Measuring a robot

function benchmark(runs, ...runRobots) {
  let robotAverage = {};
  for (let robot of runRobots) {
    robotAverage[`${robot.name}`] = 0;
  }
  for (let runLocalRobot of runRobots) {
    for (let i = 0; i < runs; i++) {
      let localVillageState = VillageState.random();
      robotAverage[`${runLocalRobot.name}`] +=
        runLocalRobot(localVillageState) / runs;
    }

  }
  for(let robot of runRobots){
    console.log(`${robot.name}`+": "+ robotAverage[`${robot.name}`]);
  }
}

benchmark(1000, runGOV2Robot, runGORobot);
