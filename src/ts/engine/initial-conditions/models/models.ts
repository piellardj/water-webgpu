/// <reference types="./obj-type"/>

import Column from "../../../../models/column.obj";
import X from "../../../../models/particles-x.obj";
import XX from "../../../../models/particles-xx.obj";
import XXX from "../../../../models/particles-xxx.obj";
import XXXX from "../../../../models/particles-xxxx.obj";
import XXXXX from "../../../../models/particles-xxxxx.obj";

import Capsules from "../../../../models/capsules.obj";
import Funnel from "../../../../models/funnel.obj";
import Helix from "../../../../models/helix.obj";
import PiercedFloor from "../../../../models/pierced-floor.obj";

const particles = {
    Column,
    X,
    XX,
    XXX,
    XXXX,
    XXXXX,
};

const obstacles = {
    Capsules,
    Funnel,
    Helix,
    PiercedFloor
};

export {
    particles as Particles,
    obstacles as Obstacles,
};

