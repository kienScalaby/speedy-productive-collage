import {
  AspectRatioType,
  CollageTemplateType,
  LockedObjectType,
} from "@/types";
import calculateAspectRatio from "@/utils/aspectRatioHelper";

export const OBJECT_LOCKED: LockedObjectType = {
  lockMovementX: true,
  lockMovementY: true,
  lockRotation: true,
  lockScalingFlip: true,
  lockScalingX: true,
  lockScalingY: true,
  lockSkewingX: true,
  lockSkewingY: true,
  hasControls: false,
  selectable: false,
};

export const COLLAGE_TEMPLATES_4_SQUARE: CollageTemplateType[] = [
  {
    default: true,
    name: "4 squares",
    icon: "data:image/svg+xml,...",
    config: [
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1a1a1a",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.5,
          top: 0,
          left: 0,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2a2a2a",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.5,
          top: 0,
          left: CANVAS_WIDTH * 0.5,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3a3a3a",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.5,
          top: CANVAS_HEIGHT * 0.5,
          left: 0,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#4a4a4a",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.5,
          top: CANVAS_HEIGHT * 0.5,
          left: CANVAS_WIDTH * 0.5,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
    ],
  },
  {
    default: true,
    name: "4 squares uneven vertical",
    icon: "data:image/svg+xml,...",
    config: [
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1b1b1b",
          height: CANVAS_HEIGHT * 0.7,
          width: CANVAS_WIDTH * 0.5,
          top: 0,
          left: 0,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2b2b2b",
          height: CANVAS_HEIGHT * 0.3,
          width: CANVAS_WIDTH * 0.5,
          top: CANVAS_HEIGHT * 0.7,
          left: 0,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3b3b3b",
          height: CANVAS_HEIGHT * 0.7,
          width: CANVAS_WIDTH * 0.5,
          top: 0,
          left: CANVAS_WIDTH * 0.5,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#4b4b4b",
          height: CANVAS_HEIGHT * 0.3,
          width: CANVAS_WIDTH * 0.5,
          top: CANVAS_HEIGHT * 0.7,
          left: CANVAS_WIDTH * 0.5,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
    ],
  },
  {
    default: true,
    name: "4 squares uneven horizontal",
    icon: "data:image/svg+xml,...",
    config: [
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1c1c1c",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.7,
          top: 0,
          left: 0,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2c2c2c",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.3,
          top: 0,
          left: CANVAS_WIDTH * 0.7,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3c3c3c",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.7,
          top: CANVAS_HEIGHT * 0.5,
          left: 0,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#4c4c4c",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.3,
          top: CANVAS_HEIGHT * 0.5,
          left: CANVAS_WIDTH * 0.7,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
    ],
  },
  {
    default: true,
    name: "offset squares",
    icon: "data:image/svg+xml,...",
    config: [
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1f1f1f",
          height: CANVAS_HEIGHT * 0.45,
          width: CANVAS_WIDTH * 0.45,
          top: 0,
          left: 0,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2f2f2f",
          height: CANVAS_HEIGHT * 0.45,
          width: CANVAS_WIDTH * 0.45,
          top: 0,
          left: CANVAS_WIDTH * 0.55,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3f3f3f",
          height: CANVAS_HEIGHT * 0.45,
          width: CANVAS_WIDTH * 0.45,
          top: CANVAS_HEIGHT * 0.55,
          left: CANVAS_WIDTH * 0.05,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#4f4f4f",
          height: CANVAS_HEIGHT * 0.45,
          width: CANVAS_WIDTH * 0.45,
          top: CANVAS_HEIGHT * 0.55,
          left: CANVAS_WIDTH * 0.55,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
    ],
  },
  {
    name: "checkerboard squares",
    icon: "data:image/svg+xml,...",
    config: [
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1e1e1e",
          height: CANVAS_HEIGHT * 0.35,
          width: CANVAS_WIDTH * 0.35,
          top: 0,
          left: 0,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2e2e2e",
          height: CANVAS_HEIGHT * 0.35,
          width: CANVAS_WIDTH * 0.35,
          top: 0,
          left: CANVAS_WIDTH * 0.5,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1e1e1e",
          height: CANVAS_HEIGHT * 0.35,
          width: CANVAS_WIDTH * 0.35,
          top: CANVAS_HEIGHT * 0.5,
          left: CANVAS_WIDTH * 0.5,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2e2e2e",
          height: CANVAS_HEIGHT * 0.35,
          width: CANVAS_WIDTH * 0.35,
          top: CANVAS_HEIGHT * 0.5,
          left: 0,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
    ],
  },
  {
    name: "4 squares diagonal",
    icon: "data:image/svg+xml,...",
    config: [
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#1d1d1d",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.5,
          top: 0,
          left: CANVAS_WIDTH * 0.25,
          angle: 45,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#2d2d2d",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.5,
          top: CANVAS_HEIGHT * 0.25,
          left: CANVAS_WIDTH * 0.75,
          angle: 45,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#3d3d3d",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.5,
          top: CANVAS_HEIGHT * 0.75,
          left: CANVAS_WIDTH * 0.25,
          angle: 45,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
      {
        rectFabric: (CANVAS_HEIGHT, CANVAS_WIDTH) => ({
          fill: "#4d4d4d",
          height: CANVAS_HEIGHT * 0.5,
          width: CANVAS_WIDTH * 0.5,
          top: CANVAS_HEIGHT * 0.25,
          left: 0,
          angle: 45,
          absolutePositioned: true,
          hoverCursor: "pointer",
        }),
        scaleTo: "height",
      },
    ],
  },
];

