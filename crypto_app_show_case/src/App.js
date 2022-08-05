import {Download, SectionWraper, Features} from "./components";

 import assets from './assets' 
 import styles from "./styles/Global";

const App = () => {
  return (
    < >
      
      
      <SectionWraper 
      title="Your own store of Nifty NFT. Start selling & Grow"
      description="Buy, collect NFT's exchange and earn crypto. join 25+million people using proNef Marketplace"
      showBtn
      mockupImg={assets.homeHero}
      banner="banner"
      />
      
      <SectionWraper 
      title="Smart User Interface Marketplace"
      description="This is how i design an application for better user interface exprience for more engagement by users, Buttery, Smooth UI interface for only lovely people"
     
      mockupImg={assets.homeCards}
      reverse
      />

      <Features/>

      <SectionWraper 
      title="Deployment"
      description="ProNef is build using expo whoch runs natively on all users devices. you can easily get your app into people's hand " 
      mockupImg={assets.feature}
      reverse
      />
      
      <SectionWraper 
      title="Creative way to showcase the store"
      description="The app contain two screens. The first screen list all the NFTs whole the second one show the details of the specific NFTs"     
      mockupImg={assets.mockup}
      banner='banner02 '
      />


      <Download/>

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={` ${styles.pText} ${styles.whiteText}`}>
          Made by {" "}
          <span>
            Vimal rijal
          </span>
        </p>
      </div>

    </>
  );
}

export default App;
