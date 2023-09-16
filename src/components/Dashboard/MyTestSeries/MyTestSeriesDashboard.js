import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import Divider from "../../Tools/Divider";
import Loader from "../../Tools/Loader";
import privateAxios from "../../../axios/privateAxios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./MyTestSeries.scss";

const MyTestSeriesDashboard = () => {
  const [myTestseriesData, setMyTestseriesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const swiperSetting = getSwipersetting();

  useEffect(() => {
    const loadMyCourse = () => {
      setLoading(true);
      privateAxios
        .get("/mytestseries")
        .then((res) => {
          res?.data.length > 0 ? setMyTestseriesData(res?.data) : setNoData(true);
          setLoading(false);
        })
        .catch((e) => console.log(e));
    };

    loadMyCourse();
  }, []);

  return (
    <div className="myTestSeriesContainer">
      <div className="myTestSeriesHeaderWrapper">
        <h1>My Test Series</h1>
        <Button variant="contained" size="small">
          <NavLink to={"/test_series"} className="buttonLink">
            Explore More
          </NavLink>{" "}
        </Button>
      </div>
      <Divider customStyle={{ backgroundColor: "#1A7FBE" }} />
      {loading && <Loader />}
      {noData ? (
        <div className="noData">
          <img src="/images/dashboard/null_testseries.svg" alt="" />
          <Button variant="contained">
            <NavLink to={"/test_series"} className="buttonLink">
              Browse Test Series
            </NavLink>
          </Button>
        </div>
      ) : (
        <div className="content">
          <Swiper {...swiperSetting}>
            {myTestseriesData.map((item) => (
              <SwiperSlide key={`course-collection-${item.id}`}>
                <NavLink to={`/test_series/${item.id}/testset`}>
                  <img
                    className="fluid-image"
                    src={item?.thumbnail}
                    alt={item?.title}
                    style={{ maxWidth: "15rem" }}
                  />
                </NavLink>
              </SwiperSlide>
            ))}
          </Swiper>
          <IconButton className="rightArrow">
            <ArrowRightAltIcon fontSize="medium" />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default MyTestSeriesDashboard;

const getSwipersetting = () => {
  return {
    navigation: {
      nextEl: ".rightArrow",
    },
    slidesPerView: "auto",
    spaceBetween: 30,
    modules: [Navigation],
    className: "mySwiper",
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
};
