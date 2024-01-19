/* eslint-disable react/prop-types */
export default function Filter({ filter , filterType , filNum}) {
    let color = ["Black" , "White" , "Red" , "Blue" , "Green"];
    let size = ["XS" , "S" , "M" ,"L" , "XL"];
    let Price = ["$0 - $100" , "$100 - $200" , "$200 - $300" , "$300 - $400" , "$400 - $500"];
    // let idx = [0,1,2,3,4];
  return (
    <>
      <div className="mt-4 mb-3">
        <h5>FILTER BY {filter}</h5>
        <div className="bg-white p-3">
          <div className="d-flex mb-3 justify-content-between">
            <div className="">
              <input type="checkbox" className="me-2 " />
              <span>
                <b>{filterType}</b>
              </span>
            </div>

            <button className="border p-1 border rounded-3">1000</button>
          </div>
          <div className="d-flex mb-2 justify-content-between">
            <div className="">
              <input type="checkbox" className="me-2 " />
              <span>{filNum == 1 ? Price[0] : filNum == 2 ? color[0] : size[0]}</span>
            </div>
            <button className="border p-1 border rounded-3">150</button>
          </div>
          <div className="d-flex mb-2 justify-content-between">
            <div className="">
              <input type="checkbox" className="me-2 " />
              <span>{filNum == 1 ? Price[1] : filNum == 2 ? color[1] : size[1]}</span>
            </div>
            <button className="border p-1 border rounded-3">295</button>
          </div>
          <div className="d-flex mb-2 justify-content-between">
            <div className="">
              <input type="checkbox" className="me-2 " />
              <span>{filNum == 1 ? Price[2] : filNum == 2 ? color[2] : filNum == 3 ? size[2]:"NA"}</span>
            </div>
            <button className="border p-1 border rounded-3">246</button>
          </div>
          <div className="d-flex mb-2 justify-content-between">
            <div className="">
              <input type="checkbox" className="me-2 " />
              <span>{filNum == 1 ? Price[3] : filNum == 2 ? color[3] : size[3]}</span>
            </div>
            <button className="border p-1 border rounded-3">145</button>
          </div>
          <div className="d-flex mb-2 justify-content-between">
            <div className="">
              <input type="checkbox" className="me-2 " />
              <span>{filNum == 1 ? Price[4] : filNum == 2 ? color[4] : size[4]}</span>
            </div>
            <button className="border p-1 border rounded-3">168</button>
          </div>
        </div>
      </div>
    </>
  );
}
