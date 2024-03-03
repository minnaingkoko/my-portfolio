const ContactInfo = () => {
  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Get in Touch</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.65069873353616!2d96.2330655785075!3d16.855542455388218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c19310ae53ea11%3A0x9c444037b9fe755f!2sYADANAR%20CCTV!5e0!3m2!1sen!2smm!4v1709430338225!5m2!1sen!2smm" 
            style={{ border: 0, width: "100%", height: "100%" }} 
            allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Address . . . . .</strong> Yangon, Myanmar
              </li>
              <li>
                <strong>Email . . . . .</strong> minnaingkoko2001@gmail.com
              </li>
              <li>
                <strong>Phone . . . . .</strong> +959799889759
              </li>
              <li>
                <strong>Freelance . . . . .</strong> Available
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactInfo;
