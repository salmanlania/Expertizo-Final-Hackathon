'use client'
import Navbar from "./navbar/Navbar";
import Nav from "./navbar/Nav";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { IoImagesSharp } from "react-icons/io5";
import { postAd, getAds } from "./config/firebase";

export default function post() {
  const [user, setUser] = useState("");
  const [ads, setAds] = useState([]);
  const [imgUpload, setImgUpload] = useState(null); // Change to null
  const [caption, setCaption] = useState("");

  const addData = () => {
    postAd(caption, imgUpload);
    setCaption("")
    setImgUpload("")
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
              rows={5}
              placeholder={placeholder}
              style={{ width: '50em' }}
              onChange={(e) => setCaption(e.target.value)}
            ></textarea>
            <div style={{display : "flex"} }>
              <label htmlFor="fileUpload" className="custom-file-upload" style={{fontSize : '48px'}}>
                <IoImagesSharp />
              </label>
              <input
                type="file"
                id="fileUpload"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {imgUpload && (
                <img src={URL.createObjectURL(imgUpload)} alt="Uploaded"
                style={{ maxWidth: '400px', maxHeight: '400px' }}
                />
              )}
              <br />
              <button
                onClick={addData}
                style={{ border: "2px solid black", padding: '4px' , marginLeft : '40rem' }}
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
                <div class="container  mt-5 mb-5" style={{width : '130em'}}>
                  <div class="flex flex-wrap  flex items-center ">
                    <div class="md:w-1/2 pr-4 pl-4">
                      <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                        <div class="flex justify-between p-2 px-3">
                          <div class="flex flex-row items-center"> <img src={user.photoURL} width="50" class="rounded-full" />
                            <div class="flex flex-col ml-2"> <span class="font-bold">{user.displayName}</span>  </div>
                          </div>
                          <div class="flex flex-row mt-1 ellipsis"> <small class="mr-2">20 mins</small> <i class="fa fa-ellipsis-h"></i> </div>
                        </div>
                        <p class="text-justify">{item.caption}</p>
                        <div class="p-2">
                          <img src={item.imageUrl} style={{ maxWidth: '400px', maxHeight: '400px' }} />
                          <hr />
                          <div class="flex justify-between items-center">
                            <div class="flex flex-row icons flex items-center"> <i class="fa fa-heart"></i> <i class="fa fa-smile-o ml-2"></i> </div>
                            <div class="flex flex-row muted-color"> <span>2 comments</span> <span class="ml-2">Share</span> </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
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

