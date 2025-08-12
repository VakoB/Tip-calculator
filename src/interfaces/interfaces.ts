
export interface CountState {
  count: number;
}

export interface Action {
  operation: string;
}

export interface TipButtonProps {
  number: number;
  activeNumber: number | null;
  onClick: () => void;
}

export interface InputProps {
  label: string;
  icon: string;
  state: number | null;
  error: string | null;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TipResultProps {
  label: string;
  amount: number | null;
}