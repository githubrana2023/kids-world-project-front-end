import { Helmet } from "react-helmet";
const BlogPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kids World | Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-[2]">
          <img
            src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5185.jpg?size=626&ext=jpg&ga=GA1.1.607451879.1674134985&semt=ais"
           className="mix-blend-multiply"
          />
        </div>

        <div className="flex-[2]">
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-bold">
              <span className="text-[#6E7BFF]">Q1 :</span> What is an access
              token and refresh token? How do they work and where should we
              store them on the client-side?
            </div>
            <div className="collapse-content">
              <p>
                <span className="text-[#6E7BFF]">Answer :</span> Token basically
                using to protect API, protect sensitive data from unauthorize
                user.Access token create when user created or user logged in
                into website. Refresh token work like a something you recover.
                when access token get expired that time refresh token help to
                get another new access token{" "}
              </p>
            </div>
          </div>

          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-bold">
              <span className="text-[#6E7BFF]">Q2 :</span> Compare SQL and NoSQL
              databases?
            </div>
            <div className="collapse-content">
              <p>
                <span className="text-[#6E7BFF]">Answer :</span> NoSQL database
                are schema-less or schema flexible databases.NoSQL databases are
                designed to scale horizontally across multiple servers, enabling
                distributed computing and accommodating high-velocity, big data
                workloads. SQL databases have a fixed schema, meaning the
                structure and relationships between tables are defined upfront.{" "}
              </p>
            </div>
          </div>

          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-bold">
              <span className="text-[#6E7BFF]">Q3 :</span> What is express js?
              What is Nest JS (google it)?
            </div>
            <div className="collapse-content">
              <p>
                <span className="text-[#6E7BFF]">Answer :</span> Express.js is a
                minimalistic and flexible web application framework for Node.js
                . Nest.js, on the other hand, is a progressive Node.js framework
                for building efficient, scalable, and maintainable server-side
                applications.{" "}
              </p>
            </div>
          </div>

          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-bold">
              <span className="text-[#6E7BFF]">Q4 :</span> What is MongoDB
              aggregate and how does it work (google it)?
            </div>
            <div className="collapse-content">
              <p>
                <span className="text-[#6E7BFF]">Answer :</span> In MongoDB, the
                aggregate method is used to perform advanced data processing and
                analysis operations on collections of documents. It allows you
                to perform various transformations, calculations, and
                aggregations on the data stored in a MongoDB collection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
