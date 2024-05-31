export const About = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="d-flex flex-row bd-highlight mb-3 mt-3 justify-content-evenly">
        <div className="w-33 m-lg-3 p-3 bg-info text-white">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="w-33 m-lg-3 p-3 bg-info text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="w-33 p-3 m-lg-3 bg-info text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
            dignissim convallis aenean et tortor at risus. Pellentesque sit amet
            porttitor eget dolor morbi non. Cursus vitae congue mauris rhoncus
            aenean. Consequat ac felis donec et odio. Et netus et malesuada
            fames ac turpis. Vulputate sapien nec sagittis aliquam malesuada
            bibendum. Sed egestas egestas fringilla phasellus faucibus
            scelerisque eleifend.
          </p>
        </div>
      </div>
      <div className="d-flex flex-row bd-info mb-3 mt-3 justify-content-evenly">
        <div className="w-33 p-3 m-lg-3 bg-info text-white">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="w-33 p-3 m-lg-3 bg-info text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="w-33 p-3 m-lg-3 bg-info text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
            dignissim convallis aenean et tortor at risus. Pellentesque sit amet
            porttitor eget dolor morbi non. Cursus vitae congue mauris rhoncus
            aenean. Consequat ac felis donec et odio. Et netus et malesuada
            fames ac turpis. Vulputate sapien nec sagittis aliquam malesuada
            bibendum. Sed egestas egestas fringilla phasellus faucibus
            scelerisque eleifend.
          </p>
        </div>
      </div>
      <div className="mt-3 mb-3 d-flex justify-content-center align-content-center">
        <p>About Page &nbsp;</p> <p>Copyright © {currentYear}</p>
      </div>
    </>
  );
};
