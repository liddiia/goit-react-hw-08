import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

import { useDispatch, useSelector } from "react-redux";

import { apiGetContacts } from "../../redux/contacts/operations"         

import { Toaster, toast } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { selectContacts, selectError, selectIsLoading } from "../../redux/contacts/slice";
import { useEffect } from "react";


const ContactsPage = () => {
 
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  const contacts = useSelector(selectContacts)
 
  useEffect(()=>{ 
  
  dispatch(apiGetContacts())
  .unwrap()
  .then(() => {
    toast.success("The phonebook is loaded!");
  })
  .catch((error)=> {
    toast.error("Failed to download phonebook!");
  });
   },[dispatch]
)
 

  return (
    <div
      style={{

        display: "block",
        flexDirection: "column",
        marginLeft: "20px",
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm  />
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
       <SearchBox   />  
   {contacts === null && contacts.length===0 (<p> There are no contacts in your Phonebook yet! </p>)}
      <ContactList />
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "#4dc31a",
            },
          },
          error: {
            icon: "❌",
            style: {
              background: "#c86b62",
            },
          },
        }}
      />
    </div>
  );
};

export default ContactsPage;