export const ASPECT_RATIOS: AspectRatioType[] = [
  {
    name: "1:1",
    nickname: "Square",
    getCanvasSize: (WIDTH, HEIGHT) => calculateAspectRatio(2, 2, WIDTH, HEIGHT),
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_6_2)'%3E%3Crect x='0.5' y='0.5' width='29' height='29' stroke='white'/%3E%3Cg clip-path='url(%23clip1_6_2)'%3E%3Cpath d='M9.6014 26.9266H2.97553V20.3007L4.15162 20.3007L4.15162 25.7505L9.6014 25.7505V26.9266Z' fill='white'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2_6_2)'%3E%3Cpath d='M20.3007 2.97552H26.9266V9.60139L25.7505 9.60139L25.7505 4.15161L20.3007 4.15161V2.97552Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_6_2'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1_6_2'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(-1 22.951) rotate(-45)'/%3E%3C/clipPath%3E%3CclipPath id='clip2_6_2'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(30.9021 6.95105) rotate(135)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
  {
    name: "2:1",
    nickname: "FB Post",
    getCanvasSize: (WIDTH, HEIGHT) => calculateAspectRatio(2, 1, WIDTH, HEIGHT),
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_6_14)'%3E%3Crect x='0.5' y='7.5' width='29' height='14' stroke='white'/%3E%3Cg clip-path='url(%23clip1_6_14)'%3E%3Cpath d='M8.6014 19.9266H1.97553V13.3007L3.15162 13.3007L3.15162 18.7505L8.6014 18.7505V19.9266Z' fill='white'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2_6_14)'%3E%3Cpath d='M21.3007 8.97552H27.9266V15.6014L26.7505 15.6014L26.7505 10.1516L21.3007 10.1516V8.97552Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_6_14'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1_6_14'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(-2 15.951) rotate(-45)'/%3E%3C/clipPath%3E%3CclipPath id='clip2_6_14'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(31.9021 12.951) rotate(135)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
  {
    name: "2:3",
    nickname: "Pinterest Pin",
    getCanvasSize: (WIDTH, HEIGHT) => calculateAspectRatio(2, 3, WIDTH, HEIGHT),
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_6_21)'%3E%3Crect x='5.5' y='0.5' width='19' height='29' stroke='white'/%3E%3Cg clip-path='url(%23clip1_6_21)'%3E%3Cpath d='M13.6014 27.9266H6.97553V21.3007L8.15162 21.3007L8.15162 26.7505L13.6014 26.7505V27.9266Z' fill='white'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2_6_21)'%3E%3Cpath d='M16.3007 1.97552H22.9266V8.60139L21.7505 8.60139L21.7505 3.15161L16.3007 3.15161V1.97552Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_6_21'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1_6_21'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(3 23.951) rotate(-45)'/%3E%3C/clipPath%3E%3CclipPath id='clip2_6_21'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(26.9021 5.95105) rotate(135)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
  {
    name: "3:1",
    nickname: "Twitter Header",
    getCanvasSize: (WIDTH, HEIGHT) => calculateAspectRatio(3, 1, WIDTH, HEIGHT),
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_6_28)'%3E%3Crect x='0.5' y='10.5' width='29' height='9' stroke='white'/%3E%3Cg clip-path='url(%23clip1_6_28)'%3E%3Cpath d='M6.54244 18.0284H1.8284V13.3144L2.66514 13.3144L2.66514 17.1917L6.54244 17.1917V18.0284Z' fill='white'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2_6_28)'%3E%3Cpath d='M23.4289 11.8284H28.143V16.5425L27.3062 16.5425L27.3062 12.6652L23.4289 12.6652V11.8284Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_6_28'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1_6_28'%3E%3Crect width='8' height='8' fill='white' transform='translate(-1 15.2) rotate(-45)'/%3E%3C/clipPath%3E%3CclipPath id='clip2_6_28'%3E%3Crect width='8' height='8' fill='white' transform='translate(31.3137 14.6569) rotate(135)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
  {
    name: "3:4",
    nickname: "Twitter Tall Photo",
    getCanvasSize: (WIDTH, HEIGHT) => calculateAspectRatio(3, 4, WIDTH, HEIGHT),
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_7_2)'%3E%3Crect x='4.5' y='0.5' width='21' height='29' stroke='white'/%3E%3Cg clip-path='url(%23clip1_7_2)'%3E%3Cpath d='M12.6014 27.9266H5.97553V21.3007L7.15162 21.3007L7.15162 26.7505L12.6014 26.7505V27.9266Z' fill='white'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2_7_2)'%3E%3Cpath d='M17.3007 1.97552H23.9266V8.60139L22.7505 8.60139L22.7505 3.15161L17.3007 3.15161V1.97552Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_7_2'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1_7_2'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(2 23.951) rotate(-45)'/%3E%3C/clipPath%3E%3CclipPath id='clip2_7_2'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(27.9021 5.95105) rotate(135)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
  {
    name: "4:3",
    nickname: "Standard",
    getCanvasSize: (WIDTH, HEIGHT) => calculateAspectRatio(4, 3, WIDTH, HEIGHT),
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_7_9)'%3E%3Crect x='0.5' y='4.5' width='29' height='22' stroke='white'/%3E%3Cg clip-path='url(%23clip1_7_9)'%3E%3Cpath d='M8.6014 24.9266H1.97553V18.3007L3.15162 18.3007L3.15162 23.7505L8.6014 23.7505V24.9266Z' fill='white'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2_7_9)'%3E%3Cpath d='M21.3007 5.97552H27.9266V12.6014L26.7505 12.6014L26.7505 7.15161L21.3007 7.15161V5.97552Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_7_9'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1_7_9'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(-2 20.951) rotate(-45)'/%3E%3C/clipPath%3E%3CclipPath id='clip2_7_9'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(31.9021 9.95105) rotate(135)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
  {
    name: "9:16",
    nickname: "Stories",
    getCanvasSize: (WIDTH, HEIGHT) =>
      calculateAspectRatio(9, 16, WIDTH, HEIGHT),
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_7_23)'%3E%3Crect x='7.5' y='0.5' width='15.8' height='29' stroke='white'/%3E%3Cg clip-path='url(%23clip1_7_23)'%3E%3Cpath d='M15.6014 27.9266H8.97553V21.3007L10.1516 21.3007L10.1516 26.7505L15.6014 26.7505V27.9266Z' fill='white'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2_7_23)'%3E%3Cpath d='M15.3007 1.97555H21.9266V8.60142L20.7505 8.60142L20.7505 3.15164L15.3007 3.15164V1.97555Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_7_23'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1_7_23'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(5 23.951) rotate(-45)'/%3E%3C/clipPath%3E%3CclipPath id='clip2_7_23'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(25.9021 5.95108) rotate(135)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
  {
    name: "16:9",
    nickname: "Cinematic",
    getCanvasSize: (WIDTH, HEIGHT) =>
      calculateAspectRatio(16, 9, WIDTH, HEIGHT),
    icon: "data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_7_16)'%3E%3Crect x='0.5' y='7.5' width='29' height='16' stroke='white'/%3E%3Cg clip-path='url(%23clip1_7_16)'%3E%3Cpath d='M8.6014 21.9266H1.97553V15.3007L3.15162 15.3007L3.15162 20.7505L8.6014 20.7505V21.9266Z' fill='white'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2_7_16)'%3E%3Cpath d='M21.3007 8.97552H27.9266V15.6014L26.7505 15.6014L26.7505 10.1516L21.3007 10.1516V8.97552Z' fill='white'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_7_16'%3E%3Crect width='30' height='30' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1_7_16'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(-2 17.951) rotate(-45)'/%3E%3C/clipPath%3E%3CclipPath id='clip2_7_16'%3E%3Crect width='11.2445' height='11.2445' fill='white' transform='translate(31.9021 12.951) rotate(135)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A",
  },
];
