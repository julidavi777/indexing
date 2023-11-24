import Button from "../components/button";
import Sidebar from "../components/Sidebar";
import Img from "../components/Img";
import Header from "../components/Header";
import doggy from "../assets/IMG/doggy.jpg";
import DivList from "../components/DivList";
import DivTable from "../components/DIvTable";
import btc from "../assets/icons/btc.svg";
import wallet from "../assets/icons/wallet.png";
import Play from "../assets/icons/playTriangle.png";
import Banner from "../components/Banner";
import Item from "../components/Item";

function Main() {
  return (
    <>
      <Header />
      <div className="flex text-white">
        <Sidebar />
        <div className="p-4 w-full ">
          <div className="p-3 ">
            <Banner></Banner>

            <div className="flex align-middle mt-5 p-3">
              <div className="pt-3 pe-5">
                <h1 className="font-bold">Recent</h1>
              </div>
              <div className="ps-2">
                <Button value="Collection" type="button" color="secondary" />
              </div>
              <div className="ps-2">
                <Button value="Rare Sats" type="button" color="primary" />
              </div>
            </div>
            <div className="grid grid-cols-4 px-5 py-3 border-b-2 ">
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>{" "}
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>{" "}
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>{" "}
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>{" "}
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>{" "}
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>{" "}
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>{" "}
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>
            </div>
            <div className="flex align-middle mt-5 p-3">
              <div className="pt-3 pe-5">
                <h1 className="font-bold">Trending Topic</h1>
              </div>
              <div className="ps-2">
                <Button value="Collection" type="button" color="secondary" />
              </div>
              <div className="ps-2">
                <Button value="Rare Sats" type="button" color="primary" />
              </div>
            </div>
            <div className="grid grid-cols-4 px-5 py-3 border-b-2 ">
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>
            </div>
            <div className="flex align-middle mt-5 p-3">
              <div className="pt-3 pe-5">
                <h1 className="font-bold">Latest Sales</h1>
              </div>
            </div>
            <div className="grid grid-cols-4 px-5 py-3 border-b-2 ">
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>
              <div className="">
                <Item
                  title="Index Sales"
                  floor="0.00016"
                  total="16.1255"
                  alt="the dog"
                  src={doggy}
                ></Item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
