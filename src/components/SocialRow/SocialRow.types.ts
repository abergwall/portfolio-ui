type SocialProps = {
  link?: string;
};

export type SocialRowProps = {
  github?: SocialProps;
  linkedIn?: SocialProps;
  email?: SocialProps;
  theme?: "dark" | "light";
  size?: number;
};
