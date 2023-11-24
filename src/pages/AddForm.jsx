import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Button from "../components/button";
import Img from "../components/Img";
import doggy from "../assets/IMG/doggy.jpg";
import DivList from "../components/DivList";
import DivTable from "../components/DIvTable";
import btc from "../assets/icons/btc.svg";
import wallet from "../assets/icons/wallet.png";
import Play from "../assets/icons/playTriangle.png";

const AddForm = () => {
  return (
    <>
      <Header />
      <div className="flex text-white">
        <Sidebar />
        <div className="p-4 w-full">
          <h1 className="text-center text-3xl text-orange-500 mb-4">Inscribe Your Art</h1>
          <form className="flex flex-col mt-4 text-gray-300">
            <label htmlFor="title" className="mb-2">Title</label>
            <input type="text" id="title" className="mb-4 p-2 border border-purple-600 rounded bg-transparent" />

            <label htmlFor="author" className="mb-2">Author</label>
            <input type="text" id="author" className="mb-4 p-2 border border-purple-600 rounded bg-transparent" />

            <label htmlFor="tags" className="mb-2">Tags</label>
            <input type="text" id="tags" className="mb-4 p-2 border border-purple-600 rounded bg-transparent" />

            <button type="submit" className="mt-4 p-2 bg-purple-600 text-white rounded">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddForm;