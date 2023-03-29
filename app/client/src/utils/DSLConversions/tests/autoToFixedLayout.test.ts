import type { CanvasWidgetsReduxState } from "reducers/entityReducers/canvasWidgetsReducer";
import { convertNormalizedDSLToFixed } from "../autoToFixedLayout";

describe("test Auto to Fixed Conversion methods", () => {
  const autoLayoutWidgets = {
    "0": {
      widgetName: "MainContainer",
      topRow: 0,
      bottomRow: 870,
      type: "CANVAS_WIDGET",
      canExtend: true,
      minHeight: 870,
      useAutoLayout: true,
      leftColumn: 0,
      children: [
        "3rp273r2sw",
        "jej39vfb46",
        "qwdu5rldu2",
        "hrduq6qeyy",
        "y8kkqs25a5",
        "p6em4n29z7",
        "jxob7zdb75",
        "n123229jea",
        "fhh2k44omh",
        "m9mrywyvpj",
        "8o21a70kqn",
      ],
      positioning: "vertical",
      direction: "Vertical",
      rightColumn: 4896,
      detachFromLayout: true,
      widgetId: "0",
      flexLayers: [
        {
          children: [
            {
              id: "3rp273r2sw",
              align: "center",
            },
          ],
        },
        {
          children: [
            {
              id: "jej39vfb46",
              align: "start",
            },
            {
              id: "qwdu5rldu2",
              align: "start",
            },
            {
              id: "hrduq6qeyy",
              align: "start",
            },
            {
              id: "y8kkqs25a5",
              align: "start",
            },
          ],
        },
        {
          children: [
            {
              id: "p6em4n29z7",
              align: "start",
            },
            {
              id: "jxob7zdb75",
              align: "center",
            },
          ],
        },
        {
          children: [
            {
              id: "n123229jea",
              align: "start",
            },
            {
              id: "fhh2k44omh",
              align: "end",
            },
          ],
        },
        {
          children: [
            {
              id: "m9mrywyvpj",
              align: "start",
            },
          ],
        },
        {
          children: [
            {
              id: "8o21a70kqn",
              align: "start",
            },
          ],
        },
      ],
      responsiveBehavior: "fill",
    },
    "3rp273r2sw": {
      widgetName: "Button3",
      topRow: 0,
      bottomRow: 4,
      parentRowSpace: 10,
      type: "BUTTON_WIDGET",
      leftColumn: 24,
      rightColumn: 40,
      widgetId: "3rp273r2sw",
      minWidth: 120,
      parentId: "0",
      responsiveBehavior: "hug",
      alignment: "center",
      flexVerticalAlignment: "start",
    },
    jej39vfb46: {
      widgetName: "Button15",
      topRow: 4,
      bottomRow: 8,
      type: "BUTTON_WIDGET",
      leftColumn: 0,
      rightColumn: 16,
      widgetId: "jej39vfb46",
      minWidth: 120,
      responsiveBehavior: "hug",
      alignment: "start",
      flexVerticalAlignment: "start",
    },
    qwdu5rldu2: {
      widgetName: "Button5",
      topRow: 4,
      bottomRow: 8,
      parentRowSpace: 10,
      type: "BUTTON_WIDGET",
      leftColumn: 16,
      rightColumn: 32,
      widgetId: "qwdu5rldu2",
      minWidth: 120,
      parentId: "0",
      responsiveBehavior: "hug",
      alignment: "start",
      flexVerticalAlignment: "start",
    },
    hrduq6qeyy: {
      widgetName: "Input2",
      topRow: 4,
      bottomRow: 11,
      type: "INPUT_WIDGET_V2",
      leftColumn: 32,
      rightColumn: 51,
      widgetId: "hrduq6qeyy",
      minWidth: 450,
      parentId: "0",
      responsiveBehavior: "fill",
      alignment: "start",
      flexVerticalAlignment: "start",
    },
    y8kkqs25a5: {
      widgetName: "Button4",
      topRow: 4,
      bottomRow: 8,
      type: "BUTTON_WIDGET",
      leftColumn: 51,
      rightColumn: 64,
      isDefaultClickDisabled: true,
      widgetId: "y8kkqs25a5",
      minWidth: 120,
      parentId: "0",
      responsiveBehavior: "hug",
      alignment: "start",
      flexVerticalAlignment: "start",
    },
    p6em4n29z7: {
      widgetName: "Button6",
      topRow: 11,
      bottomRow: 15,
      type: "BUTTON_WIDGET",
      leftColumn: 0,
      rightColumn: 17.375565610859727,
      widgetId: "p6em4n29z7",
      minWidth: 120,
      parentId: "0",
      responsiveBehavior: "hug",
      alignment: "start",
      flexVerticalAlignment: "start",
    },
    jxob7zdb75: {
      widgetName: "Button7",
      topRow: 11,
      bottomRow: 15,
      type: "BUTTON_WIDGET",
      leftColumn: 24,
      rightColumn: 40,
      widgetId: "jxob7zdb75",
      minWidth: 120,
      responsiveBehavior: "hug",
      alignment: "center",
      flexVerticalAlignment: "start",
    },
    n123229jea: {
      widgetName: "Button9",
      topRow: 15,
      bottomRow: 19,
      parentRowSpace: 10,
      type: "BUTTON_WIDGET",
      leftColumn: 0,
      rightColumn: 17.375565610859727,
      widgetId: "n123229jea",
      minWidth: 120,
      parentId: "0",
      responsiveBehavior: "hug",
      alignment: "start",
      flexVerticalAlignment: "start",
    },
    fhh2k44omh: {
      widgetName: "Button8",
      topRow: 15,
      bottomRow: 19,
      type: "BUTTON_WIDGET",
      leftColumn: 48,
      rightColumn: 64,
      widgetId: "fhh2k44omh",
      minWidth: 120,
      parentId: "0",
      responsiveBehavior: "hug",
      alignment: "end",
      flexVerticalAlignment: "start",
    },
    "5c6gd8ynfa": {
      widgetName: "Button10",
      topRow: 0,
      bottomRow: 4,
      type: "BUTTON_WIDGET",
      leftColumn: 0,
      rightColumn: 17.375565610859727,
      widgetId: "5c6gd8ynfa",
      minWidth: 120,
      parentId: "vv54unn046",
      responsiveBehavior: "hug",
      alignment: "start",
      flexVerticalAlignment: "start",
    },
    wixla6nh38: {
      widgetName: "Input1",
      topRow: 0,
      bottomRow: 7,
      type: "INPUT_WIDGET_V2",
      leftColumn: 17.375565610859727,
      rightColumn: 64,
      widgetId: "wixla6nh38",
      minWidth: 450,
      parentId: "vv54unn046",
      responsiveBehavior: "fill",
      alignment: "start",
      flexVerticalAlignment: "start",
    },
    krrqtqc1o3: {
      widgetName: "Image1",
      topRow: 7,
      bottomRow: 19,
      type: "IMAGE_WIDGET",
      leftColumn: 0,
      rightColumn: 15,
      widgetId: "krrqtqc1o3",
      minWidth: 450,
      parentId: "vv54unn046",
      responsiveBehavior: "hug",
      alignment: "start",
      flexVerticalAlignment: "start",
    },
    "0cb5t22zd2": {
      widgetName: "Button11",
      topRow: 0,
      bottomRow: 4,
      type: "BUTTON_WIDGET",
      leftColumn: 24,
      rightColumn: 40,
      widgetId: "0cb5t22zd2",
      minWidth: 120,
      parentId: "mw6t1nvt67",
      responsiveBehavior: "hug",
      alignment: "center",
      flexVerticalAlignment: "start",
    },
    u0cd188upj: {
      widgetName: "Button12",
      topRow: 4,
      bottomRow: 8,
      type: "BUTTON_WIDGET",
      leftColumn: 0,
      rightColumn: 17.375565610859727,
      widgetId: "u0cd188upj",
      minWidth: 120,
      parentId: "mw6t1nvt67",
      responsiveBehavior: "hug",
      alignment: "start",
      flexVerticalAlignment: "start",
    },
    mw6t1nvt67: {
      mobileBottomRow: 100,
      widgetName: "Canvas2",
      topRow: 0,
      bottomRow: 100,
      type: "CANVAS_WIDGET",
      minHeight: 100,
      mobileRightColumn: 64,
      useAutoLayout: true,
      leftColumn: 0,
      children: ["0cb5t22zd2", "u0cd188upj"],
      positioning: "vertical",
      rightColumn: 64,
      widgetId: "mw6t1nvt67",
      minWidth: 450,
      parentId: "eh5p39ko9z",
      mobileTopRow: 0,
      mobileLeftColumn: 0,
      flexLayers: [
        {
          children: [
            {
              id: "0cb5t22zd2",
              align: "center",
            },
          ],
        },
        {
          children: [
            {
              id: "u0cd188upj",
              align: "start",
            },
          ],
        },
      ],
      responsiveBehavior: "fill",
    },
    eh5p39ko9z: {
      widgetName: "Container2",
      topRow: 7,
      bottomRow: 17,
      type: "CONTAINER_WIDGET",
      leftColumn: 15,
      children: ["mw6t1nvt67"],
      rightColumn: 64,
      widgetId: "eh5p39ko9z",
      minWidth: 450,
      parentId: "vv54unn046",
      responsiveBehavior: "fill",
      alignment: "start",
      flexVerticalAlignment: "start",
    },
    vv54unn046: {
      mobileBottomRow: 350,
      widgetName: "Canvas1",
      topRow: 0,
      bottomRow: 210,
      type: "CANVAS_WIDGET",
      minHeight: 210,
      mobileRightColumn: 64,
      useAutoLayout: true,
      leftColumn: 0,
      children: ["5c6gd8ynfa", "wixla6nh38", "krrqtqc1o3", "eh5p39ko9z"],
      positioning: "vertical",
      rightColumn: 64,
      widgetId: "vv54unn046",
      minWidth: 450,
      parentId: "m9mrywyvpj",
      mobileTopRow: 0,
      mobileLeftColumn: 0,
      flexLayers: [
        {
          children: [
            {
              id: "5c6gd8ynfa",
              align: "start",
            },
            {
              id: "wixla6nh38",
              align: "start",
            },
          ],
        },
        {
          children: [
            {
              id: "krrqtqc1o3",
              align: "start",
            },
            {
              id: "eh5p39ko9z",
              align: "start",
            },
          ],
        },
      ],
      responsiveBehavior: "fill",
    },
    m9mrywyvpj: {
      widgetName: "Container1",
      topRow: 19,
      bottomRow: 40,
      type: "CONTAINER_WIDGET",
      leftColumn: 0,
      children: ["vv54unn046"],
      rightColumn: 64,
      widgetId: "m9mrywyvpj",
      minWidth: 450,
      parentId: "0",
      responsiveBehavior: "fill",
      alignment: "start",
      flexVerticalAlignment: "start",
    },
    fjt4m0ern5: {
      widgetName: "Text1",
      topRow: 1,
      bottomRow: 5,
      type: "TEXT_WIDGET",
      leftColumn: 1.5,
      rightColumn: 25.5,
      widgetId: "fjt4m0ern5",
      minWidth: 450,
      parentId: "007w6lokqp",
      responsiveBehavior: "fill",
    },
    nepom5s2di: {
      widgetName: "Button13",
      topRow: 33,
      bottomRow: 37,
      type: "BUTTON_WIDGET",
      leftColumn: 46,
      rightColumn: 62,
      widgetId: "nepom5s2di",
      minWidth: 120,
      parentId: "007w6lokqp",
      responsiveBehavior: "hug",
    },
    zencnl8sel: {
      widgetName: "Button14",
      topRow: 33,
      bottomRow: 37,
      type: "BUTTON_WIDGET",
      leftColumn: 30,
      rightColumn: 46,
      widgetId: "zencnl8sel",
      minWidth: 120,
      parentId: "007w6lokqp",
      responsiveBehavior: "hug",
    },
    "007w6lokqp": {
      mobileBottomRow: 390,
      widgetName: "Canvas3",
      topRow: 0,
      bottomRow: 390,
      type: "CANVAS_WIDGET",
      minHeight: 390,
      mobileRightColumn: 64,
      leftColumn: 0,
      children: ["fjt4m0ern5", "nepom5s2di", "zencnl8sel"],
      rightColumn: 300.75,
      widgetId: "007w6lokqp",
      minWidth: 450,
      parentId: "8o21a70kqn",
      mobileTopRow: 0,
      responsiveBehavior: "fill",
      mobileLeftColumn: 0,
      flexLayers: [],
    },
    "8o21a70kqn": {
      widgetName: "Form1",
      topRow: 40,
      bottomRow: 79,
      type: "FORM_WIDGET",
      leftColumn: 0,
      children: ["007w6lokqp"],
      positioning: "fixed",
      rightColumn: 64,
      widgetId: "8o21a70kqn",
      minWidth: 450,
      parentId: "0",
      responsiveBehavior: "fill",
      alignment: "start",
      flexVerticalAlignment: "start",
    },
  } as unknown as CanvasWidgetsReduxState;

  const fixedLayoutWidgets = {
    "0": {
      bottomRow: 870,
      canExtend: true,
      children: [
        "3rp273r2sw",
        "jej39vfb46",
        "qwdu5rldu2",
        "hrduq6qeyy",
        "y8kkqs25a5",
        "p6em4n29z7",
        "jxob7zdb75",
        "n123229jea",
        "fhh2k44omh",
        "m9mrywyvpj",
        "8o21a70kqn",
      ],
      detachFromLayout: true,
      direction: "Vertical",
      leftColumn: 0,
      minHeight: 870,
      positioning: "fixed",
      rightColumn: 4896,
      topRow: 0,
      type: "CANVAS_WIDGET",
      useAutoLayout: false,
      widgetId: "0",
      widgetName: "MainContainer",
    },
    "007w6lokqp": {
      bottomRow: 390,
      children: ["fjt4m0ern5", "nepom5s2di", "zencnl8sel"],
      flexLayers: [],
      leftColumn: 0,
      minHeight: 390,
      minWidth: 450,
      mobileBottomRow: 390,
      mobileLeftColumn: 0,
      mobileRightColumn: 64,
      mobileTopRow: 0,
      parentId: "8o21a70kqn",
      responsiveBehavior: "fill",
      rightColumn: 300.75,
      topRow: 0,
      type: "CANVAS_WIDGET",
      widgetId: "007w6lokqp",
      widgetName: "Canvas3",
    },
    "0cb5t22zd2": {
      bottomRow: 4,
      leftColumn: 24,
      minWidth: 120,
      parentId: "mw6t1nvt67",
      rightColumn: 40,
      topRow: 0,
      type: "BUTTON_WIDGET",
      widgetId: "0cb5t22zd2",
      widgetName: "Button11",
    },
    "3rp273r2sw": {
      bottomRow: 4,
      leftColumn: 24,
      minWidth: 120,
      parentId: "0",
      parentRowSpace: 10,
      rightColumn: 40,
      topRow: 0,
      type: "BUTTON_WIDGET",
      widgetId: "3rp273r2sw",
      widgetName: "Button3",
    },
    "5c6gd8ynfa": {
      bottomRow: 4,
      leftColumn: 0,
      minWidth: 120,
      parentId: "vv54unn046",
      rightColumn: 17.375565610859727,
      topRow: 0,
      type: "BUTTON_WIDGET",
      widgetId: "5c6gd8ynfa",
      widgetName: "Button10",
    },
    "8o21a70kqn": {
      bottomRow: 621,
      children: ["007w6lokqp"],
      leftColumn: 0,
      minWidth: 450,
      parentId: "0",
      positioning: "fixed",
      rightColumn: 64,
      topRow: 230,
      type: "FORM_WIDGET",
      widgetId: "8o21a70kqn",
      widgetName: "Form1",
    },
    eh5p39ko9z: {
      bottomRow: 108,
      children: ["mw6t1nvt67"],
      leftColumn: 15,
      minWidth: 450,
      parentId: "vv54unn046",
      rightColumn: 64,
      topRow: 7,
      type: "CONTAINER_WIDGET",
      widgetId: "eh5p39ko9z",
      widgetName: "Container2",
    },
    fhh2k44omh: {
      bottomRow: 19,
      leftColumn: 48,
      minWidth: 120,
      parentId: "0",
      rightColumn: 64,
      topRow: 15,
      type: "BUTTON_WIDGET",
      widgetId: "fhh2k44omh",
      widgetName: "Button8",
    },
    fjt4m0ern5: {
      bottomRow: 5,
      leftColumn: 1.5,
      minWidth: 450,
      parentId: "007w6lokqp",
      rightColumn: 25.5,
      topRow: 1,
      type: "TEXT_WIDGET",
      widgetId: "fjt4m0ern5",
      widgetName: "Text1",
    },
    hrduq6qeyy: {
      bottomRow: 11,
      leftColumn: 32,
      minWidth: 450,
      parentId: "0",
      rightColumn: 51,
      topRow: 4,
      type: "INPUT_WIDGET_V2",
      widgetId: "hrduq6qeyy",
      widgetName: "Input2",
    },
    jej39vfb46: {
      bottomRow: 8,
      leftColumn: 0,
      minWidth: 120,
      rightColumn: 16,
      topRow: 4,
      type: "BUTTON_WIDGET",
      widgetId: "jej39vfb46",
      widgetName: "Button15",
    },
    jxob7zdb75: {
      bottomRow: 15,
      leftColumn: 24,
      minWidth: 120,
      rightColumn: 40,
      topRow: 11,
      type: "BUTTON_WIDGET",
      widgetId: "jxob7zdb75",
      widgetName: "Button7",
    },
    krrqtqc1o3: {
      bottomRow: 19,
      leftColumn: 0,
      minWidth: 450,
      parentId: "vv54unn046",
      rightColumn: 15,
      topRow: 7,
      type: "IMAGE_WIDGET",
      widgetId: "krrqtqc1o3",
      widgetName: "Image1",
    },
    m9mrywyvpj: {
      bottomRow: 230,
      children: ["vv54unn046"],
      leftColumn: 0,
      minWidth: 450,
      parentId: "0",
      rightColumn: 64,
      topRow: 19,
      type: "CONTAINER_WIDGET",
      widgetId: "m9mrywyvpj",
      widgetName: "Container1",
    },
    mw6t1nvt67: {
      bottomRow: 100,
      children: ["0cb5t22zd2", "u0cd188upj"],
      leftColumn: 0,
      minHeight: 100,
      minWidth: 450,
      mobileBottomRow: 100,
      mobileLeftColumn: 0,
      mobileRightColumn: 64,
      mobileTopRow: 0,
      parentId: "eh5p39ko9z",
      positioning: "fixed",
      rightColumn: 64,
      topRow: 0,
      type: "CANVAS_WIDGET",
      useAutoLayout: false,
      widgetId: "mw6t1nvt67",
      widgetName: "Canvas2",
    },
    n123229jea: {
      bottomRow: 19,
      leftColumn: 0,
      minWidth: 120,
      parentId: "0",
      parentRowSpace: 10,
      rightColumn: 17.375565610859727,
      topRow: 15,
      type: "BUTTON_WIDGET",
      widgetId: "n123229jea",
      widgetName: "Button9",
    },
    nepom5s2di: {
      bottomRow: 37,
      leftColumn: 46,
      minWidth: 120,
      parentId: "007w6lokqp",
      rightColumn: 62,
      topRow: 33,
      type: "BUTTON_WIDGET",
      widgetId: "nepom5s2di",
      widgetName: "Button13",
    },
    p6em4n29z7: {
      bottomRow: 15,
      leftColumn: 0,
      minWidth: 120,
      parentId: "0",
      rightColumn: 17.375565610859727,
      topRow: 11,
      type: "BUTTON_WIDGET",
      widgetId: "p6em4n29z7",
      widgetName: "Button6",
    },
    qwdu5rldu2: {
      bottomRow: 8,
      leftColumn: 16,
      minWidth: 120,
      parentId: "0",
      parentRowSpace: 10,
      rightColumn: 32,
      topRow: 4,
      type: "BUTTON_WIDGET",
      widgetId: "qwdu5rldu2",
      widgetName: "Button5",
    },
    u0cd188upj: {
      bottomRow: 8,
      leftColumn: 0,
      minWidth: 120,
      parentId: "mw6t1nvt67",
      rightColumn: 17.375565610859727,
      topRow: 4,
      type: "BUTTON_WIDGET",
      widgetId: "u0cd188upj",
      widgetName: "Button12",
    },
    vv54unn046: {
      bottomRow: 210,
      children: ["5c6gd8ynfa", "wixla6nh38", "krrqtqc1o3", "eh5p39ko9z"],
      leftColumn: 0,
      minHeight: 210,
      minWidth: 450,
      mobileBottomRow: 350,
      mobileLeftColumn: 0,
      mobileRightColumn: 64,
      mobileTopRow: 0,
      parentId: "m9mrywyvpj",
      positioning: "fixed",
      rightColumn: 64,
      topRow: 0,
      type: "CANVAS_WIDGET",
      useAutoLayout: false,
      widgetId: "vv54unn046",
      widgetName: "Canvas1",
    },
    wixla6nh38: {
      bottomRow: 7,
      leftColumn: 17.375565610859727,
      minWidth: 450,
      parentId: "vv54unn046",
      rightColumn: 64,
      topRow: 0,
      type: "INPUT_WIDGET_V2",
      widgetId: "wixla6nh38",
      widgetName: "Input1",
    },
    y8kkqs25a5: {
      bottomRow: 8,
      isDefaultClickDisabled: true,
      leftColumn: 51,
      minWidth: 120,
      parentId: "0",
      rightColumn: 64,
      topRow: 4,
      type: "BUTTON_WIDGET",
      widgetId: "y8kkqs25a5",
      widgetName: "Button4",
    },
    zencnl8sel: {
      bottomRow: 37,
      leftColumn: 30,
      minWidth: 120,
      parentId: "007w6lokqp",
      rightColumn: 46,
      topRow: 33,
      type: "BUTTON_WIDGET",
      widgetId: "zencnl8sel",
      widgetName: "Button14",
    },
  };

  const fixedLayoutMobileWidgets = {
    "0": {
      bottomRow: 870,
      canExtend: true,
      children: [
        "3rp273r2sw",
        "jej39vfb46",
        "qwdu5rldu2",
        "hrduq6qeyy",
        "y8kkqs25a5",
        "p6em4n29z7",
        "jxob7zdb75",
        "n123229jea",
        "fhh2k44omh",
        "m9mrywyvpj",
        "8o21a70kqn",
      ],
      detachFromLayout: true,
      direction: "Vertical",
      leftColumn: 0,
      minHeight: 870,
      positioning: "fixed",
      rightColumn: 4896,
      topRow: 0,
      type: "CANVAS_WIDGET",
      useAutoLayout: false,
      widgetId: "0",
      widgetName: "MainContainer",
    },
    "007w6lokqp": {
      bottomRow: 390,
      children: ["fjt4m0ern5", "nepom5s2di", "zencnl8sel"],
      flexLayers: [],
      leftColumn: 0,
      minHeight: 390,
      minWidth: 450,
      mobileBottomRow: 390,
      mobileLeftColumn: 0,
      mobileRightColumn: 64,
      mobileTopRow: 0,
      parentId: "8o21a70kqn",
      responsiveBehavior: "fill",
      rightColumn: 300.75,
      topRow: 0,
      type: "CANVAS_WIDGET",
      widgetId: "007w6lokqp",
      widgetName: "Canvas3",
    },
    "0cb5t22zd2": {
      bottomRow: 4,
      leftColumn: 24,
      minWidth: 120,
      parentId: "mw6t1nvt67",
      rightColumn: 40,
      topRow: 0,
      type: "BUTTON_WIDGET",
      widgetId: "0cb5t22zd2",
      widgetName: "Button11",
    },
    "3rp273r2sw": {
      bottomRow: 4,
      leftColumn: 24,
      minWidth: 120,
      parentId: "0",
      parentRowSpace: 10,
      rightColumn: 40,
      topRow: 0,
      type: "BUTTON_WIDGET",
      widgetId: "3rp273r2sw",
      widgetName: "Button3",
    },
    "5c6gd8ynfa": {
      bottomRow: 4,
      leftColumn: 0,
      minWidth: 120,
      parentId: "vv54unn046",
      rightColumn: 17.375565610859727,
      topRow: 0,
      type: "BUTTON_WIDGET",
      widgetId: "5c6gd8ynfa",
      widgetName: "Button10",
    },
    "8o21a70kqn": {
      bottomRow: 769,
      children: ["007w6lokqp"],
      leftColumn: 0,
      minWidth: 450,
      parentId: "0",
      positioning: "fixed",
      rightColumn: 64,
      topRow: 378,
      type: "FORM_WIDGET",
      widgetId: "8o21a70kqn",
      widgetName: "Form1",
    },
    eh5p39ko9z: {
      bottomRow: 124,
      children: ["mw6t1nvt67"],
      leftColumn: 0,
      minWidth: 450,
      parentId: "vv54unn046",
      rightColumn: 64,
      topRow: 23,
      type: "CONTAINER_WIDGET",
      widgetId: "eh5p39ko9z",
      widgetName: "Container2",
    },
    fhh2k44omh: {
      bottomRow: 27,
      leftColumn: 48,
      minWidth: 120,
      parentId: "0",
      rightColumn: 64,
      topRow: 23,
      type: "BUTTON_WIDGET",
      widgetId: "fhh2k44omh",
      widgetName: "Button8",
    },
    fjt4m0ern5: {
      bottomRow: 5,
      leftColumn: 1.5,
      minWidth: 450,
      parentId: "007w6lokqp",
      rightColumn: 25.5,
      topRow: 1,
      type: "TEXT_WIDGET",
      widgetId: "fjt4m0ern5",
      widgetName: "Text1",
    },
    hrduq6qeyy: {
      bottomRow: 15,
      leftColumn: 0,
      minWidth: 450,
      parentId: "0",
      rightColumn: 64,
      topRow: 8,
      type: "INPUT_WIDGET_V2",
      widgetId: "hrduq6qeyy",
      widgetName: "Input2",
    },
    jej39vfb46: {
      bottomRow: 8,
      leftColumn: 0,
      minWidth: 120,
      rightColumn: 16,
      topRow: 4,
      type: "BUTTON_WIDGET",
      widgetId: "jej39vfb46",
      widgetName: "Button15",
    },
    jxob7zdb75: {
      bottomRow: 23,
      leftColumn: 24,
      minWidth: 120,
      rightColumn: 40,
      topRow: 19,
      type: "BUTTON_WIDGET",
      widgetId: "jxob7zdb75",
      widgetName: "Button7",
    },
    krrqtqc1o3: {
      bottomRow: 23,
      leftColumn: 0,
      minWidth: 450,
      parentId: "vv54unn046",
      rightColumn: 15,
      topRow: 11,
      type: "IMAGE_WIDGET",
      widgetId: "krrqtqc1o3",
      widgetName: "Image1",
    },
    m9mrywyvpj: {
      bottomRow: 378,
      children: ["vv54unn046"],
      leftColumn: 0,
      minWidth: 450,
      parentId: "0",
      rightColumn: 64,
      topRow: 27,
      type: "CONTAINER_WIDGET",
      widgetId: "m9mrywyvpj",
      widgetName: "Container1",
    },
    mw6t1nvt67: {
      bottomRow: 100,
      children: ["0cb5t22zd2", "u0cd188upj"],
      leftColumn: 0,
      minHeight: 100,
      minWidth: 450,
      mobileBottomRow: 100,
      mobileLeftColumn: 0,
      mobileRightColumn: 64,
      mobileTopRow: 0,
      parentId: "eh5p39ko9z",
      positioning: "fixed",
      rightColumn: 64,
      topRow: 0,
      type: "CANVAS_WIDGET",
      useAutoLayout: false,
      widgetId: "mw6t1nvt67",
      widgetName: "Canvas2",
    },
    n123229jea: {
      bottomRow: 27,
      leftColumn: 0,
      minWidth: 120,
      parentId: "0",
      parentRowSpace: 10,
      rightColumn: 17.375565610859727,
      topRow: 23,
      type: "BUTTON_WIDGET",
      widgetId: "n123229jea",
      widgetName: "Button9",
    },
    nepom5s2di: {
      bottomRow: 37,
      leftColumn: 46,
      minWidth: 120,
      parentId: "007w6lokqp",
      rightColumn: 62,
      topRow: 33,
      type: "BUTTON_WIDGET",
      widgetId: "nepom5s2di",
      widgetName: "Button13",
    },
    p6em4n29z7: {
      bottomRow: 23,
      leftColumn: 0,
      minWidth: 120,
      parentId: "0",
      rightColumn: 17.375565610859727,
      topRow: 19,
      type: "BUTTON_WIDGET",
      widgetId: "p6em4n29z7",
      widgetName: "Button6",
    },
    qwdu5rldu2: {
      bottomRow: 8,
      leftColumn: 16,
      minWidth: 120,
      parentId: "0",
      parentRowSpace: 10,
      rightColumn: 32,
      topRow: 4,
      type: "BUTTON_WIDGET",
      widgetId: "qwdu5rldu2",
      widgetName: "Button5",
    },
    u0cd188upj: {
      bottomRow: 8,
      leftColumn: 0,
      minWidth: 120,
      parentId: "mw6t1nvt67",
      rightColumn: 17.375565610859727,
      topRow: 4,
      type: "BUTTON_WIDGET",
      widgetId: "u0cd188upj",
      widgetName: "Button12",
    },
    vv54unn046: {
      bottomRow: 210,
      children: ["5c6gd8ynfa", "wixla6nh38", "krrqtqc1o3", "eh5p39ko9z"],
      leftColumn: 0,
      minHeight: 210,
      minWidth: 450,
      mobileBottomRow: 350,
      mobileLeftColumn: 0,
      mobileRightColumn: 64,
      mobileTopRow: 0,
      parentId: "m9mrywyvpj",
      positioning: "fixed",
      rightColumn: 64,
      topRow: 0,
      type: "CANVAS_WIDGET",
      useAutoLayout: false,
      widgetId: "vv54unn046",
      widgetName: "Canvas1",
    },
    wixla6nh38: {
      bottomRow: 11,
      leftColumn: 0,
      minWidth: 450,
      parentId: "vv54unn046",
      rightColumn: 64,
      topRow: 4,
      type: "INPUT_WIDGET_V2",
      widgetId: "wixla6nh38",
      widgetName: "Input1",
    },
    y8kkqs25a5: {
      bottomRow: 19,
      isDefaultClickDisabled: true,
      leftColumn: 0,
      minWidth: 120,
      parentId: "0",
      rightColumn: 13,
      topRow: 15,
      type: "BUTTON_WIDGET",
      widgetId: "y8kkqs25a5",
      widgetName: "Button4",
    },
    zencnl8sel: {
      bottomRow: 37,
      leftColumn: 30,
      minWidth: 120,
      parentId: "007w6lokqp",
      rightColumn: 46,
      topRow: 33,
      type: "BUTTON_WIDGET",
      widgetId: "zencnl8sel",
      widgetName: "Button14",
    },
  };

  it("Convert Normalized auto DSL to fixed Normalized DSl without wrap", () => {
    expect(convertNormalizedDSLToFixed(autoLayoutWidgets, "DESKTOP")).toEqual(
      fixedLayoutWidgets,
    );
  });

  it("Convert Normalized auto DSL to fixed Normalized DSl in mobile layout", () => {
    expect(convertNormalizedDSLToFixed(autoLayoutWidgets, "MOBILE")).toEqual(
      fixedLayoutMobileWidgets,
    );
  });
});
