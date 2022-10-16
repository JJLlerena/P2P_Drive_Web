import { Link } from "react-router-dom";

export default function Test(){
    return(
        <div>
            <h1>Testing</h1>
            <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
        </div>
    );

}

