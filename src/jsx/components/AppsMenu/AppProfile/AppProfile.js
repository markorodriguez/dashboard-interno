import React, { Fragment, useState, useEffect } from "react";
import Axios from "axios";



import Chartist from "../../charts/chartist/area"

const AppProfile = () => {
  const [fetched, setFetched] = useState(false);
  const [ganancias, setGanancias] = useState("");

  useEffect(() => {
    const data = {
      año: 2021,
    };
    Axios.post("https://backend-clinica2331.herokuapp.com/ganancias", data).then((res) => {
      setGanancias(res.data);
      setFetched(true);
    });
  }, []);

  return (
    <Fragment>
      {fetched === true ? <Chartist ganancias={ganancias} /> : null}
    </Fragment>
  );
};

export default AppProfile;
