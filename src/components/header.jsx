import { useState} from "react";
import Select from "react-select";
export const Header = (props) => {
  const [year, setYear] = useState(null);

  var years = (() => {
    var min = 1985;
    var max = 2021;
    var years = [];
    for (var i = min; i < max; i++) {
      years.push({
        value: i,
        label: i
      });
    }
    return years;
  })();

  function handleSetYear(year) {
    // const year = yearSelectRef.current.value;
    setYear(year);
  }

  function handleSubmitYear() {
    if (year != null) {
      props.parentCallback(year);
    } 
  }
  const mystyle = {
    display: "inline-flex",
    alignItems: "baseline"
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <div 
                  className="yearSelect" 
                  style={mystyle}>
                  <Select onChange={handleSetYear}
                    isSearchable={true}
                    name="years"
                    options={years}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder="Graduation Year"
                  />
                  <a
                    // href='#features'
                    className="btn btn-custom btn-lg page-scroll"
                    style={{padding: "10 20"}}
                    onClick={handleSubmitYear}
                  >
                    Get truth
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
