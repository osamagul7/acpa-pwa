import type { PipeItem } from "../types/home";

export const INITIAL_PIPES: PipeItem[] = [
  {
    id: 1,
    name: "Rigid Pipe",
    description: "Concrete pipe with superior structural strength",
    image: "/src/assets/images/pipes/RCP.svg",
    checkStatus: true,
  },
  {
    id: 2,
    name: "HDPE Pipe",
    description: "High-density polyethylene flexible pipe",
    image: "/src/assets/images/pipes/HDPE.svg",
    checkStatus: false,
  },
  {
    id: 3,
    name: "PVC Pipe",
    description: "Polyvinyl chloride rigid plastic pipe",
    image: "/src/assets/images/pipes/PVC.svg",
    checkStatus: false,
  },
  {
    id: 4,
    name: "PP Pipe",
    description: "Polypropylene thermoplastic pipe",
    image: "/src/assets/images/pipes/PP.svg",
    checkStatus: false,
  },
];

export type Step2Field =
  | {
      type: "input";
      label: string;
      name: string;
      inputType: "number" | "text";
    }
  | {
      type: "select";
      label: string;
      name: string;
      options: { value: string; label: string }[];
    };

export const step2Fields: Step2Field[] = [
  {
    type: "input",
    label: "Pipe Size (in.)",
    name: "pipe_size",
    inputType: "number",
  },
  {
    type: "input",
    label: "Class",
    name: "pipe_class",
    inputType: "number",
  },
  {
    type: "input",
    label: "Quantity (LF)",
    name: "pipe_quantity",
    inputType: "number",
  },
  {
    type: "input",
    label: "Cost $/LF",
    name: "pipe_cost",
    inputType: "number",
  },
  {
    type: "select",
    label: "Bedding Soil",
    name: "bedding_soil",
    options: [
      { value: "sandy_silt", label: "Sandy Silt" },
      { value: "option2", label: "Two" },
      { value: "option3", label: "Three" },
    ],
  },
  {
    type: "input",
    label: "Cost $/Ton Delivered",
    name: "bedding_cost",
    inputType: "number",
  },
  {
    type: "select",
    label: "Embedment Soil",
    name: "embedment_soil",
    options: [
      { value: "gravelly_sand", label: "Gravelly Sand" },
      { value: "option2", label: "Two" },
      { value: "option3", label: "Three" },
    ],
  },
  {
    type: "input",
    label: "Cost $/Ton Delivered",
    name: "embedment_cost",
    inputType: "number",
  },
];
