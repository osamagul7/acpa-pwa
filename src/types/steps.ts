export interface Step2Props {
  toggleCheckbox: (index: number) => void;
}

export interface STEP1Props {
  toggleCheckbox: (index: number) => void;
  pipeLists: {
    id: number;
    name: string;
    description: string;
    image: string;
    checkStatus: boolean;
  }[];
}
