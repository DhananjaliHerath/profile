import React from 'react';
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import axios from 'axios';



function Uploadui() {

    const fileTypes = ["JPG", "PNG","XLSX", "XLS", "CSV", "TXT", "DOCX"];

    const [file, setFile] = useState(null);

    const handleChange = (file) => {
      console.log("chooose from drag and drop: "+file)
      setFile(file);
    };
 
    var jwt = localStorage.getItem("jwt")


    const upoadImage=()=>{
        alert('upoadImage working')
        let formData = new FormData();
        formData.append('file', file);
  
        axios({
          method: "post",
          url: "",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            "Authorization": `Bearer ` + jwt
    
          },
          data: formData,
          mode: "cors",
        }).then((res) => {
          console.log("file Response: ", res)
          if (res.status == 200) {
         
          }
        })
        .catch((err) => {
            console.log(err);
          });
      }






 
 

    return (
        <div>
<div className="h-screen font-sans text-gray-900 bg-gray-300 border-box">
    <div className="flex justify-center w-full mx-auto sm:max-w-lg">

        <div className="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
            <div className="mt-10 mb-10 text-center">
                <h2 className="text-2xl font-semibold mb-2">Upload your files</h2>
             
            </div>
            <form className="mt-8 space-y-3 pb-16 w-full max-w-xs" action="#" method="POST">

                    <div className="grid grid-cols-1 space-y-2">
                                   
                                 <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
                                
<FileUploader handleChange={handleChange} name="file" clssname= " flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"  types={fileTypes} />
                        <div className="flex items-center justify-center w-full">
                        <div className="max-w-xl">

                        <div>
               
                    
                   
                  </div>
 

</div>
                        </div>
                    </div>
                            <p className="text-sm text-gray-300">
                                
                            </p>
                    <div>
                    <button type="button" className='w-full rounded-full  border bg-gray-800 shadow-lg hover:shadow-xl px-6  relative py-3 mt-8  text-white font-bold text-xl'>Submit</button>
                    </div>
        </form>
        </div>
    </div>
</div>



        </div>
    );
}

export default Uploadui;
