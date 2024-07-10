import React from "react";
import Banner from "../Banner";
import { nanoid } from 'nanoid';

function Row3({ rowTitle }) {
  return (
    <div className="mt-14 mx-10">
      <div className="flex items-center text-2xl font-medium mb-0 ml-4 ">
        <p className="text-blue-500 mr-2">Prime</p>
        <span className="text-white">{rowTitle}</span>
      </div>
      <div className="flex overflow-x-scroll space-x-4 py-4 pl-4 flex-shrink-0 ">
       
       
      <div className="flex-shrink-0">
          <Banner
           id={nanoid()}
            img="https://qph.cf2.quoracdn.net/main-qimg-35a084d8eb7c9a1ca5495c1ddd64d947"
            title="Mirzapur"
             discription='absdjlv'
          />
        </div> 
               <div className="flex-shrink-0">
          <Banner
           id={nanoid()}
            img="https://m.media-amazon.com/images/S/pv-target-images/945b698a3eba1c740f2cb42831d2094b0cfda2c80b760f45369dd2b8555aff50.jpg"
            title="Panchayat"
             discription='absdjlv'
          />
        </div>
        <div className="flex-shrink-0">
          <Banner
           id={nanoid()}
            img="https://m.media-amazon.com/images/S/pv-target-images/8dcf9b83e3e0f608ff6e09b7acdafa0b4e1a636973f1349372d2f65b610356fc.jpg"
            title="Sardar Udham"
             discription='absdjlv'
          />
        </div>

       
        <div className="flex-shrink-0">
          <Banner
           id={nanoid()}
            img="https://m.media-amazon.com/images/S/pv-target-images/97da6d6bc6641ade91c5510f6539d10c46f3dbc367ba03718eb4db08ff968e3f.jpg"
            title="Joker"
             discription='absdjlv'
          />
        </div>

        <div className="flex-shrink-0">
          <Banner
           id={nanoid()}
            img="https://m.media-amazon.com/images/S/pv-target-images/300a011b42d3b82f58a4dad5487b28aa0bb4a933fd50fad5d6a1be3f47b7ead9.jpg"
            title="Perfect Days"
             discription='absdjlv'
          />
        </div>
        <div className="flex-shrink-0">
          <Banner
           id={nanoid()}
            img="https://imgs.search.brave.com/GG-Z7viywHiQUbmtaZCSmlQLHGKCd_aZsb77asssV2Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/cHYtdGFyZ2V0LWlt/YWdlcy9lZDUzOGNm/ZDQ2NjI1NmM1YmMy/YzQwMzhkZGFkNDJh/ZjYxODYzNGJlZGRk/NTM3NGVhYWZmNWNk/YWI2YWE2MDVhLmpw/Zw"
            title="The Good Docter"
             discription='absdjlv'
          />
        </div>
        <div className="flex-shrink-0">
          <Banner
           id={nanoid()}
            img="https://m.media-amazon.com/images/S/pv-target-images/ec20deed774ea878d1d8ea95fe31e53adbe180e1a5f9d0e1449179a69cd33630._SX1080_FMjpg_.jpg"
            title="The Big Bang Theory"
             discription='absdjlv'
          />
        </div>
        <div className="flex-shrink-0">
          <Banner
           id={nanoid()}
            img="https://m.media-amazon.com/images/S/pv-target-images/566f045dd3279921703212c677fd59cd8b324cf115c30a801c8939b0b8e556ab.jpg"
            title="The Pursuit of Happyness"
             discription='absdjlv'
          />
        </div>
     
      </div>
    </div>
  );
}

export default Row3;
