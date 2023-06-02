import { Account, Client } from "appwrite";

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('6470adba5edad9ee7d1c')

export const getUserData = async () => {
  try {
    const account = new Account(client);
    return account.get();
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message);
  }
};

export const login = async (email, password) => {
  try {
    const account = new Account(client);
    return account.createEmailSession(email, password);
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message);
  }
};

export const logout = async () => {
  try {
    const account = new Account(client);
    return account.deleteSession('current');
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message);
  }
};

export const register = async (email, password) => {
  try {
    const account = new Account(client);
    return account.create('unique()', email, password);
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message);
  }
};

export default client;
