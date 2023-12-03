'use client'
import Navbar from "../navbar/Navbar";
import Nav from "../navbar/Nav";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { IoImagesSharp } from "react-icons/io5";
import { postAd, getAds } from "../config/firebase";
// import Image from 'next/image'

export default function post() {
  const [user, setUser] = useState("");
  const [ads, setAds] = useState([]);
  const [imgUpload, setImgUpload] = useState(null); // Change to null
  const [caption, setCaption] = useState("");

  const addData = () => {
    postAd(caption, imgUpload);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle the file as needed (e.g., upload to server, display preview)
    setImgUpload(file);
  };

  useEffect(() => {
    getData();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const getData = async () => {
    const adsData = await getAds();
    setAds(adsData);
  };

  let placeholder = `What's on your mind ${user.displayName}`;
  console.log("ads------------", ads);
  return (
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <section style={{ display: "flex", justifyContent: 'space-between' }}>


        <Nav />
        <br />
        <header style={{ display: "flex", flexDirection: 'column', }}>
          <div style={{ width: '100em', marginTop: '25px' }}>
            <textarea
              placeholder={placeholder}
              style={{ width: '50em' }}
              onChange={(e) => setCaption(e.target.value)}
            ></textarea>
            <div style={{ display: "flex" }}>
              <label htmlFor="fileUpload" className="custom-file-upload">
                <IoImagesSharp />
              </label>
              <input
                type="file"
                id="fileUpload"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {imgUpload && (
                <img src={URL.createObjectURL(imgUpload)} alt="Uploaded" />
              )}
              <button
                onClick={addData}
                style={{ border: "2px solid black" }}
              >
                Post
              </button>
            </div>
          </div>
<br />
<br />
          <div>
            {ads.map((item, index) => {
              return (
                <div style={{ width: '100em', marginTop : "15px" }} class="max-w-sm rounded overflow-hidden shadow-lg">
                  <div style={{display : 'flex'}}>
                    <img className="img-style1" src={user.photoURL} /> <h1 className="h1-style1">{user.displayName}</h1>
                  </div>
                  <p class="text-gray-700 text-base">
                    {item.caption}
                  </p>
                  <div class="px-6 py-4">
                    <img class="w-full" src={item.imageUrl} />
                  </div>
                </div>
              )
            }

            )}
          </div>
        </header>
      </section>
    </div>
  );
}
