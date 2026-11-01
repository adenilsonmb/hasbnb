import { FavoriteButton } from "./FavoriteButton";

const Item = () => {
  return (
    <a href="" className="aspect-square object-cover relative">
      <FavoriteButton/>

      <img
        className="mb-4 rounded-3xl"
        src="https://a0.muscache.com/im/pictures/hosting/Hosting-1802966532496625368/original/2d8491f7-9f17-4ee7-9c4f-8375874f733d.png?im_w=720"
        alt=""
      />
      <div className="grid gap-2">
        <h3 className="font-semibold lg:text-xl">Apartamento - Hermosillo</h3>
        <p className="text-gray-600">
          Hexu510 Starbucks Consulado Americano Aeroporto
        </p>
        <p>2 Camas</p>
        <p>2-7 de nov.</p>
        <p>
          <span className="font-semibold">R$ 599</span> por noite
        </p>
      </div>
    </a>
  );
};

export default Item;
