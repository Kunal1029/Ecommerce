import OneF from "./oneF";
import sty from "./Footer.module.css";
import TwoF from "./TwoF";
import ThreeF from "./ThreeF";
import "../../App.css";

export default function Footer() {
  return (
    <div style={{backgroundColor:"#2d2d2b"}}>
      <div className={`${sty.container} PageContainer`}>
        <div className={`${sty.headerContent1}`}>
          <div className={`${sty.headerContent}`}>
            <OneF />

            <div className={`${sty.headerContent2}`}>
              <TwoF head5="QUICK SHOP" />
              <TwoF head5="MY ACCOUNT" />
            </div>
          </div>
          <ThreeF />
        </div>
      </div>
    </div>
  );
}
