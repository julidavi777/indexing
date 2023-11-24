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

function SatoshiShow() {
    return (
      <>
       <Header />
      <div className="flex text-white">
        <Sidebar />
        <div className="p-4 ">
          <div className="p-3 grid grid-cols-2  gap-4">
            <Img src={doggy} alt="Perro con btc en la boca" />
            <div>
              <h1 className="font-bold text-4xl mb-3">Doggy Bitcoin</h1>
              <h1 className="font-bold text-3xl	">Animal Punk </h1>
              <DivList
                leftList={["List Price", "Fee", "Total"]}
                rightList={["0.077", "0.077", "0.077"]}
                icon={btc}
              >
                <Button
                  value="Connect your Wallet to buy"
                  color="primary"
                  type="submit"
                  icon={wallet}
                />
              </DivList>
              <DivList
                leftList={[
                  "Inscripcion ID",
                  "Inscripcion Number",
                  "Owner",
                  "Content",
                  "Content Type",
                  "Created",
                  "Genesis Transaction",
                  "Sat Rarity",
                  "Sat Number",
                  "Sat Name",
                  "Sat blockTime",
                  "Sat blockHeight",
                  "Location",
                  "Location blockHeight",
                  "Output",
                ]}
                rightList={[
                  "b5d916155ddc4019...",
                  "401397",
                  "blaoekas8a729aijd",
                  "Link",
                  "image/webp",
                  "10/3/2023, 8:08:31 p. m.",
                  "780221",
                  "COMMON",
                  "304526137100156",
                  "lrqwifgctwf",
                  "14/6/2010, 2:02:02 p. m.",
                  "60905",
                  "b5d916155ddc4019...",
                  "780221",
                  "b5d916155ddc4019...",
                ]}
                icon={Play}
              ></DivList>
            </div>
          </div>
          <DivTable icon={doggy} ></DivTable>
        </div>
      </div>
      </>
    )
  }
  
  export default SatoshiShow