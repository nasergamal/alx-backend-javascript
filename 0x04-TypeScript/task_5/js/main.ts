export interface MajorCredits {
  credits: number;
  _MajorBrand: void;
}

export interface MinorCredits {
  credits: number;
  _MinorBrand: void;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {subject1.credits + subject2.credits}: as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {subject1.credits + subject2.credits} as MinorCredits;
}
