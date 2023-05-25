import { Helmet } from "react-helmet";
const Spinner = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Kids World | Spinner</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <button className="btn loading">loading</button>
        </div>
    );
};

export default Spinner;