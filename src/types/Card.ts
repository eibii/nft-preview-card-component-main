export interface Card {
  image: string;
  title: string;
  description: string;
  info: {
    value: string;
    date: string;
  };
  user: {
    avatar: string;
    name: string;
  };
}
