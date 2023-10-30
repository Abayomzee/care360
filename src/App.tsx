import React, { useEffect } from "react";
import "./App.css";

const apiUrl = "https://stagingapi.helpmewaka.com/healthcare";

function App() {
  // Handler
  const getData = async () => {
    const response = await fetch(apiUrl, {
      method: "GET",
    });
    const movies = await response.json();
    console.log({ movies });
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
            <tr>
              <td>First Bank</td>

              <td>Ajayi Thomas</td>
              <td>0803 995 6544</td>
              <td>ajayithomas@gmail.com</td>

              <td>Dele Haruna</td>
              <td>0803 995 6544</td>
              <td>deleharuna@gmail.com</td>
              <td>12/02/1990</td>
              <td>4, Anthony Close, Ikeja, Lagos.</td>

              <td>22/10/2023</td>
              <td>30/10/2023</td>
            </tr>
            <tr>
              <td>First Bank</td>

              <td>Ajayi Thomas</td>
              <td>0803 995 6544</td>
              <td>ajayithomas@gmail.com</td>

              <td>Dele Haruna</td>
              <td>0803 995 6544</td>
              <td>deleharuna@gmail.com</td>
              <td>12/02/1990</td>
              <td>4, Anthony Close, Ikeja, Lagos.</td>

              <td>22/10/2023</td>
              <td>30/10/2023</td>
            </tr>
            <tr>
              <td>First Bank</td>

              <td>Ajayi Thomas</td>
              <td>0803 995 6544</td>
              <td>ajayithomas@gmail.com</td>

              <td>Dele Haruna</td>
              <td>0803 995 6544</td>
              <td>deleharuna@gmail.com</td>
              <td>12/02/1990</td>
              <td>4, Anthony Close, Ikeja, Lagos.</td>

              <td>22/10/2023</td>
              <td>30/10/2023</td>
            </tr>
            <tr>
              <td>First Bank</td>

              <td>Ajayi Thomas</td>
              <td>0803 995 6544</td>
              <td>ajayithomas@gmail.com</td>

              <td>Dele Haruna</td>
              <td>0803 995 6544</td>
              <td>deleharuna@gmail.com</td>
              <td>12/02/1990</td>
              <td>4, Anthony Close, Ikeja, Lagos.</td>

              <td>22/10/2023</td>
              <td>30/10/2023</td>
            </tr>
            <tr>
              <td>First Bank</td>

              <td>Ajayi Thomas</td>
              <td>0803 995 6544</td>
              <td>ajayithomas@gmail.com</td>

              <td>Dele Haruna</td>
              <td>0803 995 6544</td>
              <td>deleharuna@gmail.com</td>
              <td>12/02/1990</td>
              <td>4, Anthony Close, Ikeja, Lagos.</td>

              <td>22/10/2023</td>
              <td>30/10/2023</td>
            </tr>
            <tr>
              <td>First Bank</td>

              <td>Ajayi Thomas</td>
              <td>0803 995 6544</td>
              <td>ajayithomas@gmail.com</td>

              <td>Dele Haruna</td>
              <td>0803 995 6544</td>
              <td>deleharuna@gmail.com</td>
              <td>12/02/1990</td>
              <td>4, Anthony Close, Ikeja, Lagos.</td>

              <td>22/10/2023</td>
              <td>30/10/2023</td>
            </tr>
          </table>
        </div>
      </section>
    </main>
  );
}

export default App;
