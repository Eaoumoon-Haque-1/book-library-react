//   import { ToastContainer, toast } from 'react-toastify';
const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");

  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoreDB = (id) => {
  const storedBookData = getStoredBook();
  if (storedBookData.includes(id)) {
    // alert("Book already Exists");
    // toast("Book already Exists");
    return "exists";
  } else {
    storedBookData.push(id);
    // console.log(storedBookData);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
    return "added";
  }
};
const clearStoredBooks = () => {
  localStorage.removeItem("readList");
};

export { addToStoreDB, getStoredBook, clearStoredBooks };
