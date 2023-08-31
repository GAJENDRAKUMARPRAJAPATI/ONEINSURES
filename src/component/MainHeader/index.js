import React, { useState } from "react";
import "./Style.css";
import ReactEChart from "echarts-for-react";

const MainHeader = () => {
    const[show, setShow]=useState(true)

    const pieChart  = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          bottom: '3%',
          right: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '50%'],
           
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: false,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
            ]
          }
        ]
    };

 const handleTermChange = () => {
    setShow(false);
 }
  return (
    <>
      <header> 
        <div className="mainHeader mt-2 ms-1 me-1">
          <div>
            <img
              id="img"
              src="https://lh3.googleusercontent.com/p/AF1QipM5Z1xscFA5-sJr-qlVQXLVVkjJErUk3Ikoi3io=w1024-k"
              alt=""
            />
          </div>
          <div>
            <span> Policy</span>
            <span>Claims</span>
            <span>Services</span>
            <span>Know your policy</span>
          </div>
          <div>
            <span id="iconbtn" className="bi bi-telephone">
              HotLine:99899877
            </span>
            <span className="bi bi-search" id="searchIcon"></span>
            <span id="personIcon" className="bi bi-person-circle lg"></span>
          </div>
        </div>
      </header>

      <section className="mt-2 MainSection">
        <h2 className="ms-2">Calculator</h2>
        <div className="d-flex tabselect">
            <div>
                <button className="term" onClick={()=> setShow(!show)}>Term Calculator</button>
            </div>
            <div>
                <button id="btn-term"  className="term" onClick={handleTermChange} >Term & Health with PED</button>
            </div>
        </div>
       {
        show ?  <div className="bgmain">
        <div className="row mainRow">
          <div className="col-7 ">
            <form className="form p-3">
              <div className="formContaint">
                <div>
                  <label>Age</label>
                  <div class="input-group mb-3">
                    <span class="input-group-text bi bi-calculator"></span>
                    <input
                      type="text"
                      class="form-control w-25"
                      value="32"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span class="input-group-text">Year</span>
                  </div>
                </div>

                <div>
                  <label>Income</label>
                  <div className="input-group mb-3  rupessymbol">
                    <span className="input-group-text">
                      <span id="rupee">
                        <span
                          className="bi bi-currency-rupee rupeess"
                          id="s"
                        ></span>
                      </span>
                    </span>
                    <input
                      type="text"
                      class="form-control w-25"
                      value="10000"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span class="input-group-text">Lakhs</span>
                  </div>
                </div>

                <div>
                  <label>HouseHoldExpenses</label>
                  <div className="input-group mb-3  rupessymbol">
                    <span className="input-group-text">
                      <span id="rupee">
                        <span
                          className="bi bi-currency-rupee rupeess"
                          id="s"
                        ></span>
                      </span>
                    </span>
                    <input
                      type="text"
                      class="form-control w-25"
                      value="200000"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span class="input-group-text">Lakhs</span>
                  </div>
                </div>

                <div>
                  <label>Loan Amount</label>
                  <div className="input-group mb-3  rupessymbol">
                    <span className="input-group-text">
                      <span id="rupee">
                        <span
                          className="bi bi-currency-rupee rupeess"
                          id="s"
                        ></span>
                      </span>
                    </span>
                    <input
                      type="text"
                      class="form-control w-25"
                      value="100000"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span class="input-group-text">Lakhs</span>
                  </div>
                </div>

                <div>
                  <label>OutStanding</label>
                  <div className="input-group mb-3  rupessymbol">
                    <span className="input-group-text">
                      <span id="rupee">
                        <span
                          className="bi bi-currency-rupee rupeess"
                          id="s"
                        ></span>
                      </span>
                    </span>
                    <input
                      type="text"
                      class="form-control w-25"
                      value="300000"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span class="input-group-text">Lakhs</span>
                  </div>
                </div>
              </div>
              <h2>Kid's Details</h2>
              <div className="KidsDetails">
                <div>
                  <label>Kid's Age</label>
                  <div class="input-group mb-3">
                    <span class="input-group-text bi bi-calculator"></span>
                    <input
                      type="text"
                      class="form-control w-25"
                      value="12"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span class="input-group-text">Year</span>
                  </div>
                </div>

                <div>
                  <label>Kid's Current Eduction Expense</label>
                 <div className="input-group mb-3  rupessymbol">
                    <span className="input-group-text">
                      <span id="rupee1">
                        <span
                          className="bi bi-currency-rupee rupees"
                          id="s"
                        ></span>
                      </span>
                    </span>
                    <input
                      type="text"
                      class="form-control w-25"
                      value="100000"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <span class="input-group-text">Lakhs</span>
                  </div>
                </div>

                <div>
                    <button className=" btn btn-warning btn">+</button>
                </div>
              </div>

              <button className=" btn btn-warning ">calculate</button>
            </form>
          </div>

          <div className="col-5 distribution ">
             <h2>Distribution</h2>

             <div className="total">
            

             </div>

              <div className="chart"> 
              <div className="total">
              <div>Total Amount </div>
              <div>&#8377; 1,78,80,559</div>
              </div> 
                 <ReactEChart option={pieChart} />
              </div>

              <div>
                <p>Eliminate English grammar errors instantly and enhance your writing. Try now for free! Our free sentence checker allows you to write your best wherever you love to write.</p>
              </div>
              <div>
              <button className="compaire">Compare Plans</button>
              <button className="learnmore">Lean more</button>
              </div>
          </div>

        </div>
        </div>  : null
       }
      </section>
    </>
  );
};

export default MainHeader;
