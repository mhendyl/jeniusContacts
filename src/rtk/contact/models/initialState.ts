export interface ContactInterface {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}

export interface ContactDetailsInterface {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}

export interface ContactInitialInterface {
  isLoading: boolean;
  contact: ContactInterface[] | null;
  error: string;
  contactDetails: ContactDetailsInterface | any;
  deleteContactDetails: boolean;
  createNewContact: boolean;
}

export const contactInitialState: ContactInitialInterface = {
  isLoading: false,
  contact: null,
  contactDetails: null,
  deleteContactDetails: true,
  createNewContact: false,
  error: '',
};
