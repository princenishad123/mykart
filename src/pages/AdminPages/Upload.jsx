import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import services from "../../firebase/service";

const Upload = () => {
  const [uploadData, setUploadData] = useState({
    title: "",
    category: "",
    image: "",
    price: "",
    discount: "",
    keyword: [],
    description: "",
  });

  const setKeyword = (e) => {
    setUploadData({
      ...uploadData,
      keyword: [...uploadData.keyword, e.target.innerHTML],
    });
  };

  const [button, setButton] = useState("Upload");
  const handleUplaod = (e) => {
    e.preventDefault();
    if (
      !uploadData.title ||
      !uploadData.image ||
      !uploadData.description ||
      !uploadData.category ||
      !uploadData.price
    ) {
      toast.error("All Field is Required", {
        theme: "colored",
      });
    } else {
      setButton("Uploading...");
      services.uploadDocs(uploadData).then((res) => {
        toast.success("Product Uploaded", {
          theme: "colored",
        });
        setButton("Uplaod");
      });
    }
  };

  const keyWords = [
    "mens",
    "shoose",
    "laptop",
    "mobile",
    "electrinics",
    "clothes",
    "ladies",
    "beauty",
    "baby",
  ];
  const categories = [
    "mens",
    "men clothes",
    "clothes",
    "ladies",
    "electronic",
    "mobile",
    "latop",
  ];
  return (
    <div className="w-3/5 max-sm:w-full bg-white p-4 mx-auto">
      <ToastContainer />
      <h2>Upload Products</h2>
      <form className="">
        <div className="flex gap-4">
          <div className="w-96">
            <span>Title</span>
            <br />
            <input
              type="text"
              value={uploadData.title}
              onChange={(e) =>
                setUploadData({ ...uploadData, title: e.target.value })
              }
              className="py-1 g w-full px-2 bg-gray-100 outline-none rounded-md border"
            />
          </div>
          <div className="w-64">
            <span>Category</span>
            <br />
            <select
              name=""
              id=""
              value={uploadData.category}
              onChange={(e) =>
                setUploadData({ ...uploadData, category: e.target.value })
              }
              className="py-1 w-full capitalize px-2 bg-gray-100 outline-none rounded-md border"
            >
              {categories.map((e, index) => (
                <option key={index} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <span>Image url</span>
          <br />
          <input
            type="text"
            value={uploadData.image}
            onChange={(e) =>
              setUploadData({ ...uploadData, image: e.target.value })
            }
            className="py-1 w-full px-2 bg-gray-100 outline-none rounded-md border"
          />
        </div>
        <div className="w-full flex gap-4">
          <div className="w-52 my-1">
            <span>Price</span>
            <br />
            <input
              type="number"
              value={uploadData.price}
              onChange={(e) =>
                setUploadData({ ...uploadData, price: e.target.value })
              }
              className="py-1 w-full px-2 bg-gray-100 outline-none rounded-md border"
            />
          </div>
          <div className="w-52 my-1">
            <span>Discount</span>
            <br />
            <input
              type="number"
              value={uploadData.discount}
              onChange={(e) =>
                setUploadData({ ...uploadData, discount: e.target.value })
              }
              className="py-1 w-full px-2 bg-gray-100 outline-none rounded-md border"
            />
          </div>
        </div>
        <span className="">Choose Keyword</span> <br />
        <div>
          <div className="flex flex-wrap w-full ">
            {keyWords.map((k, index) => (
              <span
                key={index}
                onClick={setKeyword}
                className={`py-1 m-1 px-3 ${
                  uploadData.keyword.includes(k)
                    ? "bg-green-100 text-green-600"
                    : ""
                }  rounded-md bg-gray-100 border`}
              >
                {k}
              </span>
            ))}
          </div>
        </div>
        <div className="my-1">
          <span>Desciption</span> <br />
          <textarea
            name=""
            id=""
            value={uploadData.description}
            onChange={(e) =>
              setUploadData({ ...uploadData, description: e.target.value })
            }
            className="outline-none rounded-md my-1 border bg-gray-100 p-2 w-full min-h-28"
          ></textarea>
        </div>
        <div>
          <button
            onClick={handleUplaod}
            className="my-1 py-1 rounded-md px-6 border bg-purple-600 text-white"
          >
            {button}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
