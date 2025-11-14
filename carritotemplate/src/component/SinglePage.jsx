import { Link } from "react-router-dom"

const SinglePage = ({titulo}) => {
  return (
     <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6 wow fadeInUp" data-wow-delay="0.1s">{titulo}</h1>
        <ol className="breadcrumb justify-content-center mb-0 wow fadeInUp" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><Link to={"/home"} href="#">Home</Link></li>
            <li className="breadcrumb-item"><Link to={"/shop"} href="#">Pages</Link></li>
            <li className="breadcrumb-item active text-white">{titulo}</li>
        </ol>
    </div>
  )
}

export default SinglePage