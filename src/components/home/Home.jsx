import React, { useState } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./home.css";

function Home() {
  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: "Page G",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];

  const [price, setPrice] = useState(0)
  const [qty,setQty] = useState(0)
  const [total, setTotal] = useState(0)

  const [users, setUsers] = useState([]);
  const [name,setName] = useState()
  const [sum,setSum] = useState();

  function Calculation() {
    users.push({ name, qty,price,sum });
    const total = users.reduce((total,user)=>{
      total += Number(user.sum)
      return total
    },0);
     // you want this
     setTotal(total);

    setName('');
    setQty('');
    setPrice('');
    setSum('');
  }

  const handlePriceChange = (e) => {
    const newPrice = parseFloat(e.target.value);
    if(!isNaN(newPrice)) {
      setPrice(newPrice);
      calculateTotal(newPrice, qty);
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if(!isNaN(newQuantity)) {
      setQty(newQuantity);
      calculateTotal(price, newQuantity)
    }
  };

   
    const calculateTotal = (price, qty) => {
   const newTotal = price * qty;
   setSum(newTotal);
    };
    function refreshPage(){ 
     window.location.reload(); 
 }



  return (
    <div id="home" class="container-fluid bg-2 text-center">
            <h1>Inventory Management System React</h1>
            <br/>
        <div class="row">
            
          
        <div class="col-sm-8">
        <table class="table table-bordered">
                <h3 align="left"> Add Products  </h3>
                <tr>
                   
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Amount</th>
                    <th>Option</th>
                </tr>
                <tr>
                
                <td>
                  
                     <input type="text" class="form-control" placeholder="Item Name" value={name}
                        onChange={(event) =>
                        {
                            setName(event.target.value);      
                        }}
                                       
                        />
                </td>
                <td>
                    <input type="text" class="form-control" placeholder="Enter Price" 
                        value={price}
                        onChange={handlePriceChange}
                        />
                </td>
                <td>
                <input type="number" class="form-control" placeholder="Enter Qty" 
                        value={qty}
                        onChange={handleQuantityChange}
                 />
                </td>
                <td>
                    
                    <input type="text" value={sum} class="form-control" placeholder="Enter Total" id="total_cost" name="total_cost" disabled/>
                </td>
                <td>
                  
                    <button class="btn btn-success" type="submit" onClick={Calculation}>Add</button>
                </td>
                </tr>
        </table>
        <h3 align="left">  Products  </h3>
        <table class="table table-bordered">
        
                    <thead>
                    <tr>
                        <th>Item Name</th>
                       
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Amount</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((row,index) => (
            <tr key={index}>
              <td>{row .name}</td>
              <td>{row .price}</td>
              <td>{row .qty}</td>
              <td>{row .sum}</td>
            </tr>
          ))}
        </tbody>
                </table>
        </div>
        <div class="col-sm-4">
                
                <div class="form-group" align="left">
                        <h3>Total</h3>
               
                <input type="text"  class="form-control" placeholder="Enter Total" required  disabled
                value={total} />
                <br/>
                <button type="button" class="btn btn-success" onClick={ refreshPage }> <span>Complete</span> </button> 
            </div>
            </div>
 </div>
      
      
        </div>
  
  
  
    // <main className="main-container">
    //   <div className="main-title">
    //     <h3>DASHBOARD</h3>
    //   </div>

    //   <div className="main-cards">
    //     <div className="card">
    //       <div className="card-inner">
    //         <h3>PRODUCTS</h3>
    //         <BsFillArchiveFill className="card_icon" />
    //       </div>
    //       <h1>300</h1>
    //     </div>
    //     <div className="card">
    //       <div className="card-inner">
    //         <h3>CATEGORIES</h3>
    //         <BsFillGrid3X3GapFill className="card_icon" />
    //       </div>
    //       <h1>12</h1>
    //     </div>
    //     <div className="card">
    //       <div className="card-inner">
    //         <h3>CUSTOMERS</h3>
    //         <BsPeopleFill className="card_icon" />
    //       </div>
    //       <h1>26</h1>
    //     </div>
    //     <div className="card">
    //       <div className="card-inner">
    //         <h3>ALERTS</h3>
    //         <BsFillBellFill className="card_icon" />
    //       </div>
    //       <h1>46</h1>
    //     </div>
    //   </div>

    //   <div className="charts">
    //     <ResponsiveContainer width="100%" height="100%">
    //       <BarChart
    //         width={500}
    //         height={300}
    //         data={data}
    //         margin={{
    //           top: 5,
    //           right: 30,
    //           left: 20,
    //           bottom: 5,
    //         }}
    //       >
    //         <CartesianGrid strokeDasharray="3 3" />
    //         <XAxis dataKey="name" />
    //         <YAxis />
    //         <Legend />
    //         <Bar dataKey="pv" fill="#8884d" />
    //         <Bar dataKey="uv" fill="#82ca9d" />
    //       </BarChart>
    //     </ResponsiveContainer>

    //     <ResponsiveContainer width="100%" height="100%">
    //       <LineChart
    //         width={500}
    //         height={300}
    //         data={data}
    //         margin={{
    //           top: 5,
    //           right: 30,
    //           left: 20,
    //           bottom: 5,
    //         }}
    //       >
    //         <CartesianGrid strokeDasharray="3 3" />
    //         <XAxis dataKey="name" />
    //         <YAxis />
    //         <Tooltip />
    //         <Legend />
    //         <Line
    //           type="monotone"
    //           dataKey="pv"
    //           stroke="#8884d8"
    //           activeDot={{ r: 8 }}
    //         />
    //         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    //       </LineChart>
    //     </ResponsiveContainer>
    //   </div>
    // </main>
  );
}

export default Home;
