import { ShapeHeadDefault } from './components/shapes/head/ShapeHeadDefault';
import { ShapeBodyDefault } from './components/shapes/body/ShapeBodyDefault';
import { ShapeEyeDefault } from './components/shapes/eyes/ShapeEyeDefault';
import { ShapeMouthDefault } from './components/shapes/mouth/ShapeMouthDefault';
import { ShapeGlasseDefault } from './components/shapes/glasses/ShapeGlasseDefault';

export const categories = [
    {
        name: "body",
        layer: "body",
        icon: "",
        assets: []
    },
    {
        name: "head",
        layer: "head",
        icon: "",
        assets: []
    },
    {
        name: "eyes",
        layer: "eye",
        icon: "",
        assets: []
    },
    {
        name: "mouths",
        layer: "mouth",
        icon: "",
        assets: []
    },
    {
        name: "glasses",
        layer: "glasse",
        icon: "",
        assets: []
    }
];

export const default_assets = {
    'body': ShapeBodyDefault,
    'head': ShapeHeadDefault,
    'eye': ShapeEyeDefault,
    'mouth': ShapeMouthDefault,
    'glasse': ShapeGlasseDefault,
}