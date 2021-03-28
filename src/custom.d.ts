type UserInfo = {
  username: string;
  password: string;
}

type UserSate = {
  username: string;
  avatar: string;
  token: string;
  id: string;
}

type blogQuery = {
  limit: number;
  page: number;
  title: string;
}

type Blog = {
  id: string;
  title: string;
  description: string;
  content: string;
  updatedAt: string;
  User: {
    avatar: string;
    username: string;
    id?: string;
  };
}

type VForm = Vue & { validate: () => boolean }

type BlogItem = {
  title: string;
  description: string;
  content: string;
  createdAt?: string;
  id?: string;
}
