import React from 'react'

export default function Card() {
  return (
      <div className="card mt-3" style={{ width: "18rem","maxHeight":"360px" }}>
        <img src="https://source.unsplash.com/random/700x260/?pavbhaji" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Pav Bhaji</h5>
          <p className="card-text">
            Delicious Bhaji with 2 buttery Pavs
          </p>
          <div className="container w-100">
            <select className="m-2 h-100  bg-sucess rounded">
                {
                    Array.from(Array(6),(e,i)=>{
                        return(
                            <option key={i+1} value={i+1}>{i+1}</option>
                        )
                })
                }
            </select>

            <select name="" className="m-2 h-100  bg-sucess rounded">
                <option value="Half">Half</option>
                <option value="Full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
  )
}
