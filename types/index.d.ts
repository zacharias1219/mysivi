// ====== USER PARAMS
declare type CreateUserParams = {
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    profilePicture: string;
  };
  
  declare type UpdateUserParams = {
    firstName: string;
    lastName: string;
    username: string;
    profilePicture: string;
  };