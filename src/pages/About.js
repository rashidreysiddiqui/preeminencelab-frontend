import AboutUs from "../images/AboutUs.png";
const About = () => {
  return (
    <div className="container">
      <h2 className="section-title mt-5">About</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={AboutUs}
            alt="About Us"
            style={{
              width: "100%",
              height: "50vh",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="col-md-6">
          <p className="about-us-body">
            Preeminence Lab softwares is formed with the vision of providing end to end
            online service to those businessmen who want to go online, so that
            they don't have to hassle while looking for the industry experts at
            different places. We, at Preeminence Lab softwares, are a group of high
            performing experts from the feild of website development , app
            development , graphic designing and digital marketing. We ,
            individually and in collaboration , have worked upon multiple
            projects and have made a great happy client base which always boosts
            us for our next project and performing best in it! In this
            transforming world the future is online , and those who take early
            lead in that will definitely be able to scale their business upto
            respectable heights . Our aim is to help you in transforming your
            wishes of going online into real websites and apps and market them
            digitally so that you take a lead in your business and explore
            unlimited potential of online world. So, If you want any of the
            services mentioned above give us a message and we will be happy to
            reply with the best solution for you. Team Preeminence Lab
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />

      <h2 className="section-title mt-4">Who We Are</h2>
      <p className="about-us-body">
        Maecenas finibus suscipit ipsum, nec condimentum magna porttitor a.
        Vivamus sagittis cursus nisi. Duis scelerisque fermentum nibh in
        euismod. Fusce tempor suscipit ex id semper. Sed eu imperdiet felis. Sed
        efficitur dignissim nulla, nec sagittis arcu vestibulum eu. Nulla
        ullamcorper, neque eget viverra auctor, purus nibh ultrices tortor, sed
        auctor augue leo et mi. Etiam eu dui maximus, mattis eros eget,
        porttitor nulla. Mauris at condimentum enim. Ut ultricies nulla ipsum,
        nec viverra est facilisis nec. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Curabitur mi sapien, tempus quis orci vel, elementum
        eleifend leo.
      </p>
      <p className="about-us-body">
        Donec dignissim risus quis ex tristique fringilla. Suspendisse a nunc
        risus. Fusce feugiat nisi at nibh posuere porttitor. Mauris vel dolor
        scelerisque, hendrerit nibh et, rhoncus odio. Duis non lobortis magna.
        Aliquam ac enim ut ipsum viverra pretium. Donec gravida auctor eros, eu
        sodales orci posuere vitae.
      </p>
      <p className="about-us-body">
        Mauris auctor dui rutrum ipsum dapibus tincidunt. Fusce vulputate libero
        risus, id posuere neque auctor in. Mauris dictum elit interdum justo
        tempor, sed luctus ex cursus. Suspendisse potenti. Integer diam quam,
        laoreet sollicitudin euismod et, sodales fermentum diam. Nam ut
        ullamcorper orci. Cras eget luctus orci, sed convallis risus. Donec nisi
        lacus, faucibus id sapien ac, convallis ultrices augue. Quisque euismod
        eros a elit feugiat consectetur et et nibh. Pellentesque non urna quis
        justo accumsan tempor.
      </p>
      <p className="about-us-body">
        Nulla vitae ipsum sem. Aenean maximus purus at congue ultrices. Donec
        gravida egestas rutrum. Cras ac libero mauris. Fusce fringilla purus ut
        ligula gravida, vel vestibulum ligula vehicula. Nunc ac metus blandit
        enim sollicitudin rhoncus. Pellentesque sit amet luctus mi, sed interdum
        nisl. Nullam in mi vitae nisl convallis condimentum non sed mi.
      </p>
    </div>
  );
};

export default About;
