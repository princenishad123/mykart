import { useState } from "react";
import { Modal, Button } from "keep-react";
import { CloudArrowUp } from "phosphor-react";

const UploadModal = () => {
  const [showModal, setShowModal] = useState(false);
  // const [keyword, setKeyword] = useState([]);
  const [uploadData, setUploadData] = useState({
    title: "",
    category: "",
    image: "",
    price: "",
    discount: "",
    keyword: [],
    description: "",
  });

  const onClickOne = () => {
    setShowModal(!showModal);
  };

  function keywordData(e) {
    setUploadData({
      ...uploadData,
      keyword: [...uploadData.keyword, e.target.innerHTML],
    });
  }

  const uplaodProduct = (e) => {
    e.preventDefault();
    console.log(uploadData);
  };

  return (
    <>
      <Button
        onClick={onClickOne}
        className="bg-purple-600 h-8 text-white hover:text-black"
      >
        Upload Product
      </Button>
      <Modal
        icon={<CloudArrowUp size={24} color="#1B4DFF" />}
        size="xl"
        show={showModal}
        position="center"
      >
        <Modal.Header>Upload Products</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 w-full h-auto">
            <form onSubmit={uplaodProduct}>
              <div className="w-full flex my-2 gap-4">
                <div className="w-2/4">
                  <span>Title</span>
                  <br />
                  <input
                    type="text"
                    value={uploadData.title}
                    onChange={(e) =>
                      setUploadData({ ...uploadData, title: e.target.value })
                    }
                    className="outline-none w-full py-1 px-2 bg-gray-100 border rounded-md"
                  />
                </div>

                <div className="w-2/4">
                  <span>Category</span>
                  <br />
                  <select
                    name=""
                    className="outline-none w-full py-1 px-2 bg-gray-100 border rounded-md"
                    id=""
                  >
                    <option value="fashion">Fashion</option>
                    <option value="mens">Mens Clothes</option>
                    <option value="mobile">Mobile</option>
                    <option value="laptop">Laptop</option>
                    <option value="electronic">Electronic</option>
                    <option value="gags">Bags</option>
                    <option value="shoose">Shoose</option>
                    <option value="ledies">Ladiese</option>
                    <option value="beauty">Beauty & fashion</option>
                    <option value="boy">Toys & baby</option>
                  </select>
                </div>
              </div>
              <div className="w-full my-2">
                <span>Image Url</span>
                <input
                  type="text"
                  className="w-full py-1 px-2 outline-none border rounded-md bg-gray-100"
                />
              </div>
              <div className="w-full flex gap-4">
                <div className="w-2/4">
                  <span>Price</span>
                  <br />
                  <input
                    type="text"
                    className="outline-none w-full py-1 px-2 bg-gray-100 border rounded-md"
                  />
                </div>

                <div className="w-2/4">
                  <span>Discount</span>
                  <br />
                  <input
                    type="text"
                    className="outline-none w-full py-1 px-2 bg-gray-100 border rounded-md"
                  />
                </div>
              </div>
              <div className="my-2">
                <span>Choose Keyword</span>
                <div className="w-full flex flex-wrap gap-2 h-auto ">
                  <span
                    className="py-1 px-3 rounded-xl cursor-pointer text-sm bg-gray-100 border"
                    onClick={keywordData}
                  >
                    mens
                  </span>
                  <span
                    onClick={keywordData}
                    className="py-1 px-3 rounded-xl cursor-pointer text-sm bg-gray-100 border"
                  >
                    laptop
                  </span>
                  <span
                    onClick={keywordData}
                    className="py-1 px-3 rounded-xl cursor-pointer text-sm bg-gray-100 border"
                  >
                    mobiles
                  </span>
                  <span
                    onClick={keywordData}
                    className="py-1 px-3 rounded-xl cursor-pointer text-sm bg-gray-100 border"
                  >
                    baby
                  </span>
                  <span
                    onClick={keywordData}
                    className="py-1 px-3 rounded-xl cursor-pointer text-sm bg-gray-100 border"
                  >
                    feshion
                  </span>
                  <span
                    onClick={keywordData}
                    className="py-1 px-3 rounded-xl cursor-pointer text-sm bg-gray-100 border"
                  >
                    jeans
                  </span>
                  <span
                    onClick={keywordData}
                    className="py-1 px-3 rounded-xl cursor-pointer text-sm bg-gray-100 border"
                  >
                    t-shirt
                  </span>
                  <span
                    onClick={keywordData}
                    className="py-1 px-3 rounded-xl cursor-pointer text-sm bg-gray-100 border"
                  >
                    shirt
                  </span>
                  <span
                    onClick={keywordData}
                    className="py-1 px-3 rounded-xl cursor-pointer text-sm bg-gray-100 border"
                  >
                    electronic
                  </span>
                  <span
                    onClick={keywordData}
                    className="py-1 px-3 rounded-xl cursor-pointer text-sm bg-gray-100 border"
                  >
                    beauty
                  </span>
                </div>
              </div>
              <div>
                <textarea className="w-full min-h-24 outline-none border bg-gray-100 p-2 rounded-md resize-none"></textarea>
              </div>
              <Modal.Footer>
                <Button
                  onClick={onClickOne}
                  type="outlineGray"
                  className="h-10"
                >
                  cancel
                </Button>
                <button className="h-10 bg-purple-600 px-6 rounded-md text-white">
                  Upload
                </button>
              </Modal.Footer>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UploadModal;
