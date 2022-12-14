import { useEffect } from "react";
import Footer from "../components/Footer";
import * as React from 'react';
import Pie from "../components/Pie";
import SubmitDonation from "../components/SubmitDonation";


const Donation = () => {

  // 마운트 시 가장 윗쪽 화면이 보이게 하기
  useEffect(()=>{
    window.addEventListener("scroll",function(){
      // glb-header가 있다면 실행할 수 있도록
      if(document.querySelector(".glb-header") != null){ // 비어있는 게 아니라면
          // glb-header 세팅함수 실행
          document.querySelector(".glb-header").style.position = "sticky";
          document.querySelector(".glb-header").style.top = "0";
        }
      })
  },[])

  return (
    <body>
      <div className="donation-background">
        <div className="pie-box">
          <div className="pie-text">
            <h1>Where did the donation go?</h1>
            <h2>Little help makes a big moves.</h2>
          </div>
          <Pie />
        </div>
        <div className="submit-dona-box">
          <h1>Donation Application</h1>
          <SubmitDonation />
        </div>
      <Footer />
      </div>
    </body>
  );
}

export default Donation;
