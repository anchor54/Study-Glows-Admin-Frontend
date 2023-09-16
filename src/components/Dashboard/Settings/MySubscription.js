import { useState, useEffect } from "react";
import { Button } from "@mui/material";

import Divider from "../../Tools/Divider";
import Loader from "../../Tools/Loader";
import privateAxios from "../../../axios/privateAxios";

import "./Settings.scss";
import { NavLink } from "react-router-dom";

function MySubscription() {
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadSavedCourse = () => {
      setLoading(true);
      privateAxios
        .get("/mysubscription")
        .then((res) => {
          setLoading(false);
          setSubscriptionData(res.data);
        })
        .catch((e) => console.log(e));
    };

    /** load saved blogs */
    loadSavedCourse();
  }, []);

  return (
    <div className="mySubscription">
      <h1>My Subscription</h1>
      <Divider customStyle={{ backgroundColor: "#1A7FBE" }} />
      {loading && <Loader />}
      <div className="content">
        {subscriptionData.map((item) => (
          <div className="card" key={`my-subscription-${item.id}`}>
            {item?.type === "course" ? (
              <>
                <div>
                  <h3>{item?.course?.title}</h3>
                  {/* {item?.expire_status === true ? <p>Expired on {item?.expired_on}</p> : <p> Valid till {item?.expired_on}</p>} */}
                </div>
                <div>
                  {item?.expire_status === true ? (
                    <Button variant="contained" size="small" key={`my-subscription-${item.id}-option-renew`}>
                      <NavLink to={``} className="buttonLink">
                        Renew Subscription
                      </NavLink>
                    </Button>
                  ) : (
                    <Button variant="contained" size="small" key={`my-subscription-${item.id}-option-explore`}>
                      <NavLink to={``} className="buttonLink">
                        Go to course
                      </NavLink>
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3>{item?.testseries?.title}</h3>
                  {/* {item?.expire_status === true ? <p>Expired on {item?.expired_on}</p> : <p> Valid till {item?.expired_on}</p>} */}
                </div>
                <div>
                  {item?.expire_status === true ? (
                    <Button variant="contained" size="small" key={`my-subscription-${item.id}-option-renew`}>
                      <NavLink to={``} className="buttonLink">
                        Renew Subscription
                      </NavLink>
                    </Button>
                  ) : (
                    <Button variant="contained" size="small" key={`my-subscription-${item.id}-option-explore`}>
                      <NavLink to={``} className="buttonLink">
                        Go to testseries
                      </NavLink>
                    </Button>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySubscription;
