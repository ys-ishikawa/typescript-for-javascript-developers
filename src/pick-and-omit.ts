export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// Pick<T, K>
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

// Omit<T, K>
type SmallProfile = Omit<DetailedProfile, 'height'>;

type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit;
