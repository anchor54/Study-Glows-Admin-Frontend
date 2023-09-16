const Location = () => {
  return (
    <div className="location">
      <h1 className="display_small">Location</h1>
      <p className="body_large">Find us here</p>
      <div className="map">
        <iframe
          title="location"
          width="100%"
          height="465"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=1280&amp;height=465&amp;hl=en&amp;q=Sector%20C1%20LDA%20Colony%20Kanpur%20road%20Lucknow%20+(Sector%20C1%20LDA%20Colony%20Kanpur%20road%20Lucknow)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>{" "}
        <script
          type="text/javascript"
          src="https://embedmaps.com/google-maps-authorization/script.js?id=46a49706e568e2cce9a28535acb715ebad645c7d"
        ></script>
      </div>
    </div>
  );
};

export default Location;
