import React, { useState } from "react";
import styles from "./ConsentDetailsForm.module.css";
import { useNavigate } from "react-router-dom";

const ConsentDetailsForm = () => {
  const navigate = useNavigate();
  const [customer_id, setCustomerId] = useState("");
  const [redirect_uri, setRedirectUri] = useState("");
  const [policy_version, setPolicyVersion] = useState("");
  const [purpose, setPurpose] = useState("");
  const [scope, setScope] = useState("");
  const [tab, setTab] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { customer_id, redirect_uri, policy_version, purpose, scope };
    console.log("Form Submitted:", formData);
    // sending data to backend
  };



  // 0 for consent form
  //  1 for confirmation form

  const handleclick = () => {
    console.log(1);
    navigate("/allow");
  };
  return (
    <>
      {tab === 0 ? (
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Enter Consent Details</h2>
          <form className={styles.consentForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Customer ID</label>
              <input
                value={customer_id}
                onChange={(e) => setCustomerId(e.target.value)}
                type="text"
                
              />
            </div>
            <div className={styles.formGroup}>
              <label>Redirect URI</label>
              <input
                value={redirect_uri}
                onChange={(e) => setRedirectUri(e.target.value)}
                type="url"
              />
            </div>
            <div className={styles.formGroup}>
              <label>Policy Version</label>
              <input
                value={policy_version}
                onChange={(e) => setPolicyVersion(e.target.value)}
                type="text"
              />
            </div>
            <div className={styles.formGroup}>
              <label>Purpose</label>
              <input
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                type="text"

              />
            </div>
            <div className={styles.formGroup}>
              <label>Scope</label>
              <input
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                type="text"
                
              />
            </div>
            <button
              onClick={() => {
                setTab(1);
              }}
              type="button"
              className={styles.submitButton}
            >
              Request Consent
            </button>
          </form>
        </div>
      ) : (
        <div className={styles.formContainersec}>
          <div className={styles.headerPart}>
            <div className={styles.headerLogo}>
              <img src="/hyperverge.png" alt="Hyperverge Logo" />
              <img src="/angelone.png" alt="Angel One Logo" />
            </div>
            <div className={styles.headerInfo}>
              <p>Johndoe@gmail.com</p>
              <p>{policy_version || "<Policy Version>"}</p>
            </div>
          </div>
          <div className={styles.mainPart}>
            <div className={styles.mainpartDiv}>
              <p className={styles.infoText}>
                The following details will be collected from you by{" "}
                &lt;XYZ_name&gt;
              </p>
              <ul className={styles.detailsList}>
                <li>
                  <input type="checkbox" defaultChecked readOnly />
                  <span>Facial Scan</span>
                </li>
                <li>
                  <input type="checkbox" defaultChecked readOnly />
                  <span>Location Access</span>
                </li>
              </ul>
              <div className={styles.mainPartBottom}>
                <h3 className={styles.subTitle}>Purpose</h3>
                <p>Fraud prevention and compliance checks</p>
                <p>Fraud prevention and compliance checks</p>
              </div>
            </div>
          </div>
          <div className={styles.footerPart}>
            <p className={styles.footerText}>
              By clicking Allow, you allow the app to use your information in
              accordance with their respective{" "}
              <a href="#" className={styles.link}>
                terms of service
              </a>{" "}
              and{" "}
              <a href="#" className={styles.link}>
                privacy policies
              </a>
              .
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.denyButton} onClick={() => setTab(0)}>
                Deny
              </button>
              <button className={styles.allowButton} onClick={handleclick}>
                Allow
              </button>
            </div>
          </div>

          <p className={styles.sdkVersion}>SDK Version &lt;VX&gt;</p>
        </div>
      )}
    </>
  );
};

export default ConsentDetailsForm;
