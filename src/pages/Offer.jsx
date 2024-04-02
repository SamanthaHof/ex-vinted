import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  //console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <div className="pic-item">
        <img src={data.product_image.secure_url} alt="" />
      </div>
      <p>{data.product_price} €</p>
      <div>
        {data.product_details.map((detail) => {
          //console.log(detail);
          const keys = Object.keys(detail);
          // console.log(keys);
          const keyName = keys[0];
          //console.log(keyName);
          return (
            <p key={keyName}>
              {keyName} {detail[keyName]}
            </p>
          );
        })}
        <Link
          to="/payment"
          state={{
            title: offer.product_name,
            price: offer.product_price,
            decription: offer.product_description,
          }}
        >
          <button className="">Acheter</button>
        </Link>
      </div>
    </main>
  );
};

export default Offer;
