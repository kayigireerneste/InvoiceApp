import "./invoice_form.css";
import { useState, useEffect } from "react";
import { IoIosAdd, IoIosArrowForward } from "react-icons/io";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdLightMode } from "react-icons/md";
import Profile from "../images/avatar.png";

const InvoiceForm = () => {

    //to open and close invoice form
  const [modal, setModal] = useState(false);

const handleOpen = () => {
    setModal(true);
  }

  const handleClose = () => {
    setModal(false);
  }

  

  //to add input fields for new item
  const [InputList, SetInputList] = useState([{
    ItemName: '',
    Qty: '',
    Price: '',
    Total: '',
  }]);

  const HandleAddItem = ()=>{
    SetInputList([...InputList, {
        ItemName: '',
        Qty: '',
        Price: '',
        Total: '',
      }])
  }

  //toSaveAndSend value to the invoice
  const [inputData, setInputData] =useState({
    from_street: '',
    city:'',
    PostCode: '',
    Country: '',
    ClientName: '',
    ClientEmail: '',
    ClientStreetAddress: '',
    city2: '',
    PostCode2: '',
    Country2: '',
    InvoiceDate: '',
    ProjectDescription: '',
    ItemName: '',
    Qty: '',
    Price: '',
    Total: '',

  })
  useEffect(()=> {
    const storedData = JSON.parse(localStorage.getItem('DataDate')) || [];
    if(storedData){
      setInputData(storedData)
    }
  }, [])

  const handleChange= (e) => {
    const {name, value}= e.target
    setInputData((prevData)=>({
      ...prevData,
      [name]: value
    }))

  }

  const handelSubmit = () => {
    const storedData = JSON.parse(localStorage.getItem('DataDate')) || [] 
    const newdata = [ ...storedData, inputData ];
    localStorage.setItem("DataDate", JSON.stringify(newdata));
  }
  

const dataFromLocalStorage = JSON.parse(localStorage.getItem('DataDate'))||[]

console.log("+++++++++++++++++", dataFromLocalStorage);
  return (
    <>
    <div className="content">
      <div className="sidebar">
        <div className="logo">
          <h1>Kangalo</h1>
          <p>Invoices manager</p>
        </div>
        <div className="lightMode_back">
          <MdLightMode className="lightMode" />
        </div>
        <div className="img_back">
          <img className="img" src={Profile} alt="" />
        </div>
      </div>
      <div className="main_content">
        <div className="header_title">
          <div className="title">
            <h1>Invoices</h1>
            <p>there are 8 total invoices</p>
          </div>
          <div className="add_and_filter">
            <div className="filter">
              <p className="filter_by">
                Filter by status <RiArrowDropDownLine className="filter_icon" />
              </p>
              {/* <ul className='filter_list'>
            <li>Draft</li>
            <li>Pending</li>
            <li>Paid</li>
          </ul> */}
            </div>
            <button onClick={handleOpen} className="btn">
              <IoIosAdd />
              New Invoice
            </button>
          </div>
        </div>

        <div className="invoices">
{    dataFromLocalStorage.map((data, index) => (
          <div className="invoice_items" key={index}>
            <div>
              <h3 className="invoice_id">{"FN"+index+56}</h3>
            </div>

            <div>
              <h4 className="invoice_date">{data?.InvoiceDate}</h4>
            </div>

            <div>
              <h4 className="client_name">{data?.ClientName}</h4>
            </div>

            <div>
              <h2 className="invoice_amount">{data?.Total}</h2>
            </div>
            <div>
              <button className="simple_btn">pendind</button>
            </div>
            <div>
              <IoIosArrowForward className="sideicon" />
            </div>
          </div>
          ))}

        </div>

      </div>
      </div>

      {modal && (
      <div className="modal">
        <div className="page_content">
          <form action="#" className="bill_form" onSubmit={handelSubmit}>
            <div className="bill_from">
              <h2 className="bill_from_title">Bill From</h2>
              <div className="from_street_form">
                <label htmlFor="FromStreetAddress">Street Address</label>
                <input type="text" name="from_street" className="from2" 
                value={inputData.from_street}
                onChange={handleChange}
                />
              </div>
              <div className="additional_submition">
                <div className="form1">
                  <label htmlFor="City">City</label>
                  <input type="text" name="city" className="city" 
                  value={inputData.city}
                  onChange={handleChange}
                  />
                </div>
                <div className="form1">
                  <label htmlFor="PostCode">PostCode</label>
                  <input type="text" name="PostCode" className="city" 
                  value={inputData.PostCode}
                  onChange={handleChange}
                  />
                </div>
                <div className="form1">
                  <label htmlFor="Country">Country</label>
                  <input type="text" name="Country" className="city" 
                  value={inputData.Country}
                  onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="bill_to">
              <h2 className="bill_to-title">Bill To</h2>
              <div className="ClientName">
                <label htmlFor="ClientName">Client’s Name</label>
                <input type="text" name="ClientName" className="from2" 
                value={inputData.ClientName}
                onChange={handleChange}
                />
              </div>
              <div className="ClientName">
                <label htmlFor="ClientEmail">Client’s Email</label>
                <input
                  type="text"
                  placeholder="e.g. email.example.com"
                  name="ClientEmail"
                  className="from2"
                  value={inputData.ClientEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="ClientName">
                <label htmlFor="ClientStreetAddress">Street Address</label>
                <input
                  type="text"
                  name="ClientStreetAddress"
                  className="from2"
                  value={inputData.ClientStreetAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="additional_submition">
                <div className="form1">
                  <label htmlFor="City">City</label>
                  <input type="text" name="city2" className="city" 
                  value={inputData.city2}
                  onChange={handleChange}
                  />
                </div>
                <div className="form1">
                  <label htmlFor="PostCode">PostCode</label>
                  <input type="text" name="PostCode2" className="city"
                  value={inputData.PostCode2}
                  onChange={handleChange} 
                  />
                </div>
                <div className="form1">
                  <label htmlFor="Country">Country</label>
                  <input type="text" name="Country2" className="city"
                  value={inputData.Country2}
                  onChange={handleChange} 
                  />
                </div>
              </div>
              <div className="InvoiceDate">
                <label htmlFor="InvoiceDate">Invoice Date</label>
                <input type="date" name="InvoiceDate" className="from2" 
                value={inputData.InvoiceDate}
                onChange={handleChange}
                />
              </div>
              <div className="PaymentTerms">
                <label htmlFor="PaymentTerms">Payment Terms</label>
                <select id="select" name="select" className="OptionForDay">
                  <option value="option1">Net1Day</option>
                  <option value="option2">Net7Days</option>
                  <option value="option3">Net14Days</option>
                  <option value="option4">Net30Days</option>
                </select>
              </div>
              <div className="ProjectDescription">
                <label htmlFor="ProjectDescription">Project Description</label>
                <input
                  type="text"
                  name="ProjectDescription"
                  placeholder="e.g. Graphic Design Services"
                  className="from2"
                  value={inputData.ProjectDescription}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="ItemList">
                <h2 className="ListTitle">Item List</h2>

                {InputList.map((items, index)=>(
            <div key={index} className="indexed">        
              <div className="Items">
                <div className="Item">
                  <label htmlFor="ItemName">Item Name</label>
                  <input placeholder="New Item" id="ItemName" type="text" name="ItemName" className="ItemName" 
                  value={inputData.ItemName}
                  onChange={handleChange}
                  />
                </div>
                <div className="Item">
                  <label htmlFor="Qty">Qty.</label>
                  <input placeholder="0.0" id="Qty" type="number" name="Qty" className="Qty" 
                  value={inputData.Qty}
                  onChange={handleChange}
                  />
                </div>
                <div className="Item">
                  <label htmlFor="Price">Price</label>
                  <input placeholder="0.0" id="Price" type="number" name="Price" className="Price" 
                  value={inputData.Price}
                  onChange={handleChange}
                  />
                </div>
                <div className="Item">
                  <label htmlFor="Total">Total</label>
                  <input placeholder="0.0" id="Total" type="number" name="Total" className="Total" 
                  value={inputData.Total}
                  onChange={handleChange}
                  />
                </div>
              </div>
              {InputList.length-1===index &&
              <button  onClick={HandleAddItem} className="AddItemsBtn">
                <IoIosAdd />
                Add New Item
              </button>
              }
              </div>
              ))}
            </div>
            <div className="Option_Btns">
              <button className="Discard" onClick={handleClose}>Discard</button>
              <button className="Draft">Save as Draft</button>
              <button className="SaveAndSend">Save&Send</button>
            </div>
          </form>
        </div>
      </div>
      )}
    </>
  );
};

export default InvoiceForm;
