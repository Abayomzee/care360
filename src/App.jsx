import React, { useEffect, useState } from "react";
import "./App.css";

const apiUrl = "https://stagingapi.helpmewaka.com/healthcare";
// const apiUrl = "https://api.helpmewaka.com/healthcare";

function App() {
  // States
  const [data, setData] = useState([]);

  // Handler
  const getData = async () => {
    try {
      const response = await fetch(apiUrl);
      const res = await response.json();
      setData(res.data);
      console.log({ data: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  // Effects
  useEffect(() => {
    getData();
  }, []);

  // Data to display
  return (
    <main>
      <nav>
        <div className="center">
          <img src="/images/logo.png" alt="" className="logo" />
        </div>
      </nav>

      <section>
        <div className="center">
          <h3 className="text-center heading">
            Care 360 Remote Care Monitoring
          </h3>

          {/* Table */}
          {data.length ? (
            <table>
              <tr className="main-headings">
                <th className="head" rowSpan={2}>
                  Source
                </th>
                <th className="head" colSpan={3}>
                  Customer
                </th>
                <th className="head" colSpan={5}>
                  Beneficiary
                </th>
                <th className="head" colSpan={2}>
                  Effective
                </th>
              </tr>
              <tr className="sub-heading">
                <th className="heading-sub">Name</th>
                <th className="heading-sub">phone number</th>
                <th className="heading-sub">email</th>

                <th className="heading-sub">Name</th>
                <th className="heading-sub">phone number</th>
                <th className="heading-sub">email</th>
                <th className="heading-sub">DOB</th>
                <th className="heading-sub">Address</th>

                <th className="heading-sub">from</th>
                <th className="heading-sub">to</th>
              </tr>

              {/* Data */}
              {data.map((d, index) => (
                <tr key={index}>
                  <td className="text-center">--</td>

                  <td title={d?.RequesterName}>{d?.RequesterName}</td>
                  <td title={d?.RequesterPhone}>{d?.RequesterPhone}</td>
                  <td title={d?.RequesterEmail}>{d?.RequesterEmail}</td>

                  <td title={d?.BeneficiaryName}>{d?.BeneficiaryName}</td>
                  <td title={d?.BeneficiaryPhone}>{d?.BeneficiaryPhone}</td>
                  <td title={d?.BeneficiaryEmail}>{d?.BeneficiaryEmail}</td>
                  <td title={d?.BeneficiaryDOB}>{d?.BeneficiaryDOB}</td>
                  <td title={d?.BeneficiaryAddress}>{d?.BeneficiaryAddress}</td>

                  <td className="text-center">--</td>
                  <td className="text-center">--</td>
                  {/* <td>22/10/2023</td>
                <td>30/10/2023</td> */}
                </tr>
              ))}
            </table>
          ) : (
            <div className="empty-state">
              <h5 className="empty-heading">😢 No data found</h5>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
