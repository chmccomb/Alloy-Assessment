import "./App.css";
import { useState } from "react";
import base64 from "react-native-base64";


function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [address1, setAddress1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [ssn, setSsn] = useState("");
  const [zip, setZip] = useState("");
  const [message, setMessage] = useState("");
  const urlEval = "/v1/evaluations/";
  const token = "redacted";
  const secret = "redacted";

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch(urlEval, {
        method: "POST",
        mode: "no-cors",
        headers: { 
         "authorization": "Basic " + base64.encode(`${token}:${secret}`),
         "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phone_number: number,
          name_first: fname,
          name_last: lname,
          email_address: email,
          birth_date: dob,
          address_line_1: address1,
          address_city: city,
          address_state: state,
          document_ssn: ssn,
          address_postal_code: zip,
          address_country_code: "US"
        }),
      });
      let resJson = await res.json();
      if (res.status === 201) {
        setFname("");
        setLname("");
        setNumber("");
        setEmail("");
        setDob("");
        setAddress1("");
        setCity("");
        setState("");
        setZip("");
        setSsn("")
      } else {
        setMessage("Some error occured");
      if (res.outcome = "Approved") {
        setMessage("Approved!  Account created successfully.");
      }
      if (res.outcome = "Manual Review") {
        setMessage("Thanks for submitting your application.  We will be in tocuh shortly.");
      }
      if (res.outcome = "Deny") {
        setMessage("Sorry, we are unable to create your account at this time");
      }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fname}
          placeholder="First Name"
          onChange={(e) => setFname(e.target.value)}
        />
         <input
          type="text"
          value={lname}
          placeholder=" Last Name"
          onChange={(e) => setLname(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={number}
          placeholder="Mobile Number"
          onChange={(e) => setNumber(e.target.value)}
        />
         <input
          type="date"
          value={dob}
          placeholder="Date of Birth"
          onChange={(e) => setDob(e.target.value)}
        />
         <input
          type="text"
          value={address1}
          placeholder="Street Address"
          onChange={(e) => setAddress1(e.target.value)}
        />
         <input
          type="text"
          value={city}
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />
         <input
          type="text"
          value={state}
          placeholder="State"
          onChange={(e) => setState(e.target.value)}
        />
         <input
          type="text"
          value={zip}
          placeholder="Zipcode"
          onChange={(e) => setZip(e.target.value)}
        />
         <input
          type="text"
          value={ssn}
          placeholder="Social Security Number"
          onChange={(e) => setSsn(e.target.value)}
        />

        <button type="submit">Create</button>

       <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default App;
