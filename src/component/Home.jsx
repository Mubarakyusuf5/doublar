import React, { useState } from "react";
import Mine from "./Mine";
import Activities from "./Activities";
import Head from "./Head";
import { useRef } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("history");
  const tabs = [
    { id: "history", label: "History" },
    { id: "income", label: "Income" },
    { id: "outcome", label: "Outcome" },
  ];

  const taxRef = 20;
  const USDT = 1500;
  const NGN = taxRef + USDT;

  const inputRef = useRef(null);
  const inputValue = "0xc31fd6edffbb6ecf93b959b886cfc83c41aaa908";
  const placeholder = "0xd*****ff86jff";

  const handleCopy = () => {
    // Copy the text to the clipboard
    navigator.clipboard
      .writeText(inputRef.current.value)
      .then(() => {
        alert("Referral link copied!");
      })
      .catch((err) => {
        alert("Failed to copy text: ", err);
      });
  };

  return (
    <div className="all-home">
      <div className="wallet-fixed-header">
        <div className="reward-bal-points container">
          <div>
            <Head />
          </div>
          <div className="text-center">
            <br />
            <br />
            <p
              style={{
                lineHeight: 0,
              }}
            >
              Wallet Address
            </p>
            <section className="wallet-address container">
              <input
                type="text"
                value={inputValue}
                readOnly
                ref={inputRef}
                placeholder={placeholder}
              />{" "}
              &nbsp;
              <button type="button" onClick={handleCopy}>
                <i className="fa-solid fa-copy"></i>
              </button>
            </section>
          </div>
          <div className="main-rbp container">
            <div className="bal text-center">
              <p>
                <span className="fs-4">{USDT}</span> <sup>USDT</sup>
              </p>
            </div>

            {/*    <div className="bal text-center">
              <p className="fa-solid fa-exchange fs-2 text-light"> </p>
            </div>

            <div className="bal text-center">
              <p>
                {" "}
                <span className="fs-4">{NGN}</span> <sup>NGN</sup>
              </p>
            </div>*/}
          </div>
          <div className="fs-3 text-secondary p-3">
            <p>W3P Balance:</p>
          </div>
        </div>
<div className="container py-5" style={{ backgroundColor: "var(--body)" }}>
      {/* Tabs Navigation */}
      <ul className="nav nav-pills justify-content-center mb-4">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""} text-capitalize`}
              style={{
                backgroundColor: activeTab === tab.id ? "var(--sub1)" : "transparent",
                color: activeTab === tab.id ? "#fff" : "var(--sub1)",
                border: "1px solid var(--sub1)",
                margin: "0 5px",
              }}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div
        className="tab-content p-4 rounded shadow-sm"
        style={{ backgroundColor: "var(--body)", color: "#fff" }}
      >
        {activeTab === "history" && (
          <div className="tab-pane fade show active" style={{ backgroundColor: "var(--sub1)", borderRadius: "10px", padding: "20px" }}>
            <h4 className="mb-3 text-white">Transaction History</h4>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between" style={{ backgroundColor: "transparent", color: "#fff" }}>
                <span>Deposit</span> <span className="text-success">+ $15,000</span>
              </li>
              <li className="list-group-item d-flex justify-content-between" style={{ backgroundColor: "transparent", color: "#fff" }}>
                <span>Purchase - Laptop</span> <span className="text-danger">- $120,000</span>
              </li>
              <li className="list-group-item d-flex justify-content-between" style={{ backgroundColor: "transparent", color: "#fff" }}>
                <span>Withdrawal</span> <span className="text-danger">- $20,000</span>
              </li>
              <li className="list-group-item d-flex justify-content-between" style={{ backgroundColor: "transparent", color: "#fff" }}>
                <span>Transfer from Musa</span> <span className="text-success">+ $5,000</span>
              </li>
            </ul>
          </div>
        )}

        {activeTab === "income" && (
          <div className="tab-pane fade show active" style={{ backgroundColor: "var(--sub1)", borderRadius: "10px", padding: "20px" }}>
            <h4 className="mb-3 text-white">Income Summary</h4>
            <table className="table table-hover" style={{ color: "#fff" }}>
              <thead>
                <tr style={{ backgroundColor: "var(--sub1)", color: "#fff" }}>
                  <th>Date</th>
                  <th>Source</th>
                  <th>Amount ($)</th>
                </tr>
              </thead>
              <tbody>
                {[{date: "2025-10-10", source: "Freelance Project", amount: "30,000"}, {date: "2025-10-12", source: "Referral Bonus", amount: "5,000"}, {date: "2025-10-18", source: "Affiliate Marketing", amount: "12,000"}].map((item, index) => (
                  <tr key={index} style={{ cursor: "pointer" }} onMouseEnter={e => e.currentTarget.style.backgroundColor = "var(--body)"} onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}>
                    <td>{item.date}</td>
                    <td>{item.source}</td>
                    <td>{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "outcome" && (
          <div className="tab-pane fade show active">
            <h4 className="mb-3" style={{ color: "var(--sub1)" }}>Expenses Breakdown</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="card border-danger bg-transparent text-white">
                  <div className="card-body">
                    <h5 className="card-title text-danger">Rent Payment</h5>
                    <p className="card-text mb-1">Date: 2025-10-15</p>
                    <p className="card-text">Amount: $80,000</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-warning bg-transparent text-white">
                  <div className="card-body">
                    <h5 className="card-title text-warning">Groceries</h5>
                    <p className="card-text mb-1">Date: 2025-10-20</p>
                    <p className="card-text">Amount: $15,500</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-info bg-transparent text-white">
                  <div className="card-body">
                    <h5 className="card-title text-info">Internet Subscription</h5>
                    <p className="card-text mb-1">Date: 2025-10-25</p>
                    <p className="card-text">Amount: $8,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      </div>
    </div>
  );
};

export default Home;
