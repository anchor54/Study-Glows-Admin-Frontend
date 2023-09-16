import { Swiper, SwiperSlide } from "swiper/react";

import { NavLink } from "react-router-dom";
import { useFetchTestseriesLimit } from "../../../helper/Testseries/useFetchTestseriesLimit";
import CardImage from "../../Tools/CardImage";
import Loader from "../../Tools/Loader";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./TestSeriesSlideList.scss";

export const TestSeriesSlideList = ({ heading = "Popular" }) => {
  const swiperSetting = getSwipersetting();
  const [testseriesData, loading] = useFetchTestseriesLimit();

  return (
    <div className="popularTestSeries">
      <h1 className="display_small">{heading} Test Series</h1>
      <div className="testSeriesCardWrapper">
        {loading && <Loader />}

        <Swiper {...swiperSetting}>
          {testseriesData.map((item) => (
            <SwiperSlide key={`popular-testseries-${item.id}`}>
              <NavLink to={`/test_series/${item.id}`} style={{ width: "100%" }}>
                <CardImage thumbnail={item?.thumbnail} alt={item?.title} />
              </NavLink>{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const getSwipersetting = () => {
  return {
    navigation: true,
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: true,
    // },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    // loop: true,
    scrollbar: { draggable: true },
    // modules: [Autoplay, Navigation],
    className: "mySwiper",
  };
};
