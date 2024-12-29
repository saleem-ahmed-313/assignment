import React, { useState } from "react";
import styles from "./TokenValidator.module.css";

const TokenValidator = () => {
    const TableItems = [
        {
            id: 1,
            name: "Device ID",
            value: "b9f8e2d4-9c3a-4571-ae84-3c42f2029fa7",
            },
            {
            id: 2,
            name: "Hashed User ID",
            value:
                "a2b0c4a2f91e1cfa9fae0898f9a2427fee416849a93ac49599b7852b855",
            },
            {
            id: 3,
            name: "Timestamp",
            value: "2024-06-12T14:35:22Z",
            },
            {
            id: 4,
            name: "Scope",
            value: "facial scan, Location Access",
            },
 
    ]
  const [token, setToken] = useState("");
  const [isTokenValidated, setIsTokenValidated] = useState(false);

  const handleValidate = () => {
    //call api to validate token
    //getting data from the backend and diplaying in the frontend
    setIsTokenValidated(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tokenInputContainer}>
        <div className={styles.Tokenform}>
        <label htmlFor="token" className={styles.tokenLabel}>Token</label>
        <input
          id="token"
          type="text"
          className={styles.tokenInput}
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="<Token Value>"
        />
        </div>
        <button className={styles.validateButton} onClick={handleValidate}>
          Validate Token
        </button>
      </div>
      {isTokenValidated && (
        <div className={styles.tokenDetails}>
            
            <div className={styles.header}>
                <p>Consent Status</p>
                <button className={styles.acceptBtn} onClick={()=>{}}>
                &#10004; Accepted
                </button>
            </div>

      
          <div className={styles.details}>
            <div className={styles.detailsHeader}>
                <p>Consent Details</p>
            </div>
            <div className={styles.detailsTable}>
                        {TableItems.map((item) => (
                          <div key={item.id} className={styles.TableItem}>
                            <span>{item.name}</span>
                            <p >{item.value}</p>
                          </div>
                        ))}

                {/*
                <div className={styles.TableItem}>
                    <span>Device ID</span>
                    <p>
                        b9f8e2d4-9c3a-4571
                        -ae84-3c42f2029fa7
                    </p>
                </div>
                <div className={styles.TableItem}>
                    <span>Hashed User ID</span>
                    <p>
                        a2b0c4a2f91e1cfa9fae0898f9a2427fee416849a93ac49599b7852b855
                    </p>
                </div>
                <div className={styles.TableItem}>
                    <span>Timestamp</span>
                    <p>
                        2024-06-12T14:35:22Z
                    </p>
                </div>
                <div className={styles.TableItem}>
                    <span>Scope</span>
                    <p>
                        facial scan, Location Access
                    </p>
                </div>
                */}
                <div className={styles.TableItem}>
                    <span>Purpose</span>
                    <p>
                        <pre>
                            User onboarding and identity
                            verification
                        </pre>
                        <pre>
                            Fraud prevention and compliance
                            checks
                        </pre>
                    </p>
                </div>

            </div>

            </div>
            <div >
            <div className={styles.detailsHeader} style={{marginTop:'0px'}} >
                <p style={{marginBottom:'20px'}}>Tenure</p>
            </div>
            <div className={styles.detailsTable} >
                <div className={styles.TableItem}>
                    <span>Scope</span>
                    <p>
                        Chrome
                    </p>
                </div>
                </div>
                </div>
        </div>
      )}
    </div>
  );
};

export default TokenValidator;
